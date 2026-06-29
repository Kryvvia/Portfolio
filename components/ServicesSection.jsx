import { Laptop, Smartphone, Palette, Search, Layers, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

function SpotlightCard({ service }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = service.icon;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative bg-neutral-950/60 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between 
                 overflow-hidden shadow-2xl transition-all duration-300 hover:border-neutral-700/60 min-h-[360px]"
    >
      {/* Interactive border/background highlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.06),
              transparent 80%
            )
          `,
        }}
      />

      <div className="space-y-6 relative z-10 w-full">
        {/* Service Illustration */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/5 bg-neutral-900/40 p-4 flex items-center justify-center">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-contain p-2 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10 group-hover:border-white/10 shrink-0">
              <Icon className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-110" />
            </div>
            <h4 className="text-white text-xl font-bold tracking-tight group-hover:text-neutral-200 transition-colors duration-300">
              {service.title}
            </h4>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed font-light line-clamp-3">
            {service.description}
          </p>
        </div>
      </div>

      <div className="pt-8 relative z-10 flex items-center justify-start text-xs font-semibold tracking-wider uppercase text-gray-500 group-hover:text-white transition-colors duration-300 gap-1.5 mt-auto">
        <Link href={`/services#${service.id}`} className="flex items-center gap-1.5 hover:underline">
          Learn More <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      id: 'ui-ux',
      title: 'UI/UX Strategy & Design',
      description: 'Start with listening to your idea, research, make a wireframe, build a prototype, and finalize the UI/UX.',
      icon: Layers,
      image: '/images/service_ui_ux.png',
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Create a highspeed, modern and responsive website and web application for you.',
      icon: Laptop,
      image: '/images/service_web_dev.png',
    },
    {
      id: 'app-dev',
      title: 'Mobile App Development',
      description: 'Both Android and iOS are developing here. We offer a cross-platform solution that is easy to use and maintain.',
      icon: Smartphone,
      image: '/images/service_mobile_dev.png',
    },
    {
      id: 'seo',
      title: 'Search Engine Optimization (SEO)',
      description: 'Optimize search rankings, build XML sitemaps, optimize loading performance, and maximize organic web traffic.',
      icon: Search,
      image: '/images/service_seo_smm.png',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Solutions',
      description: 'Build robust, scalable, and secure online stores tailored to your business needs.',
      icon: Laptop,
      image: '/images/service_web_dev.png',
    },
    {
      id: 'cloud',
      title: 'Cloud Hosting & DevOps',
      description: 'Deploy, manage, and scale your applications with high-performance cloud infrastructure.',
      icon: Layers,
      image: '/images/service_ui_ux.png',
    },

  ];

  return (
    <section id="services" className="pt-8 pb-10 px-6 bg-black relative z-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase"
          >
            What We Provide
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            We Provide Best Solutions <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">For Your Business.</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base font-light leading-relaxed"
          >
            From design to production and optimization, our unified team ensures consistency, speed, and premium delivery.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <SpotlightCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
