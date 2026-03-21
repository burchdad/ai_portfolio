'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import SystemDiagram from '@/components/SystemDiagram';
import Solutions from '@/components/Solutions';
import RepositoryGrid from '@/components/RepositoryGrid';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-ghost-dark overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* How Ghost Works — The centerpiece visual */}
      <SystemDiagram />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* What I Build — The sales layer */}
        <motion.section
          id="solutions"
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Solutions />
        </motion.section>

        {/* The Ecosystem — All repos as cards */}
        <motion.section
          id="ecosystem"
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <RepositoryGrid />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
