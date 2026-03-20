'use client';

import { motion } from 'framer-motion';
import { ecosystemData } from '@/lib/ecosystemData';
import SystemCard from './SystemCard';

export default function Tier1Systems() {
  return (
    <div className="w-full">
      <motion.div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-ghost-green">🧠 Tier 1: Core Platforms</span>
        </h2>
        <p className="text-gray-400 text-lg">
          The flagship systems that form the foundation of the Ghost ecosystem
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
