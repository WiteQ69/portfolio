"use client"

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { siteContent } from '@/lib/content';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

interface ProjectsProps {
  activeFilter?: string | null;
  onProjectOpen?: (slug: string) => void;
}

export function ProjectsSection({ activeFilter = null, onProjectOpen }: ProjectsProps) {
  const [filter, setFilter] = useState<string | null>(activeFilter);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const allTags = Array.from(
    new Set(siteContent.projects.flatMap(p => p.tags))
  );

  const filteredProjects = filter
    ? siteContent.projects.filter(p => p.tags.includes(filter))
    : siteContent.projects;

  return (
    <section id="projects" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Portfolio Projektów</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wybrane projekty pokazujące moje podejście do rozwiązywania problemów biznesowych
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <Button
            variant={filter === null ? "default" : "outline"}
            onClick={() => setFilter(null)}
            className="gap-2"
          >
            <Filter className="w-4 h-4" />
            Wszystkie
          </Button>
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 backdrop-blur-sm group overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 3).map(tech => (
                      <span key={tech} className="text-xs px-2 py-1 rounded bg-accent/10 text-accent">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      onClick={() => onProjectOpen?.(project.slug)}
                      className="flex-1"
                    >
                      Case Study
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Otwórz ${project.title}`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Zobacz kod ${project.title}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">Brak projektów dla wybranego filtra</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
