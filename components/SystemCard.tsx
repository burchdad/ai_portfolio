'use client';

import { motion } from 'framer-motion';

type System = {
  id: string;
  name: string;
  shortName: string;
  role: string;
  description: string;
  features: string[];
  repo: string;
  repoUrl: string;
  status: string;
  stack: string[];
  tier: number;
};

interface SystemCardProps {
  system: System;
}

export default function SystemCard({ system }: SystemCardProps) {
  const tierColors = {
    1: 'border-ghost-green/30 hover:border-ghost-green',
    2: 'border-ghost-blue/30 hover:border-ghost-blue',
    3: 'border-purple-500/30 hover:border-purple-500',
  };

  const tierBgHover = {
    1: 'hover:bg-ghost-green/5',
    2: 'hover:bg-ghost-blue/5',
    3: 'hover:bg-purple-500/5',
  };

  const statusColors = {
    'Active Development': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Experimental': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  };

  return (
    <motion.div
      className={`group bg-ghost-gray/20 border ${tierColors[system.tier as keyof typeof tierColors]} rounded-lg p-6 hover-lift ${tierBgHover[system.tier as keyof typeof tierBgHover]} transition-all duration-300`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">{system.name}</h3>
        <p className="text-sm font-semibold text-ghost-green mb-2">{system.role}</p>
        <p className="text-sm text-gray-400">{system.description}</p>
      </div>

      {/* Status Badge */}
      <div className="mb-4">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[system.status as keyof typeof statusColors]}`}
        >
          {system.status}
        </span>
      </div>

      {/* Features */}
      <div className="mb-4">
        <h4 className="text-xs font-bold text-ghost-lime mb-2 uppercase">Features</h4>
        <ul className="space-y-1">
          {system.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="text-xs text-gray-400 flex items-start">
              <span className="text-ghost-green mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Stack */}
      <div className="mb-4">
        <h4 className="text-xs font-bold text-ghost-blue mb-2 uppercase">Stack</h4>
        <div className="flex flex-wrap gap-2">
          {system.stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-ghost-gray/50 border border-ghost-green/20 rounded text-xs text-ghost-green"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Repository Link */}
      <motion.a
        href={system.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center px-4 py-2 mt-4 bg-ghost-green/10 border border-ghost-green rounded-lg text-ghost-green hover:bg-ghost-green/20 transition-all text-sm font-semibold"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Repository →
      </motion.a>
    </motion.div>
  );
}
