'use client';

import { motion } from 'framer-motion';

interface Repository {
  name: string;
  shortName: string;
  description: string;
  repoUrl: string;
  tier: number;
  status: string;
  stack?: string[];
}

const repositories: Repository[] = [
  {
    name: 'GhostMIND (Nova-CEO)',
    shortName: 'GhostMIND',
    description: 'Central command center for multi-agent orchestration. The AI CEO that controls all Ghost systems.',
    repoUrl: 'https://github.com/burchdad/Nova-CEO',
    tier: 1,
    status: 'Active',
    stack: ['Python', 'FastAPI', 'OpenAI'],
  },
  {
    name: 'GhostCRM',
    shortName: 'GhostCRM',
    description: 'AI-native sales automation platform. Autonomous lead qualification, follow-ups, and pipeline management.',
    repoUrl: 'https://github.com/burchdad/ghostcrm',
    tier: 1,
    status: 'Active',
    stack: ['TypeScript', 'React', 'Twilio'],
  },
  {
    name: 'GhostScore',
    shortName: 'GhostScore',
    description: 'Financial intelligence engine. FICO score optimization and credit scenario modeling.',
    repoUrl: 'https://github.com/burchdad/Ghostscore',
    tier: 1,
    status: 'Active',
    stack: ['Python', 'FastAPI'],
  },
  {
    name: 'Ghost Voice OS',
    shortName: 'Voice OS',
    description: 'Real-time voice AI system. Answers calls, books appointments, handles customer conversations 24/7.',
    repoUrl: 'https://github.com/burchdad/ghost-voice-os',
    tier: 1,
    status: 'Active',
    stack: ['Node.js', 'WebRTC', 'Twilio'],
  },
  {
    name: 'Piddy',
    shortName: 'Piddy',
    description: 'Autonomous developer agent. Writes code, improves PRs, and optimizes projects independently.',
    repoUrl: 'https://github.com/burchdad/Piddy',
    tier: 2,
    status: 'Active',
    stack: ['Python', 'Claude API'],
  },
  {
    name: 'GhostDrop',
    shortName: 'GhostDrop',
    description: 'AI-powered funnel builder. Designs and optimizes marketing funnels autonomously.',
    repoUrl: 'https://github.com/burchdad/ghostdrop',
    tier: 2,
    status: 'Development',
    stack: ['React', 'Node.js'],
  },
  {
    name: 'GhostCFO',
    shortName: 'GhostCFO',
    description: 'Financial analysis & investment underwriting engine. AI-driven investment decisions.',
    repoUrl: 'https://github.com/burchdad/ghostcfo',
    tier: 2,
    status: 'Development',
    stack: ['Python', 'FastAPI'],
  },
  {
    name: 'GhostTable',
    shortName: 'GhostTable',
    description: 'Lightweight database & table management. Supabase integration with AI query optimization.',
    repoUrl: 'https://github.com/burchdad/ghosttable',
    tier: 2,
    status: 'Development',
    stack: ['TypeScript', 'Supabase'],
  },
  {
    name: 'Investor Command Center',
    shortName: 'Investor Terminal',
    description: 'Experimental multi-agent investment oversight system. Real-time portfolio tracking and deal flow.',
    repoUrl: 'https://github.com/burchdad/investor-command-center',
    tier: 3,
    status: 'Experimental',
    stack: ['Python', 'FastAPI'],
  },
  {
    name: 'TLDR Agent',
    shortName: 'TLDR Agent',
    description: 'Autonomous document analysis and summarization. PDF parsing with AI-driven key insights extraction.',
    repoUrl: 'https://github.com/burchdad/tldr-agent-demo',
    tier: 3,
    status: 'Experimental',
    stack: ['TypeScript', 'OpenAI'],
  },
  {
    name: 'Piddy Growth',
    shortName: 'Piddy Growth',
    description: 'Self-improving agent learning system. Continuous skill acquisition and performance optimization.',
    repoUrl: 'https://github.com/burchdad/piddy-growth',
    tier: 3,
    status: 'Experimental',
    stack: ['Python'],
  },
];

const tierColors = {
  1: 'border-ghost-green/30 hover:border-ghost-green',
  2: 'border-ghost-blue/30 hover:border-ghost-blue',
  3: 'border-purple-500/30 hover:border-purple-500',
};

const tierBadgeColors = {
  1: 'bg-ghost-green/10 text-ghost-green border-ghost-green/30',
  2: 'bg-ghost-blue/10 text-ghost-blue border-ghost-blue/30',
  3: 'bg-purple-500/10 text-purple-500 border-purple-500/30',
};

const statusColors = {
  'Active': 'bg-green-500/10 text-green-400 border-green-500/30',
  'Development': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'Experimental': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
};

export default function RepositoryGrid() {
  const tier1 = repositories.filter(r => r.tier === 1);
  const tier2 = repositories.filter(r => r.tier === 2);
  const tier3 = repositories.filter(r => r.tier === 3);

  const RepoCard = ({ repo }: { repo: Repository }) => (
    <motion.a
      href={repo.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative p-6 rounded-lg border ${tierColors[repo.tier as keyof typeof tierColors]} bg-ghost-gray/30 hover:bg-ghost-gray/50 transition-all duration-300 cursor-pointer`}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"
        style={{
          background: repo.tier === 1 ? 'rgba(16, 255, 150, 0.05)' : repo.tier === 2 ? 'rgba(16, 200, 255, 0.05)' : 'rgba(168, 85, 247, 0.05)'
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white group-hover:text-ghost-green transition-colors mb-1">
              {repo.shortName}
            </h3>
            <p className="text-xs text-gray-500">{repo.name}</p>
          </div>
          
          {/* GitHub Icon */}
          <svg className="w-5 h-5 text-gray-600 group-hover:text-ghost-green transition-colors flex-shrink-0 ml-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
          {repo.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2 flex-wrap">
            <span className={`badge ${tierBadgeColors[repo.tier as keyof typeof tierBadgeColors]}`}>
              Tier {repo.tier}
            </span>
            <span className={`badge ${statusColors[repo.status as keyof typeof statusColors]}`}>
              {repo.status}
            </span>
          </div>
        </div>

        {/* Stack tags */}
        {repo.stack && repo.stack.length > 0 && (
          <div className="mt-3 pt-3 border-t border-white/10 flex gap-1 flex-wrap">
            {repo.stack.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-400 hover:text-ghost-green transition-colors">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );

  return (
    <section className="py-20">
      {/* Tier 1 */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-ghost-green">🧠</span> Tier 1: Core Platforms
            </h2>
            <p className="text-gray-400">Revenue & Operations Engines</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tier1.map((repo) => (
              <RepoCard key={repo.shortName} repo={repo} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tier 2 */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-ghost-blue">⚙️</span> Tier 2: Specialized Systems
            </h2>
            <p className="text-gray-400">Extended Capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tier2.map((repo) => (
              <RepoCard key={repo.shortName} repo={repo} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Tier 3 */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">
              <span className="text-purple-400">🧪</span> Tier 3: R&D & Experimental
            </h2>
            <p className="text-gray-400">Research Projects & Prototypes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tier3.map((repo) => (
              <RepoCard key={repo.shortName} repo={repo} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
