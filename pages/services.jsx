import Head from 'next/head';
import SEO from '../components/SEO';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Laptop, Smartphone, Layers, Search, Palette, ArrowRight } from 'lucide-react';

export default function Services() {
  const detailedServices = [
    {
      id: 'ui-ux',
      title: 'UI/UX Strategy & Design',
      tagline: 'Start with listening to your idea, research, make a wireframe, build a prototype, and finalize the UI/UX.',
      desc: 'We map user journeys, outline clear design frameworks, and engineer beautiful, interactive, and modern prototypes using Figma, Framer, and Tailwind CSS templates. We focus on conversion rates and ease of navigation.',
      points: ['Wireframing & Prototyping', 'User Research & Personas', 'Interaction Design (IxD)', 'Design Systems Creation'],
      icon: Layers,
      image: '/images/service_ui_ux.png',
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      tagline: 'Create a highspeed, modern and responsive website and web application for you.',
      desc: 'We build production-grade web systems. Whether it is a full-stack Next.js/React app with a Node backend or a high-performance Spring Boot engine connected to private RDS tables, we ensure sub-second loads and secure endpoints.',
      points: ['React.js & Next.js Frontends', 'Spring Boot & Node.js Backends', 'PostgreSQL & MongoDB Integrations', 'AWS RDS, S3, & CloudFront CDN'],
      icon: Laptop,
      image: '/images/service_web_dev.png',
    },
    {
      id: 'app-dev',
      title: 'Mobile App Development',
      tagline: 'Both Android and iOS apps are developed here. We offer a cross-platform solution easy to use and maintain.',
      desc: 'Using React Native or native developer toolkits, we ship fast, responsive apps to the Apple App Store and Google Play Store, managing offline storage caches, notifications, and analytics integration.',
      points: ['iOS & Android App Store Deployment', 'Cross-Platform React Native development', 'State management (Redux, Zustand)', 'JWT & OAuth2 Secure Authentication'],
      icon: Smartphone,
      image: '/images/service_mobile_dev.png',
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization (SEO)',
      tagline: 'Optimize search rankings and organic visibility workflows.',
      desc: 'We set up complete Google Search Console triggers, structure proper sitemaps, optimize metadata indexing, and build high-performance organic growth strategies designed to increase inbound traffic and conversion rates.',
      points: ['Search Engine Optimization (SEO)', 'Google Search Console Triggers', 'XML Sitemaps & robots.txt', 'Analytics & Keywords Reporting'],
      icon: Search,
      image: '/images/service_seo_smm.png',
    },
  ];

  return (
    <>
      <SEO 
        title="Services & Capabilities | Kryvvia"
        description="Explore our premium services including Next.js Web Development, React Native Apps, SEO, and UI/UX Design."
        path="/services"
      />

      <div className="max-w-6xl mx-auto px-6 pt-4 pb-14 space-y-12 bg-black text-gray-200">

        {/* Intro */}
        <div className="max-w-3xl mx-auto space-y-4 text-center flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-mono">
            What We Do
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight text-center"
          >
            Comprehensive Tech <br />
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Solutions for Growth.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-400 text-base sm:text-lg font-light leading-relaxed text-center max-w-2xl"
          >
            We operate across core domains: user experience mapping, backend system architecture, mobile app engineering, and search engine optimization (SEO).
          </motion.p>
        </div>

        {/* Detailed Service List */}
        <div className="space-y-10">
          {detailedServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-neutral-950/40 p-8 sm:p-12 rounded-3xl border border-neutral-900 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24 hover:bg-neutral-900/60 transition-colors duration-300"
              >
                {/* Left Column: Icon + Core details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/5 text-gray-300 font-mono">
                      {service.id.toUpperCase()}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
                      {service.title}
                    </h2>
                    <h3 className="text-gray-300 font-medium text-sm sm:text-base leading-relaxed italic">
                      &ldquo;{service.tagline}&rdquo;
                    </h3>
                  </div>

                  <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-gray-300 transition-colors font-mono"
                    >
                      Book a Free Consulting Call <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Illustration + Bullet Points / Tech */}
                <div className="lg:col-span-5 space-y-6 w-full">
                  {/* Service Illustration */}
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/5 bg-neutral-950 p-4 flex items-center justify-center group-hover:border-white/10 transition-colors">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 350px"
                    />
                  </div>

                  {/* Key Deliverables Bullet Points */}
                  <div className="bg-black/40 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-4">
                    <h4 className="text-white text-sm font-semibold tracking-wider uppercase font-mono">Key Deliverables</h4>
                    <ul className="space-y-3">
                      {service.points.map((pt, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-300 font-light items-start">
                          <span className="text-gray-400 mt-1 shrink-0">●</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
