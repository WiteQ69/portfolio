"use client"

import { ExternalLink, Github, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { siteContent } from '@/lib/content';
import Image from 'next/image';

interface ProjectModalProps {
  slug: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ slug, isOpen, onClose }: ProjectModalProps) {
  const project = siteContent.projects.find(p => p.slug === slug);

  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Problem</h3>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Rozwiązanie</h3>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Rezultat</h3>
            <p className="text-accent font-semibold">{project.result}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Stack technologiczny</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-md bg-accent/10 text-accent text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            {project.liveUrl && (
              <Button asChild className="flex-1">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Odwiedź stronę
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild className="flex-1">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Zobacz kod
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
