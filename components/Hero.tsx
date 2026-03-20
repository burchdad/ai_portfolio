'use client';

import { motion } from 'framer-motion';
import { ecosystemData } from '@/lib/ecosystemData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        {/* Ambient glow background */}
        <div className="ambient-glow absolute inset-0 -z-10" />
        
        <motion.div
          className="text-center max-w-5xl relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name - Subtle entry */}
          <motion.div variants={itemVariants} className="mb-4">
            <p className="text-ghost-green text-sm font-semibold tracking-widest uppercase">
              Stephen Burch
            </p>
          </motion.div>

          {/* Main Title - IMPACT STATEMENT */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 gradient-text-alt leading-tight"
            variants={itemVariants}
          >
            {ecosystemData.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-ghost-green font-semibold mb-6"
            variants={itemVariants}
          >
            {ecosystemData.hero.subtitle}
          </motion.p>

          {/* Bio - Scannable and clear */}
          <motion.div
            className="max-w-2xl mx-auto mb-12 text-gray-300 text-lg leading-relaxed"
            variants={itemVariants}
          >
            <p>{ecosystemData.hero.bio}</p>
          </motion.div>

          {/* CTA Buttons - Premium styling */}
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            variants={itemVariants}
          >
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ↓ Explore Ecosystem
            </motion.button>
            <motion.a
              href="https://github.com/burchdad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              ↓ View on GitHub
            </motion.a>
          </motion.div>

          {/* Subtle scroll hint instead of arrow */}
          <motion.div
            className="mt-16 text-ghost-green/50 text-sm font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Scroll to explore →
          </motion.div>
        </motion.div>
      </section>

      {/* Visual divider between sections */}
      <div className="section-divider" />
    </>
  );
}
