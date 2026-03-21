'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

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
  // ── Tier 1: Core AI Platforms ──
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
    stack: ['HTML', 'Python'],
  },
  {
    name: 'Ghost Voice OS',
    shortName: 'Voice OS',
    description: 'Real-time voice AI system. Answers calls, books appointments, handles customer conversations 24/7.',
    repoUrl: 'https://github.com/burchdad/ghost-voice-os',
    tier: 1,
    status: 'Active',
    stack: ['Python'],
  },

  // ── Tier 2: Specialized Systems ──
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
    name: 'Piddy Microservices',
    shortName: 'Piddy Microservices',
    description: 'Distributed microservice layer for Piddy agent. Modular task execution at scale.',
    repoUrl: 'https://github.com/burchdad/piddy-microservices',
    tier: 2,
    status: 'Active',
    stack: ['Python'],
  },
  {
    name: 'Piddy Knowledge Base',
    shortName: 'Piddy KB',
    description: 'Private knowledge base for Piddy AI assistant. 4000+ programming books and reference material.',
    repoUrl: 'https://github.com/burchdad/piddy-knowledge-base',
    tier: 2,
    status: 'Active',
    stack: [],
  },
  {
    name: 'Ghost Investor AI',
    shortName: 'Ghost Investor AI',
    description: 'AI-driven investment analysis and portfolio intelligence. Automated deal evaluation.',
    repoUrl: 'https://github.com/burchdad/ghost-investor-ai',
    tier: 2,
    status: 'Active',
    stack: ['Python'],
  },
  {
    name: 'Ghost Voice TTS',
    shortName: 'Voice TTS',
    description: 'Text-to-speech service for Ghost voice ecosystem. Natural AI voice generation.',
    repoUrl: 'https://github.com/burchdad/ghost-voice-tts',
    tier: 2,
    status: 'Active',
    stack: ['Python'],
  },
  {
    name: 'GhostVoice OrderHandler',
    shortName: 'Voice OrderHandler',
    description: 'Voice-driven order processing system. Handles customer orders via phone AI.',
    repoUrl: 'https://github.com/burchdad/GhostVoice_OrderHandler',
    tier: 2,
    status: 'Active',
    stack: ['Python'],
  },
  {
    name: 'GhostVoiceGPT',
    shortName: 'VoiceGPT',
    description: 'GPT-powered voice conversational agent. Natural language phone interactions.',
    repoUrl: 'https://github.com/burchdad/GhostVoiceGPT',
    tier: 2,
    status: 'Active',
    stack: ['Python'],
  },
  {
    name: 'GhostDrop',
    shortName: 'GhostDrop',
    description: 'AI-powered funnel builder. Designs and optimizes marketing funnels autonomously.',
    repoUrl: 'https://github.com/burchdad/ghostdrop',
    tier: 2,
    status: 'Development',
    stack: ['JavaScript'],
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
    name: 'GhostBot Chat',
    shortName: 'GhostBot Chat',
    description: 'AI chatbot interface. Conversational front-end for Ghost ecosystem interactions.',
    repoUrl: 'https://github.com/burchdad/ghostbot-chat',
    tier: 2,
    status: 'Active',
    stack: ['JavaScript'],
  },
  {
    name: 'GhostBot UI',
    shortName: 'GhostBot UI',
    description: 'Visual interface layer for GhostBot. Clean, embeddable chat widget.',
    repoUrl: 'https://github.com/burchdad/ghostbot-ui',
    tier: 2,
    status: 'Active',
    stack: ['HTML'],
  },
  {
    name: 'GhostBot Proxy',
    shortName: 'GhostBot Proxy',
    description: 'GPT proxy backend. Secure API routing layer for GhostBot services.',
    repoUrl: 'https://github.com/burchdad/ghostbot-proxy',
    tier: 2,
    status: 'Active',
    stack: ['JavaScript'],
  },
  {
    name: 'Ghost AI Solutions',
    shortName: 'Ghost AI Solutions',
    description: 'Ghost AI Solutions company website. Public-facing marketing and product showcase.',
    repoUrl: 'https://github.com/burchdad/ghostaisolutions',
    tier: 2,
    status: 'Active',
    stack: ['JavaScript'],
  },

  // ── Tier 3: R&D & Experimental ──
  {
    name: 'Investor Command Center',
    shortName: 'Investor Terminal',
    description: 'Multi-agent investment oversight system. Real-time portfolio tracking and deal flow.',
    repoUrl: 'https://github.com/burchdad/investor-command-center',
    tier: 3,
    status: 'Experimental',
    stack: [],
  },
  {
    name: 'TLDR Agent',
    shortName: 'TLDR Agent',
    description: 'Autonomous document analysis and summarization. PDF parsing with AI key insights extraction.',
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
    stack: [],
  },
  {
    name: 'Airtable Clone',
    shortName: 'Airtable Clone',
    description: 'Custom Airtable-style database interface. Exploring structured data management patterns.',
    repoUrl: 'https://github.com/burchdad/airtable-clone-1',
    tier: 3,
    status: 'Experimental',
    stack: [],
  },
  {
    name: 'AI Sales Funnel',
    shortName: 'AI Sales Funnel',
    description: 'AI-driven sales funnel prototype. Automated lead capture and conversion optimization.',
    repoUrl: 'https://github.com/burchdad/ai_sales_funnel',
    tier: 3,
    status: 'Experimental',
    stack: ['HTML'],
  },
  {
    name: 'SocialInsight',
    shortName: 'SocialInsight',
    description: 'Social media analytics and intelligence platform. Data-driven content insights.',
    repoUrl: 'https://github.com/burchdad/SocialInsight',
    tier: 3,
    status: 'Experimental',
    stack: [],
  },
  {
    name: 'Project Vortex',
    shortName: 'Project Vortex',
    description: 'Experimental multi-system integration project. Pushing boundaries of AI orchestration.',
    repoUrl: 'https://github.com/burchdad/Project-Vortex',
    tier: 3,
    status: 'Experimental',
    stack: [],
  },

  // ── Tier 4: Web & Client Projects ──
  {
    name: 'AI Portfolio',
    shortName: 'AI Portfolio',
    description: 'This site. Next.js portfolio showcasing the entire Ghost AI ecosystem.',
    repoUrl: 'https://github.com/burchdad/ai_portfolio',
    tier: 4,
    status: 'Active',
    stack: ['TypeScript', 'Next.js', 'Tailwind'],
  },
  {
    name: 'Design & Renovation',
    shortName: 'Design & Renovation',
    description: 'Website for designing and renovating homes. Full client project with modern UI.',
    repoUrl: 'https://github.com/burchdad/Design-and-Renovation',
    tier: 4,
    status: 'Active',
    stack: ['HTML'],
  },
  {
    name: 'Cajun Restaurant',
    shortName: 'Cajun Restaurant',
    description: 'Cajun restaurant website. Full-featured restaurant site with menu and ordering.',
    repoUrl: 'https://github.com/burchdad/cajunrestaurant',
    tier: 4,
    status: 'Active',
    stack: ['JavaScript'],
  },
  {
    name: 'Kaisyn Photography',
    shortName: 'Kaisyn Photography',
    description: 'Photography portfolio website. Visual showcase for professional photography work.',
    repoUrl: 'https://github.com/burchdad/Kaisynphotography',
    tier: 4,
    status: 'Active',
    stack: [],
  },
  {
    name: 'BurchFitness',
    shortName: 'BurchFitness',
    description: 'Fitness application. Workout tracking and health management platform.',
    repoUrl: 'https://github.com/burchdad/burchfitness',
    tier: 4,
    status: 'Legacy',
    stack: ['Python'],
  },
  {
    name: 'stephenburch',
    shortName: 'stephenburch',
    description: 'Personal developer site. Original portfolio and about page.',
    repoUrl: 'https://github.com/burchdad/stephenburch',
    tier: 4,
    status: 'Legacy',
    stack: ['Python'],
  },
  {
    name: 'burchsl.github.io',
    shortName: 'GitHub Pages',
    description: 'Personal portfolio showcasing coding skills and projects. GitHub Pages site.',
    repoUrl: 'https://github.com/burchdad/burchsl.github.io',
    tier: 4,
    status: 'Legacy',
    stack: [],
  },
];

