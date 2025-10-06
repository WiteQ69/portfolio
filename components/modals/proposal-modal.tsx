"use client"

import { Download } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ProposalModalProps {
  clientName: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ProposalModal({ clientName, isOpen, onClose }: ProposalModalProps) {
  const handleDownload = () => {
    alert('W pełnej wersji tutaj zostałby wygenerowany PDF z propozycją współpracy');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">Propozycja współpracy</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-card border-2 border-border rounded-lg p-8 space-y-6">
            <div className="text-center border-b pb-6">
              <h1 className="text-3xl font-bold mb-2">PROPOZYCJA WSPÓŁPRACY</h1>
              <p className="text-muted-foreground">Wiktor Szyszka - Web Development</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Dla:</h3>
              <p className="text-xl text-accent">{clientName}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Zakres usług:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ Projektowanie i tworzenie stron internetowych</li>
                <li>✓ Aplikacje webowe (React, Next.js, TypeScript)</li>
                <li>✓ Sklepy internetowe (E-commerce)</li>
                <li>✓ Optymalizacja wydajności i SEO</li>
                <li>✓ Integracje z systemami zewnętrznymi</li>
                <li>✓ Wsparcie techniczne i utrzymanie</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Co otrzymujesz:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-accent/10 rounded p-4">
                  <h4 className="font-semibold mb-2">🚀 Wydajność</h4>
                  <p className="text-sm text-muted-foreground">
                    Lighthouse 100/100, błyskawiczne ładowanie
                  </p>
                </div>
                <div className="bg-accent/10 rounded p-4">
                  <h4 className="font-semibold mb-2">📱 Responsywność</h4>
                  <p className="text-sm text-muted-foreground">
                    Idealne działanie na wszystkich urządzeniach
                  </p>
                </div>
                <div className="bg-accent/10 rounded p-4">
                  <h4 className="font-semibold mb-2">🔍 SEO</h4>
                  <p className="text-sm text-muted-foreground">
                    Optymalizacja pod wyszukiwarki
                  </p>
                </div>
                <div className="bg-accent/10 rounded p-4">
                  <h4 className="font-semibold mb-2">♿ Dostępność</h4>
                  <p className="text-sm text-muted-foreground">
                    WCAG AA, dostępne dla wszystkich
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Proces współpracy:</h3>
              <ol className="space-y-2 text-muted-foreground">
                <li>1. Konsultacja i ustalenie wymagań</li>
                <li>2. Wycena i harmonogram projektu</li>
                <li>3. Projektowanie UX/UI</li>
                <li>4. Implementacja i testy</li>
                <li>5. Wdrożenie i szkolenie</li>
                <li>6. Wsparcie posprzedażowe</li>
              </ol>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 text-center">
              <p className="text-lg mb-2">Gotowy na rozmowę?</p>
              <p className="text-accent font-semibold text-xl">kontakt@wiktor-szyszka.dev</p>
              <p className="text-sm text-muted-foreground mt-2">Odpowiem w ciągu 24h</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={handleDownload} className="flex-1">
              <Download className="w-4 h-4 mr-2" />
              Pobierz PDF
            </Button>
            <Button variant="outline" onClick={onClose}>
              Zamknij
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
