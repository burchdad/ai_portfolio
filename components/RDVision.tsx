'use client';

import { motion } from 'framer-motion';
import { ecosystemData } from '@/lib/ecosystemData';

export default function RDVision() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 border-t border-ghost-green/20">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">🧪 R&D & Future Vision</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Cutting-edge research pushing the boundaries of autonomous AI systems
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {ecosystemData.rdVision.map((project) => (
          <motion.div
            key={project.id}
            className="group relative p-8 rounded-2xl border border-ghost-purple/30 bg-gradient-to-br from-ghost-purple/5 to-transparent hover:border-ghost-purple/60 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            {/* Gradient backdrop */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl bg-gradient-to-br from-ghost-purple/10 to-ghost-blue/5 transition-opacity duration-300" />

            <div className="relative z-10">
              {/* Icon and Title */}
              <div className="mb-4">
                <p className="text-5xl mb-3">{project.icon}</p>
                <h3 className="text-2xl font-bold text-ghost-lime mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-ghost-blue font-semibold mb-3">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ghost-purple/20 border border-ghost-purple/40">
                <span className="w-2 h-2 bg-ghost-purple rounded-full animate-pulse" />
                <p className="text-xs text-ghost-purple font-semibold">
                  {project.status}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Vision Statement */}
      <motion.div
        className="mt-16 p-8 rounded-2xl border border-ghost-green/20 bg-gradient-to-r from-ghost-green/5 to-ghost-blue/5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-ghost-green mb-4">🚀 The Vision</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          The future of business isn't about hiring more developers or managers. It's about deploying autonomous AI systems that operate 24/7, learn continuously, and scale without adding headcount. Ghost is building the infrastructure for that future—a complete autonomous OS where AI agents coordinate, make decisions, and drive revenue independently.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          Every system in the Ghost ecosystem is designed to be: modular (plug-and-play), autonomous (requires no human oversight), scalable (works for 1 business or 1 million), and intelligent (improves over time).
        </p>
      </motion.div>
    </section>
  );
}
