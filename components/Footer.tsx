'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="border-t border-ghost-green/20 bg-gradient-to-b from-ghost-gray/50 to-ghost-dark/80 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold mb-3">
              <span className="text-ghost-green">Ghost</span>
              <span className="text-ghost-blue"> AI</span>
            </div>
            <p className="text-sm text-gray-400">
              Autonomous systems that replace entire business functions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-bold text-ghost-lime mb-4 uppercase tracking-wider">Explore</div>
            <div className="space-y-2">
              {[
                { label: 'All Repositories', url: 'https://github.com/burchdad' },
                { label: 'This Portfolio', url: 'https://github.com/burchdad/ai_portfolio' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-ghost-green transition-colors block"
                >
                  → {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-bold text-ghost-lime mb-4 uppercase tracking-wider">Connect</div>
            <div className="space-y-2">
              {[
                { label: 'GitHub', url: 'https://github.com/burchdad' },
                { label: 'Support', url: '#' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-ghost-green transition-colors block"
                >
                  → {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            className="p-4 rounded-lg border border-ghost-green/20 bg-ghost-green/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-bold text-ghost-green mb-3 uppercase tracking-wider">Ecosystem</div>
            <div className="space-y-1 text-xs text-gray-400">
              <p><span className="text-ghost-green font-semibold">4</span> Core Platforms</p>
              <p><span className="text-ghost-blue font-semibold">5+</span> Specialized Systems</p>
              <p><span className="text-ghost-lime font-semibold">3</span> R&D Projects</p>
              <p><span className="text-purple-400 font-semibold">10+</span> Integrations</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="border-t border-ghost-green/10 pt-8 flex justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-xs text-gray-600">
            © {currentYear} Ghost AI. Built with vision and autonomous systems.
          </div>
          <a
            href="https://github.com/burchdad"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2 rounded-lg border border-ghost-green/20 hover:border-ghost-green hover:bg-ghost-green/10 transition-all"
          >
            <svg width="20" height="20" className="text-gray-600 group-hover:text-ghost-green transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
