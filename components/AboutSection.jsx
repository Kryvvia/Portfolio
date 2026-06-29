import { ShieldCheck, Award, HeartHandshake, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const highlights = [
    {
      title: '100% Client Satisfaction',
      description: 'We align our architectures and user stories directly with business owners for perfect delivery.',
      icon: ShieldCheck,
    },
    {
      title: 'Quality Service',
      description: 'Engineered with clean code practices, strict type-checking, and production security standards.',
      icon: Award,
    },
    {
      title: 'Lifetime Support',
      description: 'Comprehensive handoff documentation, scaling consultations, and maintenance assistance.',
      icon: HeartHandshake,
    },
    {
      title: 'Fast & Reliable Delivery',
      description: 'Streamlined development workflows and CI/CD pipelines to ensure rapid and dependable product releases.',
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="pt-8 pb-10 px-6 relative z-10 overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column - Text Area & Highlights */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase font-mono bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              About Us
            </span>
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s Know Something <br />
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Great About Us.</span>
            </h3>
          </div>

          <p className="text-gray-400 font-light leading-relaxed text-base sm:text-lg">
            We are a group of professional software developers, AI researchers, and designers run by enthusiasts for coding and premium experiences. Based out of India and collaborating globally, we bridge the gap between academic research and production deployment.
          </p>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-neutral-950 border border-white/5 p-5 rounded-2xl flex gap-4 items-start hover:border-white/10 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 text-white shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-white text-sm font-bold tracking-tight">{item.title}</h4>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-neutral-200 transition-all text-xs font-mono uppercase tracking-wider text-[11px]"
            >
              Read Full Agency Story
            </Link>
          </div>
        </div>

        {/* Right Column - Monochrome Illustration with Floating Animation */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              },
              opacity: { duration: 0.6 },
            }}
            style={{ originX: 0.5, originY: 0.5 }}
            className="w-full max-w-md relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
            <motion.div
              className="absolute inset-0 z-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/images/agency_team_collaboration.png"
                alt="Kryvvia Agency Collaboration"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
