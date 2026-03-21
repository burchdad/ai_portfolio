'use client';

import { motion } from 'framer-motion';

export default function SystemDiagram() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="architecture"
      className="relative py-24 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div className="text-center mb-20" variants={boxVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-alt">
            How Ghost Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Complete autonomous operating system for enterprise AI
          </p>
        </motion.div>

        {/* ASCII Diagram with Glow Effect */}
        <motion.div
          className="relative bg-ghost-gray/20 border border-ghost-green/20 rounded-2xl p-12 md:p-16 overflow-hidden"
          variants={boxVariants}
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-ghost-green/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Content */}
          <div className="relative z-10 font-mono text-sm md:text-base text-gray-300 overflow-x-auto">
            <pre className="whitespace-pre text-center leading-relaxed text-ghost-lime">
{`
   ╭──────────────────────────────────────╮
   │                                      │
   │         🧠 GHOSTMIND                │
   │     Multi-Agent Orchestrator        │
   │                                      │
   ╰──────────────────────────────────────╯
                  │
         ┌────────┼────────┐
         │        │        │
         ▼        ▼        ▼

   ╭─────────╮ ╭─────────╮ ╭─────────╮
   │         │ │         │ │         │
   │ 📊 CRM  │ │ 💳 AI   │ │ 🎙️ VOICE│
   │ Revenue │ │ Finance │ │ Agents  │
   │         │ │         │ │         │
   ╰─────────╯ ╰─────────╯ ╰─────────╯
         │        │        │
         └────────┼────────┘
                  │
              AUTONOMOUS
           BUSINESS OPERATIONS
              24/7 · AI-DRIVEN
`}
            </pre>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute bottom-4 right-4 w-2 h-2 bg-ghost-green rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-4 left-4 w-2 h-2 bg-ghost-blue rounded-full"
            animate={{ opacity: [0.6, 0.2, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>

        {/* System Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
        >
          {[
            {
              icon: '⚡',
              title: 'Unified Intelligence',
              desc: 'One AI orchestrator controls all systems',
            },
            {
              icon: '🔗',
              title: 'Seamless Integration',
              desc: 'Stripe, Twilio, OpenAI, Claude, Supabase',
            },
            {
              icon: '🚀',
              title: 'Autonomous 24/7',
              desc: 'Sales, finance, and comms on autopilot',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-5 rounded-lg border border-ghost-green/15 bg-ghost-dark/30 text-center"
              variants={boxVariants}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="text-sm font-bold text-ghost-green mb-1">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Compact Tech Stack */}
        <motion.div
          className="mt-8 text-center"
          variants={boxVariants}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {['Python', 'TypeScript', 'React', 'FastAPI', 'Node.js', 'Docker', 'Supabase'].map((tech) => (
              <span key={tech} className="text-xs px-3 py-1 rounded-full bg-ghost-gray/30 border border-ghost-green/10 text-gray-400">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
