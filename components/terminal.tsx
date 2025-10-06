"use client"

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { Terminal as TerminalIcon, Copy, Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createTerminalCommands, getCommandSuggestions, type TerminalOutput, type TerminalContext } from '@/lib/terminal-commands';

interface TerminalProps {
  onClose?: () => void;
  context: TerminalContext;
}

interface HistoryEntry {
  command: string;
  output: TerminalOutput;
  timestamp: Date;
}

export function Terminal({ onClose, context }: TerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const commands = createTerminalCommands(context);

  useEffect(() => {
    if (history.length === 0) {
      setHistory([{
        command: '',
        output: {
          type: 'info',
          content: `Witaj w interaktywnym terminalu! 👋

Wpisz 'help' aby zobaczyć dostępne komendy.
Terminal steruje całą stroną - możesz nawigować, filtrować projekty, zmieniać motywy i wiele więcej.

Wskazówki:
• Użyj TAB do autouzupełniania
• ↑/↓ aby przeglądać historię komend
• Wszystkie komendy są case-insensitive

Zaczynajmy! 🚀`
        },
        timestamp: new Date()
      }]);
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleInputChange = (value: string) => {
    setInput(value);
    if (value.trim()) {
      const sugs = getCommandSuggestions(value.trim().split(' ')[0], commands);
      setSuggestions(sugs);
    } else {
      setSuggestions([]);
    }
  };

  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim();
    if (!trimmedCmd) return;

    const [commandName, ...args] = trimmedCmd.toLowerCase().split(' ');

    const command = commands.find(
      c => c.name === commandName || c.aliases?.includes(commandName)
    );

    let output: TerminalOutput;

    if (command) {
      output = command.execute(args, context);
    } else {
      output = {
        type: 'error',
        content: `Komenda nie znaleziona: ${commandName}. Wpisz 'help' aby zobaczyć dostępne komendy.`
      };
    }

    if (output.content === 'CLEAR') {
      setHistory([]);
      return;
    }

    const newEntry: HistoryEntry = {
      command: trimmedCmd,
      output,
      timestamp: new Date()
    };

    if (output.delay) {
      setHistory(prev => [...prev, { ...newEntry, output: { ...output, content: '⏳ Ładowanie...' } }]);
      await new Promise(resolve => setTimeout(resolve, output.delay));
      setHistory(prev => [...prev.slice(0, -1), newEntry]);
    } else {
      setHistory(prev => [...prev, newEntry]);
    }

    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
      setInput('');
      setSuggestions([]);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        const parts = input.split(' ');
        parts[0] = suggestions[0];
        setInput(parts.join(' '));
        setSuggestions([]);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const handleCopy = () => {
    const text = history.map(h => `$ ${h.command}\n${h.output.content}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TerminalIcon className="w-4 h-4" />
              <span>wiktor@portfolio:~$</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-1.5 hover:bg-accent rounded transition-colors"
              aria-label="Kopiuj historię"
            >
              {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
            {onClose && (
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-accent rounded transition-colors"
                aria-label="Zamknij terminal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div
          ref={terminalRef}
          className="p-4 h-[400px] overflow-y-auto font-mono text-sm bg-background/50"
          onClick={() => inputRef.current?.focus()}
        >
          <AnimatePresence>
            {history.map((entry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-4"
              >
                {entry.command && (
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <span className="text-accent">$</span>
                    <span>{entry.command}</span>
                  </div>
                )}
                <div
                  className={`pl-4 whitespace-pre-wrap ${
                    entry.output.type === 'error'
                      ? 'text-red-500'
                      : entry.output.type === 'success'
                      ? 'text-green-500'
                      : entry.output.type === 'info'
                      ? 'text-blue-400'
                      : 'text-muted-foreground'
                  }`}
                >
                  {entry.output.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <div className="flex items-center gap-2">
            <span className="text-accent">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none text-primary"
              placeholder="Wpisz komendę..."
              autoFocus
            />
          </div>

          {suggestions.length > 0 && (
            <div className="mt-2 text-xs text-muted-foreground">
              Sugestie: {suggestions.join(', ')} (naciśnij TAB)
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
