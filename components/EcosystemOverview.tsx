'use client';

import { motion } from 'framer-motion';

export default function EcosystemOverview() {
  return (
    <div className="w-full">
      <motion.div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Ghost AI Ecosystem
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A complete autonomous AI operating system designed to replace entire business functions
        </p>
      </motion.div>

      {/* Ecosystem Diagram */}
      <motion.div
        className="bg-ghost-gray/30 border border-ghost-green/20 rounded-lg p-8 overflow-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <svg viewBox="0 0 1200 700" className="w-full" style={{ minHeight: '400px' }}>
          {/* Background Grid */}
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00ffd0', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: '#0ea2ff', stopOpacity: 0.1 }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="1200" height="700" fill="url(#grad1)" />

          {/* Title */}
          <text x="600" y="40" textAnchor="middle" className="text-2xl font-bold" fill="#00ffd0">
            Autonomous AI Infrastructure
          </text>

          {/* Tier 1 - Core Systems */}
          <text x="600" y="100" textAnchor="middle" className="text-xl font-bold" fill="#00ff99">
            🧠 TIER 1: CORE PLATFORMS
          </text>

          {/* Tier 1 Boxes */}
          {[
            { x: 150, label: 'GhostMIND', icon: '🧠' },
            { x: 400, label: 'GhostCRM', icon: '📊' },
            { x: 650, label: 'GhostScore', icon: '💳' },
            { x: 900, label: 'Voice OS', icon: '🎙️' },
          ].map((box, idx) => (
            <g key={idx}>
              <rect
                x={box.x}
                y="130"
                width="120"
                height="80"
                fill="none"
                stroke="#00ffd0"
                strokeWidth="2"
                rx="8"
                filter="url(#glow)"
              />
              <text x={box.x + 60} y="155" textAnchor="middle" fill="#00ffd0" className="text-sm font-bold">
                {box.icon}
              </text>
              <text x={box.x + 60} y="180" textAnchor="middle" fill="#00ff99" className="text-xs">
                {box.label}
              </text>
            </g>
          ))}

          {/* Connections from Tier 1 to Tier 2 */}
          <line x1="300" y1="210" x2="300" y2="260" stroke="#00ffd0" strokeWidth="2" opacity="0.5" />
          <line x1="600" y1="210" x2="600" y2="260" stroke="#00ffd0" strokeWidth="2" opacity="0.5" />

          {/* Tier 2 - Specialized Systems */}
          <text x="600" y="290" textAnchor="middle" className="text-xl font-bold" fill="#0ea2ff">
            ⚙️ TIER 2: SPECIALIZED SYSTEMS
          </text>

          {/* Tier 2 Boxes */}
          {[
            { x: 100, label: 'Piddy', icon: '🤖' },
            { x: 300, label: 'GhostDrop', icon: '📦' },
            { x: 500, label: 'GhostCFO', icon: '🧾' },
            { x: 700, label: 'GhostTable', icon: '📋' },
            { x: 900, label: 'Microservices', icon: '⚙️' },
          ].map((box, idx) => (
            <g key={idx}>
              <rect
                x={box.x}
                y="310"
                width="110"
                height="70"
                fill="none"
                stroke="#0ea2ff"
                strokeWidth="2"
                rx="6"
                opacity="0.7"
              />
              <text x={box.x + 55} y="330" textAnchor="middle" fill="#0ea2ff" className="text-xs font-bold">
                {box.icon}
              </text>
              <text x={box.x + 55} y="350" textAnchor="middle" fill="#0ea2ff" className="text-xs">
                {box.label}
              </text>
            </g>
          ))}

          {/* Tier 3 - R&D */}
          <text x="600" y="430" textAnchor="middle" className="text-lg font-bold" fill="#7c3aed">
            🧪 TIER 3: EXPERIMENTAL R&D
          </text>

          {/* Tier 3 Boxes */}
          {[
            { x: 300, label: 'Investor Terminal', icon: '🎯' },
            { x: 550, label: 'TLDR Agent', icon: '📄' },
            { x: 800, label: 'Piddy Growth', icon: '🧬' },
          ].map((box, idx) => (
            <g key={idx} opacity="0.6">
              <rect
                x={box.x}
                y="460"
                width="110"
                height="60"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="1.5"
                strokeDasharray="5,5"
                rx="6"
              />
              <text x={box.x + 55} y="478" textAnchor="middle" fill="#7c3aed" className="text-xs font-bold">
                {box.icon}
              </text>
              <text x={box.x + 55} y="498" textAnchor="middle" fill="#7c3aed" className="text-xs">
                {box.label}
              </text>
            </g>
          ))}

          {/* Infrastructure Layer */}
          <rect
            x="50"
            y="580"
            width="1100"
            height="80"
            fill="none"
            stroke="#00ff99"
            strokeWidth="2"
            strokeDasharray="3,3"
            rx="8"
            opacity="0.5"
          />
          <text x="600" y="605" textAnchor="middle" className="text-sm font-bold" fill="#00ff99">
            🔗 INFRASTRUCTURE LAYER
          </text>
          <text x="600" y="628" textAnchor="middle" className="text-xs" fill="#00ff99">
            Stripe | Twilio | Mailchimp | Airtable | Zapier | OpenAI | Claude | Docker
          </text>
          <text x="600" y="648" textAnchor="middle" className="text-xs" fill="#00ff99">
            FastAPI | React | Node.js | Python | TypeScript
          </text>
        </svg>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {[
          { label: 'Core Systems', value: '4' },
          { label: 'Specialized Tools', value: '5+' },
          { label: 'R&D Projects', value: '3' },
          { label: 'Integrations', value: '10+' },
        ].map((metric, idx) => (
          <div
            key={idx}
            className="bg-ghost-gray/30 border border-ghost-green/20 rounded-lg p-6 text-center hover-lift"
          >
            <div className="text-3xl font-bold text-ghost-green mb-2">{metric.value}</div>
            <div className="text-sm text-gray-400">{metric.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
