'use client';

import { motion } from 'framer-motion';
import { ecosystemData } from '@/lib/ecosystemData';

export default function Infrastructure() {
  return (
    <div className="w-full">
      <motion.div className="mb-16">
        <h2 className="mb-4">
          <span className="gradient-text-alt">🔗 Tier 4: Infrastructure & Tech Stack</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl">
          The backbone services, integrations, and technology stack that power the entire Ghost ecosystem
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ecosystemData.infrastructure.map((section, sectionIdx) => (
          <motion.div
            key={sectionIdx}
            className="card-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: sectionIdx * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-ghost-lime mb-4 flex items-center gap-2">
              {section.name}
            </h3>
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
        className="card-base mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-ghost-green mb-4">⚙️ Architecture Philosophy</h3>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            The Ghost ecosystem is built on a <strong>modular, scalable architecture</strong> that prioritizes autonomy and interoperability.
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex gap-2">
              <span className="text-ghost-green font-bold">▸</span>
              <span>Each system can operate independently or in concert with others</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ghost-green font-bold">▸</span>
              <span>Multi-model AI fallback ensures reliability across all environments</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ghost-green font-bold">▸</span>
              <span>Containerization and microservices enable horizontal scaling</span>
            </li>
            <li className="flex gap-2">
              <span className="text-ghost-green font-bold">▸</span>
              <span>Designed to adapt to evolving business needs without architectural changes</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
