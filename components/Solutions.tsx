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
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">💼 What I Build for Clients</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Ready-to-deploy AI solutions that replace entire business functions and drive revenue
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
            className="group relative p-8 rounded-2xl border border-ghost-green/30 bg-gradient-to-br from-ghost-green/5 to-transparent hover:border-ghost-green/60 transition-all duration-300 cursor-pointer"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            {/* Gradient backdrop on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl bg-gradient-to-br from-ghost-green/10 to-ghost-blue/5 transition-opacity duration-300" />

            <div className="relative z-10">
              {/* Icon and Title */}
              <div className="mb-4">
                <p className="text-5xl mb-3">{solution.icon}</p>
                <h3 className="text-2xl font-bold text-ghost-green mb-2">
                  {solution.title}
                </h3>
                <p className="text-sm text-ghost-lime font-semibold mb-3">
                  {solution.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Impact */}
              <div className="mb-6 p-4 bg-ghost-green/10 rounded-lg border border-ghost-green/30">
                <p className="text-sm text-ghost-green font-semibold">
                  💡 Impact: {solution.impact}
                </p>
              </div>

              {/* Use Case */}
              <p className="text-sm text-ghost-blue">
                <span className="font-semibold">Best for:</span> {solution.use_case}
              </p>
            </div>
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
