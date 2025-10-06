"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteContent } from '@/lib/content';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Umiejętności & Technologie</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nowoczesny stack technologiczny wybrany z myślą o wydajności i skalowalności
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {siteContent.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <span className="text-accent font-bold">{skill.level}%</span>
                  </div>

                  <div className="w-full bg-secondary rounded-full h-2 mb-4 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                      className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full"
                    />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
            <Badge variant="secondary" className="text-sm py-2 px-4">
              ⚡ Lighthouse 100/100
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              ♿ WCAG AA
            </Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">
              🚀 Core Web Vitals Pass
            </Badge>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
