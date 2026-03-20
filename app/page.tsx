'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import EcosystemOverview from '@/components/EcosystemOverview';
import Tier1Systems from '@/components/Tier1Systems';
import Tier2Systems from '@/components/Tier2Systems';
import Tier3Systems from '@/components/Tier3Systems';
import Infrastructure from '@/components/Infrastructure';
import Solutions from '@/components/Solutions';
import RDVision from '@/components/RDVision';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-ghost-dark overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <Hero />
      
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
        <motion.section
          id="tier2"
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Tier2Systems />
        </motion.section>

        {/* Tier 3 Systems */}
        <motion.section
          id="tier3"
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Tier3Systems />
        </motion.section>

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
      </main>

      <Footer />
    </div>
  );
}
