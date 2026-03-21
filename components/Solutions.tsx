'use client';

import { motion } from 'framer-motion';
import { ecosystemData } from '@/lib/ecosystemData';

export default function Solutions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Extract key features from description
  const getKeyBullets = (description: string): string[] => {
    const bullets = [
      description.split('.')[0].trim(),
      ...(description.includes('|') 
        ? description.split('|').slice(0, 1).map(s => s.trim())
        : [])
    ];
    return bullets.slice(0, 2);
  };

  return (
    <section className="py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">💼 What I Build for Clients</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Ready-to-deploy AI solutions that replace entire business functions and drive revenue at scale
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {ecosystemData.solutions.slice(0, 4).map((solution) => (
          <motion.div
            key={solution.id}
            className="group relative rounded-xl border border-ghost-green/20 bg-ghost-gray/20 p-8 hover:border-ghost-green/40 transition-all duration-300 hover:-translate-y-1"
            variants={itemVariants}
          >
            {/* Content */}
            <div className="relative z-10">
              {/* Icon & Title */}
              <div className="mb-5">
                <p className="text-5xl mb-3">{solution.icon}</p>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-ghost-green transition-colors">
                  {solution.title}
                </h3>
              </div>

              {/* Impact */}
              <p className="text-sm text-ghost-lime font-semibold mb-4">
                💡 {solution.impact}
              </p>

              {/* Key bullets - max 3 */}
              <ul className="space-y-2 text-sm text-gray-300 mb-6">
                {solution.description.split('.').slice(0, 3).map((text, idx) => {
                  const bullet = text.trim();
                  return bullet ? (
                    <li key={idx} className="flex gap-2">
                      <span className="text-ghost-green flex-shrink-0">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ) : null;
                })}
              </ul>

              {/* Use case footer */}
              <div className="pt-4 border-t border-ghost-green/10 text-xs text-gray-400">
                👥 {solution.use_case}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/burchdad"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          View All Projects on GitHub
        </a>
      </motion.div>
    </section>
  );
}
