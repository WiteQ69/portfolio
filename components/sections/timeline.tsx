"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteContent } from '@/lib/content';

export function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="timeline" ref={ref} className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Moja droga</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Od pierwszych linijek kodu do profesjonalnych projektów
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/0" />

            {siteContent.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div className="flex items-center gap-4 md:gap-8 mb-4">
                  {index % 2 === 0 && <div className="hidden md:flex flex-1" />}

                  <div className="relative z-10 w-16 h-16 md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center rounded-full bg-accent text-background font-bold text-lg shrink-0">
                    {item.year}
                  </div>

                  {index % 2 !== 0 && <div className="hidden md:flex flex-1" />}

                  <div className="flex-1 md:w-1/2">
                    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
