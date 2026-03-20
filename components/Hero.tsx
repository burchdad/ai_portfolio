'use client';

import { motion } from 'framer-motion';
import { ecosystemData } from '@/lib/ecosystemData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <motion.div
        className="text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
          variants={itemVariants}
        >
          {ecosystemData.hero.name}
        </motion.h1>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-2xl md:text-3xl font-semibold text-ghost-green mb-2">
            {ecosystemData.hero.title}
          </p>
          <p className="text-lg text-ghost-blue font-medium">
            {ecosystemData.hero.subtitle}
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p
          className="text-lg text-gray-400 mb-12 leading-relaxed"
          variants={itemVariants}
        >
          {ecosystemData.hero.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-3 bg-ghost-green text-black font-bold rounded-lg hover:bg-ghost-lime transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Ecosystem
          </motion.button>
          <motion.a
            href="https://github.com/burchdad"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-ghost-green rounded-lg text-ghost-green hover:bg-ghost-green/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View on GitHub
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 mx-auto text-ghost-green"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
