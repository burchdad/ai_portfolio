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
        <h2 className="mb-6">
          <span className="gradient-text-alt">🧪 R&D & Future Vision</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Cutting-edge research pushing the boundaries of autonomous AI systems and self-improving platforms
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
            className="card-base"
            variants={itemVariants}
            whileHover={{ y: -8 }}
          >
            <div className="mb-6">
              <p className="text-6xl mb-4">{project.icon}</p>
              <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-ghost-lime transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-ghost-blue font-semibold mb-3">
                {project.subtitle}
              </p>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ghost-purple/10 border border-ghost-purple/30">
              <span className="w-2 h-2 bg-ghost-purple rounded-full animate-pulse" />
              <p className="text-xs text-ghost-purple font-semibold">
                {project.status}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Vision Statement - Premium Card */}
      <motion.div
        className="card-base mt-16 bg-gradient-to-r from-ghost-green/5 to-ghost-blue/5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-ghost-green mb-4">🚀 The Future</h3>
        <div className="space-y-4 text-gray-300 leading-relaxed">
          <p>
            The future of business isn't about hiring more developers or managers. It's about deploying autonomous AI systems that operate 24/7, learn continuously, and scale without adding headcount.
          </p>
          <p className="text-ghost-lime font-semibold">
            Ghost is building the infrastructure for that future—a complete autonomous OS where AI agents coordinate, make decisions, and drive revenue independently.
          </p>
          <p className="border-l-2 border-ghost-green/30 pl-4 text-sm">
            Every system in the Ghost ecosystem is designed to be: <strong>modular</strong> (plug-and-play), <strong>autonomous</strong> (requires no oversight), <strong>scalable</strong> (works at any scale), and <strong>intelligent</strong> (improves over time).
          </p>
        </div>
      </motion.div>
    </section>
  );
}
