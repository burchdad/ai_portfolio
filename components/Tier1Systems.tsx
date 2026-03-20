'use client';

import { motion } from 'framer-motion';
import { ecosystemData } from '@/lib/ecosystemData';
import SystemCard from './SystemCard';

export default function Tier1Systems() {
  return (
    <div className="w-full">
      <motion.div className="mb-16">
        <h2 className="mb-4">
          <span className="gradient-text">🧠 Tier 1: Core Platforms</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl">
          The flagship systems that form the foundation of the Ghost ecosystem. These four core platforms orchestrate everything—autonomous agents working 24/7 to replace entire business functions.
        </p>
      </motion.div>

      <div className="grid-systems">
        {ecosystemData.tier1.map((system, idx) => (
          <motion.div
            key={system.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <SystemCard system={system} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
