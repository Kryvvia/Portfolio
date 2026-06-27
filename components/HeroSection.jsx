import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

function HeroIllustrationCard() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    // Map mouse position to degree rotation (-10 to 10 degrees)
    rotateX.set(-mouseY / (height / 2) * 10);
    rotateY.set(mouseX / (width / 2) * 10);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl group cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-black/85 via-transparent to-transparent z-10 pointer-events-none" />
      <motion.div
        className="absolute inset-0 z-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src="/images/agency_hero_illustration.png"
          alt="Kryvvia Systems Work"
          fill
          priority
          className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
          sizes="(max-width: 1024px) 100vw, 500px"
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(100);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const headlineWords = "Your Dream, We Build.".split(" ");

  // Container variants for staggered reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  // Word variants for staggered reveals
  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      className="relative flex items-center justify-center pt-10 pb-6 px-6 overflow-hidden bg-black group"
    >
      {/* Interactive mouse-following background glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.05),
              transparent 80%
            )
          `,
        }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 w-full py-8">
        {/* Left Column - Text Area */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-4 py-1.5 
                        rounded-full text-xs md:text-sm text-gray-300 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>Award-Winning Software Engineering</span>
          </motion.div>

          {/* Brand & Main Headline */}
          <div className="space-y-3 w-full">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-gray-500 font-mono"
            >
              We Are Kryvvia
            </motion.h2>

            {/* Staggered word reveal */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none text-white select-none"
            >
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block mr-3 md:mr-5 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Pitch Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
          >
            Where an idea turns into a project. We help startups and businesses grow with high-performance code and luxury design.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <Link
              href="/projects"
              className="bg-white text-black font-semibold px-8 py-3.5 rounded-full 
                         hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="bg-neutral-900 border border-neutral-800 text-white font-semibold px-8 py-3.5 rounded-full 
                         hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 text-sm sm:text-base flex items-center gap-2"
            >
              Say Hello <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column - Interactive 3D Illustration Card */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <HeroIllustrationCard />
        </div>
      </div>

      {/* Scroll indicator animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">Scroll Down</span>
        <div className="w-5 h-9 border-2 border-neutral-600 rounded-full p-1 flex justify-center">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
