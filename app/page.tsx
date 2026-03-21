'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import SystemDiagram from '@/components/SystemDiagram';
import EcosystemOverview from '@/components/EcosystemOverview';
import Tier1Systems from '@/components/Tier1Systems';
import Tier2Systems from '@/components/Tier2Systems';
import Tier3Systems from '@/components/Tier3Systems';
import Infrastructure from '@/components/Infrastructure';
import Solutions from '@/components/Solutions';
import RDVision from '@/components/RDVision';
import Footer from '@/components/Footer';
import CollapsibleSection from '@/components/CollapsibleSection';
import RepositoryGrid from '@/components/RepositoryGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-ghost-dark overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
      {/* System Architecture Diagram */}
      <SystemDiagram />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Ecosystem Overview */}
        <motion.section
          id="ecosystem"
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <EcosystemOverview />
        </motion.section>

        {/* Solutions */}
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

        {/* Tier 1 Systems */}
        <motion.section
          id="tier1"
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Tier1Systems />
        </motion.section>

        {/* Tier 2 Systems */}
        <CollapsibleSection
          title="⚙️ Tier 2 Systems"
          description="Supporting infrastructure and specialized AI applications that power the ecosystem"
          tier={2}
        >
          <motion.section
            id="tier2"
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Tier2Systems />
          </motion.section>
        </CollapsibleSection>

        {/* Tier 3 Systems */}
        <CollapsibleSection
          title="🧪 Tier 3 Systems"
          description="R&D initiatives and experimental frameworks for next-generation autonomous systems"
          tier={3}
        >
          <motion.section
            id="tier3"
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Tier3Systems />
          </motion.section>
        </CollapsibleSection>

        {/* R&D Vision */}
        <motion.section
          id="rd-vision"
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <RDVision />
        </motion.section>

        {/* Infrastructure */}
        <motion.section
          id="infrastructure"
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Infrastructure />
        </motion.section>

        {/* Repository Grid */}
        <motion.section
          id="repositories"
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
