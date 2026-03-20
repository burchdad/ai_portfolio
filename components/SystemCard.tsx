'use client';

import { motion } from 'framer-motion';

type System = {
  id: string;
  name: string;
  shortName: string;
  role: string;
  description: string;
  longDescription?: string;
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
      className={`card-tier-${system.tier} group`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-ghost-green transition-colors">
          {system.name}
        </h3>
        <p className="text-sm font-semibold text-ghost-green mb-3">{system.role}</p>
      </div>

      {/* Long or short description */}
      {system.longDescription ? (
        <div className="mb-4 space-y-2 text-sm">
          {system.longDescription.split('\n').map((line, idx) => {
            if (line.startsWith('WHAT:')) {
              return <p key={idx} className="text-gray-300"><span className="text-ghost-green font-semibold">WHAT:</span> {line.replace('WHAT:', '').trim()}</p>;
            }
            if (line.startsWith('WHY:')) {
              return <p key={idx} className="text-gray-300"><span className="text-ghost-blue font-semibold">WHY:</span> {line.replace('WHY:', '').trim()}</p>;
            }
            if (line.startsWith('IMPACT:')) {
              return <p key={idx} className="text-gray-300"><span className="text-ghost-lime font-semibold">IMPACT:</span> {line.replace('IMPACT:', '').trim()}</p>;
            }
            return <p key={idx} className="text-gray-400">{line}</p>;
          })}
        </div>
      ) : (
        <p className="text-sm text-gray-400 mb-4">{system.description}</p>
      )}

      {/* Status Badge */}
      <div className="mb-5">
        <span
          className={`badge ${statusColors[system.status as keyof typeof statusColors]}`}
        >
          <span className="w-2 h-2 bg-current rounded-full" />
          {system.status}
        </span>
      </div>

      {/* Features - SCANNABLE */}
      <div className="mb-5 pb-5 border-b border-ghost-green/10">
        <h4 className="text-xs font-bold text-ghost-lime mb-3 uppercase tracking-wider">Features</h4>
        <ul className="space-y-2">
          {system.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="text-xs text-gray-400 flex items-start">
              <span className="text-ghost-green font-bold mr-2 flex-shrink-0">▸</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Stack */}
      <div className="mb-6">
        <h4 className="text-xs font-bold text-ghost-blue mb-3 uppercase tracking-wider">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {system.stack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-ghost-green/10 border border-ghost-green/30 rounded-full text-xs text-ghost-green font-medium hover:bg-ghost-green/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Repository Link - Premium CTA */}
      <motion.a
        href={system.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center btn-secondary"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        View Repository ↗
      </motion.a>
    </motion.div>
  );
}
