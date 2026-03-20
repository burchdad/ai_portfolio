'use client';

import { motion } from 'framer-motion';
import { ecosystemData } from '@/lib/ecosystemData';
import SystemCard from './SystemCard';

export default function Tier2Systems() {
  return (
    <div className="w-full">
      <motion.div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-ghost-blue">⚙️ Tier 2: Specialized Systems</span>
        </h2>
        <p className="text-gray-400 text-lg">
          Enhanced capabilities that plug into and extend the core platforms
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecosystemData.tier2.map((system, idx) => (
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
