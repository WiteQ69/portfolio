"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface LighthouseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LighthouseModal({ isOpen, onClose }: LighthouseModalProps) {
  const scores = [
    { label: 'Performance', value: 100, color: 'text-green-500' },
    { label: 'Accessibility', value: 100, color: 'text-green-500' },
    { label: 'Best Practices', value: 100, color: 'text-green-500' },
    { label: 'SEO', value: 100, color: 'text-green-500' }
  ];

  const metrics = [
    { label: 'First Contentful Paint', value: '0.8s', target: '< 1.8s', status: 'pass' },
    { label: 'Largest Contentful Paint', value: '1.2s', target: '< 2.5s', status: 'pass' },
    { label: 'Total Blocking Time', value: '50ms', target: '< 200ms', status: 'pass' },
    { label: 'Cumulative Layout Shift', value: '0.001', target: '< 0.1', status: 'pass' },
    { label: 'Speed Index', value: '1.1s', target: '< 3.4s', status: 'pass' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">Lighthouse Audit Results</DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {scores.map((score) => (
              <div key={score.label} className="text-center">
                <div className={`text-5xl font-bold mb-2 ${score.color}`}>
                  {score.value}
                </div>
                <div className="text-sm text-muted-foreground">{score.label}</div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Core Web Vitals</h3>
            <div className="space-y-4">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-accent font-semibold">{metric.value}</span>
                      <span className="text-muted-foreground">({metric.target})</span>
                      <span className="text-green-500">Pass</span>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                    <div className="h-full bg-accent rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-accent/10 rounded-lg p-4">
            <h4 className="font-semibold mb-2">Jak uruchomić test lokalnie:</h4>
            <pre className="bg-background rounded p-3 text-sm overflow-x-auto">
              <code>npm install -g lighthouse{'\n'}lighthouse https://your-site.com --view</code>
            </pre>
          </div>

          <div className="text-sm text-muted-foreground">
            <p>
              Wyniki mogą się różnić w zależności od urządzenia, połączenia internetowego i innych czynników.
              Powyższe wyniki są przykładowe i pokazują typowe wartości dla tej strony.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
