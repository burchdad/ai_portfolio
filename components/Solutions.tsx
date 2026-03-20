'use client';

import { motion } from 'framer-motion';
import { ecosystemData } from '@/lib/ecosystemData';

export default function Solutions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section className="py-20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-6">
          <span className="gradient-text">💼 What I Build for Clients</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Ready-to-deploy AI solutions that replace entire business functions and drive revenue at scale
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {ecosystemData.solutions.map((solution) => (
          <motion.div
            key={solution.id}
            className="card-base"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <div className="mb-6">
              <p className="text-6xl mb-4">{solution.icon}</p>
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-ghost-green transition-colors">
                {solution.title}
              </h3>
              <p className="text-sm text-ghost-lime font-semibold mb-3">
                {solution.subtitle}
              </p>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {solution.description}
            </p>

            <div className="mb-6 p-4 bg-ghost-green/5 rounded-lg border border-ghost-green/20">
              <p className="text-sm text-ghost-green font-semibold">
                💡 <span className="text-ghost-lime">Impact:</span> {solution.impact}
              </p>
            </div>

            <p className="text-sm text-ghost-blue leading-relaxed">
              <span className="font-semibold">👥 Best for:</span> {solution.use_case}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/burchdad"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-ghost-green text-black font-bold rounded-lg hover:bg-ghost-lime transition-all"
        >
          View All Projects → 
        </a>
      </motion.div>
    </section>
  );
}
