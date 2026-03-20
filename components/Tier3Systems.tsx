'use client';

import { motion } from 'framer-motion';
import { ecosystemData } from '@/lib/ecosystemData';
import SystemCard from './SystemCard';

export default function Tier3Systems() {
  return (
    <div className="w-full">
      <motion.div className="mb-16">
        <h2 className="mb-4">
          <span className="gradient-text-alt">🧬 Tier 3: Experimental R&D</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl">
          Cutting-edge research projects pushing the boundaries of autonomous AI. These systems explore the future of self-improving, fully autonomous business platforms.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecosystemData.tier3.map((system, idx) => (
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