const tierColors: Record<number, string> = {
  1: 'border-ghost-green/30 hover:border-ghost-green',
  2: 'border-ghost-blue/30 hover:border-ghost-blue',
  3: 'border-purple-500/30 hover:border-purple-500',
  4: 'border-amber-500/30 hover:border-amber-500',
};

const tierBadgeColors: Record<number, string> = {
  1: 'bg-ghost-green/10 text-ghost-green border-ghost-green/30',
  2: 'bg-ghost-blue/10 text-ghost-blue border-ghost-blue/30',
  3: 'bg-purple-500/10 text-purple-500 border-purple-500/30',
  4: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
};

const tierGlow: Record<number, string> = {
  1: 'rgba(16, 255, 150, 0.05)',
  2: 'rgba(16, 200, 255, 0.05)',
  3: 'rgba(168, 85, 247, 0.05)',
  4: 'rgba(245, 158, 11, 0.05)',
};

const statusColors: Record<string, string> = {
  'Active': 'bg-green-500/10 text-green-400 border-green-500/30',
  'Development': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  'Experimental': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  'Legacy': 'bg-gray-500/10 text-gray-400 border-gray-500/30',
};

const sections = [
  { tier: 1, icon: '🧠', label: 'Tier 1: Core Platforms', sub: 'Revenue & Operations Engines', color: 'text-ghost-green' },
  { tier: 2, icon: '⚙️', label: 'Tier 2: Specialized Systems', sub: 'Extended Capabilities & Tools', color: 'text-ghost-blue' },
  { tier: 3, icon: '🧪', label: 'Tier 3: R&D & Experimental', sub: 'Research Projects & Prototypes', color: 'text-purple-400' },
  { tier: 4, icon: '🌐', label: 'Web & Client Projects', sub: 'Websites, Apps & Freelance Work', color: 'text-amber-400' },
];

