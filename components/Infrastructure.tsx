'use client';

import { motion } from 'framer-motion';
import { ecosystemData } from '@/lib/ecosystemData';

export default function Infrastructure() {
  return (
    <div className="w-full">
      <motion.div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-ghost-lime">🔗 Tier 4: Infrastructure & Integrations</span>
        </h2>
        <p className="text-gray-400 text-lg">
          The backbone services and technology stack that power the entire ecosystem
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ecosystemData.infrastructure.map((section, sectionIdx) => (
          <motion.div
            key={sectionIdx}
            className="bg-ghost-gray/20 border border-ghost-lime/20 rounded-lg p-6 hover-lift"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: sectionIdx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-ghost-lime mb-4">{section.name}</h3>
            <ul className="space-y-3">
              {section.items.map((item, itemIdx) => (
                <motion.li
                  key={itemIdx}
                  className="flex items-start text-gray-300 text-sm"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-ghost-green mr-3 mt-1">✓</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Tech Philosophy */}
      <motion.div
        className="mt-12 bg-gradient-to-r from-ghost-green/10 to-ghost-blue/10 border border-ghost-green/20 rounded-lg p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-ghost-green mb-4">Architecture Philosophy</h3>
        <p className="text-gray-400 leading-relaxed">
          The Ghost ecosystem is built on a modular, scalable architecture that prioritizes autonomy and interoperability. 
          Each system can operate independently or in concert with others, creating a flexible infrastructure designed to 
          adapt to evolving business needs. Multi-model AI fallback ensures reliability, while containerization and microservices 
          enable horizontal scaling.
        </p>
      </motion.div>
    </div>
  );
}
