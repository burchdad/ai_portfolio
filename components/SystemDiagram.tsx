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
          className="relative bg-gradient-to-b from-ghost-green/5 to-ghost-blue/5 border border-ghost-green/20 rounded-3xl p-12 md:p-20 overflow-hidden"
          variants={boxVariants}
        >
          {/* Background glow elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-ghost-green/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ghost-blue/10 rounded-full blur-3xl transform translate-y-1/2" />
          </div>

          {/* Content */}
          <div className="relative z-10 font-mono text-sm md:text-base text-gray-300 overflow-x-auto">
            <pre className="whitespace-pre text-center leading-relaxed">
{`
     ╭─────────────────────────────────────╮
     │                                     │
     │    🧠 GHOSTMIND                    │
     │    (AI CEO Orchestrator)           │
     │                                     │
     │    • Multi-Agent Control           │
     │    • Decision Engine               │
     │    • Task Routing                  │
     │                                     │
     ╰─────────────────────────────────────╯
                      │
            ┌─────────┼─────────┐
            │         │         │
            ▼         ▼         ▼

     ╭──────────╮ ╭──────────╮ ╭──────────╮
     │          │ │          │ │          │
     │ 📊 CRM   │ │ 💳 SCORE │ │ 🎙️ VOICE│
     │          │ │          │ │          │
     │ Revenue  │ │ Financial│ │ AI Voice │
     │ Engine   │ │ Intel    │ │ Agents   │
     │          │ │          │ │          │
     ╰──────────╯ ╰──────────╯ ╰──────────╯
            │         │         │
            └─────────┼─────────┘
                      │
            ╭─────────▼─────────╮
            │                   │
            │  📈 RESULTS       │
            │                   │
            │  • 5x Conversions │
            │  • 24/7 Ops       │
            │  • Autonomous     │
            │                   │
            ╰───────────────────╯
`}
            </pre>
          </div>

          {/* Decorative corner glows */}
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-ghost-green rounded-full opacity-60"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-2 h-2 bg-ghost-blue rounded-full opacity-60"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>

        {/* System Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
        >
          {[
            {
              icon: '⚡',
              title: 'Unified Intelligence',
              desc: 'One AI CEO controls all systems and makes enterprise decisions',
            },
            {
              icon: '🔗',
              title: 'Seamless Integration',
              desc: 'All tools communicate through centralized orchestration layer',
            },
            {
              icon: '🚀',
              title: 'Autonomous Operations',
              desc: '24/7 automation of sales, finance, and communications',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl border border-ghost-green/20 bg-ghost-dark/40 hover:border-ghost-green/50 transition-all duration-300"
              variants={boxVariants}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold text-ghost-green mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
