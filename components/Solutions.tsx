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
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {ecosystemData.solutions.map((solution) => (
          <motion.div
            key={solution.id}
            className="group relative rounded-2xl border border-ghost-green/20 bg-gradient-to-br from-ghost-dark/80 to-ghost-dark/40 p-6 hover:border-ghost-green/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-ghost-green/10"
            variants={itemVariants}
          >
            {/* Gradient background on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-ghost-green to-ghost-blue rounded-2xl transition-opacity duration-300 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon & Title */}
              <div className="mb-4">
                <p className="text-4xl mb-3">{solution.icon}</p>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-ghost-green transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-ghost-lime font-semibold">
                  {solution.subtitle}
                </p>
              </div>

              {/* Key takeaway bullets */}
              <div className="mb-5 text-sm text-gray-300 space-y-2 line-clamp-3">
                {solution.description.split('.').slice(0, 2).map((bullet, idx) => 
                  bullet.trim() && (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-ghost-green mt-1">•</span>
                      <span>{bullet.trim()}</span>
                    </div>
                  )
                )}
              </div>

              {/* Impact Badge */}
              <div className="mb-5 inline-flex items-center gap-2 px-3 py-2 rounded-full bg-ghost-green/10 border border-ghost-green/30">
                <span className="text-xs font-bold text-ghost-green">
                  💡 {solution.impact}
                </span>
              </div>

              {/* Best for */}
              <div className="flex items-center justify-between pt-4 border-t border-ghost-green/10">
                <p className="text-xs text-gray-400">
                  👥 {solution.use_case}
                </p>
                <span className="text-ghost-green text-lg group-hover:translate-x-1 transition-transform">→</span>
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
