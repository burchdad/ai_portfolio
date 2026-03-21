'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function EcosystemOverview() {
  const [showFullArchitecture, setShowFullArchitecture] = useState(false);

  return (
    <div className="w-full">
      <motion.div className="text-center mb-12">
        <h2 className="mb-3">
          <span className="gradient-text">🧠 The Ghost AI Ecosystem</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Complete autonomous AI operating system built for scale and performance
        </p>
      </motion.div>

      {/* Simple Tier 1 Diagram */}
      <motion.div
        className="card-base mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <svg viewBox="0 0 1200 350" className="w-full" style={{ minHeight: '300px' }}>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#00ffd0', stopOpacity: 0.08 }} />
              <stop offset="100%" style={{ stopColor: '#0ea2ff', stopOpacity: 0.08 }} />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="1200" height="350" fill="url(#grad1)" />

          {/* Central GhostMIND */}
          <g>
            <circle cx="600" cy="80" r="50" fill="none" stroke="#00ffd0" strokeWidth="2" filter="url(#glow)" />
            <text x="600" y="75" textAnchor="middle" fill="#00ffd0" className="text-4xl" dominantBaseline="middle">🧠</text>
            <text x="600" y="105" textAnchor="middle" fill="#00ffd0" className="text-sm font-bold">GhostMIND</text>
          </g>

          {/* Connections */}
          <line x1="500" y1="120" x2="250" y2="180" stroke="#00ffd0" strokeWidth="1.5" opacity="0.4" />
          <line x1="600" y1="130" x2="600" y2="180" stroke="#00ffd0" strokeWidth="1.5" opacity="0.4" />
          <line x1="700" y1="120" x2="950" y2="180" stroke="#00ffd0" strokeWidth="1.5" opacity="0.4" />
          <line x1="550" y1="125" x2="350" y2="180" stroke="#00ffd0" strokeWidth="1.5" opacity="0.4" />

          {/* Tier 1 Systems */}
          {[
            { x: 200, label: 'GhostCRM', icon: '📊', desc: 'Sales' },
            { x: 450, label: 'GhostScore', icon: '💳', desc: 'Finance' },
            { x: 700, label: 'Voice OS', icon: '🎙️', desc: 'Calls' },
            { x: 950, label: 'Custom AI', icon: '🔧', desc: 'Automation' },
          ].map((box, idx) => (
            <g key={idx}>
              <rect x={box.x - 60} y="190" width="120" height="100" fill="none" stroke="#00ffd0" strokeWidth="1.5" rx="8" opacity="0.8" />
              <text x={box.x} y="215" textAnchor="middle" fill="#00ffd0" className="text-2xl">{box.icon}</text>
              <text x={box.x} y="245" textAnchor="middle" fill="#00ffd0" className="text-xs font-bold">{box.label}</text>
              <text x={box.x} y="270" textAnchor="middle" fill="#00ff99" className="text-xs">{box.desc}</text>
            </g>
          ))}

          {/* Bottom results line */}
          <line x1="200" y1="310" x2="1000" y2="310" stroke="#00ffd0" strokeWidth="1" opacity="0.3" />
          <text x="600" y="330" textAnchor="middle" fill="#00ff99" className="text-xs font-semibold">
            Revenue + Operations + Autonomous 24/7
          </text>
        </svg>
      </motion.div>

      {/* Expand button */}
      <motion.div className="text-center mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <button
          onClick={() => setShowFullArchitecture(!showFullArchitecture)}
          className="px-6 py-2 rounded-lg border border-ghost-green/50 text-ghost-green hover:bg-ghost-green/10 transition-all text-sm font-semibold"
        >
          {showFullArchitecture ? '← Collapse Full Architecture' : 'View Full Architecture →'}
        </button>
      </motion.div>

      {/* Full Architecture (hidden by default) */}
      {showFullArchitecture && (
        <motion.div
          className="card-base mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <svg viewBox="0 0 1200 700" className="w-full" style={{ minHeight: '400px' }}>
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#00ffd0', stopOpacity: 0.1 }} />
                <stop offset="100%" style={{ stopColor: '#0ea2ff', stopOpacity: 0.1 }} />
              </linearGradient>
              <filter id="glow2">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect width="1200" height="700" fill="url(#grad2)" />

            {/* Title */}
            <text x="600" y="40" textAnchor="middle" fill="#00ffd0" className="text-lg font-bold">
              Complete Ghost AI Ecosystem
            </text>

            {/* Tier 1 */}
            <text x="600" y="90" textAnchor="middle" fill="#00ff99" className="text-sm font-bold">
              TIER 1: CORE PLATFORMS
            </text>
            {[
              { x: 150, label: 'GhostMIND', icon: '🧠' },
              { x: 400, label: 'GhostCRM', icon: '📊' },
              { x: 650, label: 'GhostScore', icon: '💳' },
              { x: 900, label: 'Voice OS', icon: '🎙️' },
            ].map((box, idx) => (
              <g key={`t1-${idx}`}>
                <rect x={box.x - 50} y="110" width="100" height="70" fill="none" stroke="#00ffd0" strokeWidth="1.5" rx="6" filter="url(#glow2)" />
                <text x={box.x} y="135" textAnchor="middle" fill="#00ffd0" className="text-xl">{box.icon}</text>
                <text x={box.x} y="155" textAnchor="middle" fill="#00ff99" className="text-xs">{box.label}</text>
              </g>
            ))}

            {/* Tier 2 */}
            <text x="600" y="230" textAnchor="middle" fill="#0ea2ff" className="text-sm font-bold">
              TIER 2: SPECIALIZED SYSTEMS
            </text>
            {[
              { x: 120, label: 'Piddy', icon: '🤖' },
              { x: 300, label: 'GhostDrop', icon: '📦' },
              { x: 480, label: 'GhostCFO', icon: '🧾' },
              { x: 660, label: 'GhostTable', icon: '📋' },
              { x: 840, label: 'Microservices', icon: '⚙️' },
              { x: 1020, label: 'Custom AI', icon: '🔧' },
            ].map((box, idx) => (
              <g key={`t2-${idx}`} opacity="0.7">
                <rect x={box.x - 45} y="250" width="90" height="60" fill="none" stroke="#0ea2ff" strokeWidth="1" rx="6" />
                <text x={box.x} y="270" textAnchor="middle" fill="#0ea2ff" className="text-lg">{box.icon}</text>
                <text x={box.x} y="290" textAnchor="middle" fill="#0ea2ff" className="text-xs">{box.label}</text>
              </g>
            ))}

            {/* Tier 3 */}
            <text x="600" y="350" textAnchor="middle" fill="#7c3aed" className="text-sm font-bold">
              TIER 3: R&D
            </text>
            {[
              { x: 300, label: 'Investor Terminal', icon: '🎯' },
              { x: 600, label: 'TLDR Agent', icon: '📄' },
              { x: 900, label: 'Piddy Growth', icon: '🧬' },
            ].map((box, idx) => (
              <g key={`t3-${idx}`} opacity="0.5">
                <rect x={box.x - 50} y="370" width="100" height="50" fill="none" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3,3" rx="6" />
                <text x={box.x} y="385" textAnchor="middle" fill="#7c3aed" className="text-lg">{box.icon}</text>
                <text x={box.x} y="405" textAnchor="middle" fill="#7c3aed" className="text-xs">{box.label}</text>
              </g>
            ))}

            {/* Infrastructure */}
            <rect x="50" y="480" width="1100" height="180" fill="none" stroke="#00ff99" strokeWidth="1" strokeDasharray="3,3" rx="8" opacity="0.3" />
            <text x="600" y="510" textAnchor="middle" fill="#00ff99" className="text-sm font-bold">🔗 INFRASTRUCTURE LAYER</text>
            <text x="600" y="535" textAnchor="middle" fill="#00ff99" className="text-xs">Integrations: Stripe | Twilio | Mailchimp | Airtable | Zapier | OpenAI | Claude</text>
            <text x="600" y="555" textAnchor="middle" fill="#00ff99" className="text-xs">Tech Stack: FastAPI | React | Node.js | Python | TypeScript | Docker | Supabase</text>
          </svg>
        </motion.div>
      )}

      {/* Metrics */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {[
          { label: 'Core Platforms', value: '4' },
          { label: 'Specialized Systems', value: '5+' },
          { label: 'R&D Projects', value: '3' },
          { label: 'Integrations', value: '10+' },
        ].map((metric, idx) => (
          <div
            key={idx}
            className="bg-ghost-gray/20 border border-ghost-green/15 rounded-lg p-4 text-center"
          >
            <div className="text-2xl font-bold text-ghost-green mb-1">{metric.value}</div>
            <div className="text-xs text-gray-400">{metric.label}</div>
          </div>
        ))
        }
      </motion.div>
    </div>
  );
}