export default function RepositoryGrid() {
  const [expandedTiers, setExpandedTiers] = useState<Record<number, boolean>>({ 1: true, 2: true, 3: false, 4: false });

  const toggleTier = (tier: number) => {
    setExpandedTiers(prev => ({ ...prev, [tier]: !prev[tier] }));
  };

  const RepoCard = ({ repo }: { repo: Repository }) => (
    <motion.a
      href={repo.repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative p-5 rounded-lg border ${tierColors[repo.tier]} bg-ghost-gray/30 hover:bg-ghost-gray/50 transition-all duration-300 cursor-pointer`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"
        style={{ background: tierGlow[repo.tier] }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-white group-hover:text-ghost-green transition-colors mb-0.5 truncate">
              {repo.shortName}
            </h3>
            {repo.shortName !== repo.name && (
              <p className="text-xs text-gray-500 truncate">{repo.name}</p>
            )}
          </div>
          <svg width="16" height="16" className="text-gray-600 group-hover:text-ghost-green transition-colors flex-shrink-0 ml-2 mt-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>

        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{repo.description}</p>

        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs px-2 py-0.5 rounded border ${tierBadgeColors[repo.tier]}`}>
            {repo.tier <= 3 ? `Tier ${repo.tier}` : 'Web'}
          </span>
          <span className={`text-xs px-2 py-0.5 rounded border ${statusColors[repo.status]}`}>
            {repo.status}
          </span>
        </div>

        {repo.stack && repo.stack.length > 0 && (
          <div className="mt-3 pt-3 border-t border-white/10 flex gap-1 flex-wrap">
            {repo.stack.map((tech) => (
              <span key={tech} className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-400">
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
      {/* Repo count banner */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-ghost-green/20 bg-ghost-green/5">
          <span className="text-3xl font-bold text-ghost-green">{repositories.length}</span>
          <span className="text-gray-400">repositories across the Ghost ecosystem</span>
        </div>
      </motion.div>

      {sections.map((section, idx) => {
        const repos = repositories.filter(r => r.tier === section.tier);
        const isExpanded = expandedTiers[section.tier];
        
        return (
          <div key={section.tier} className="mb-16 last:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Section header — clickable to expand/collapse */}
              <button
                onClick={() => toggleTier(section.tier)}
                className="w-full flex items-center justify-between mb-6 group cursor-pointer bg-transparent border-none text-left p-0"
              >
                <div className="text-left">
                  <h2 className="text-2xl font-bold mb-1">
                    <span className={section.color}>{section.icon}</span>{' '}
                    {section.label}
                    <span className="ml-3 text-base font-normal text-gray-500">({repos.length})</span>
                  </h2>
                  <p className="text-gray-400 text-sm">{section.sub}</p>
                </div>
                <span className={`text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {/* Cards grid */}
              {isExpanded && (
                <div className={`grid grid-cols-1 md:grid-cols-2 ${repos.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-4`}>
                  {repos.map((repo) => (
                    <RepoCard key={repo.name} repo={repo} />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
