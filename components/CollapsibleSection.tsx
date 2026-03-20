'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CollapsibleSectionProps {
  title: string;
  description: string;
  tier: number;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function CollapsibleSection({
  title,
  description,
  tier,
  children,
  defaultOpen = false,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const borderColor = tier === 2 ? 'border-ghost-blue' : 'border-ghost-purple';
  const accentColor = tier === 2 ? 'text-ghost-blue' : 'text-ghost-purple';
  const glowColor = tier === 2 ? 'hover:shadow-blue-500/20' : 'hover:shadow-purple-500/20';

  return (
    <section className="py-12">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${borderColor}/20 bg-ghost-dark/40 hover:${borderColor}/40 ${glowColor}`}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className={`text-3xl font-bold mb-2 ${accentColor}`}>
              {title}
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              {description}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`ml-4 text-2xl ${accentColor} flex-shrink-0`}
          >
            ▼
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 px-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
