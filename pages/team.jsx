import Head from 'next/head';
import SEO from '../components/SEO';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Team() {
  const members = [
    {
      id: 'nikshitha',
      name: 'Nikshitha Vadthyavath',
      role: 'Co-founder & AI Researcher',
      focus: 'Deep Learning, LLM Alignment, MERN Stack',
      bio: 'B.Tech IT undergraduate at IIIT Sonepat. AI researcher with publications in medical diagnostics and computer vision. Leading product execution.',
      image: '/images/nikshitha_v2.png',
      objectPosition: 'object-[center_28%]',
      socials: {
        linkedin: 'https://www.linkedin.com/in/v-nikshitha-860655258/',
        github: 'https://github.com/nikshitha1312',
        email: 'mailto:nikshitha1312@gmail.com',
      },
    },
    {
      id: 'sandeep',
      name: 'Sandeep Naik',
      role: 'Co-founder & Full Stack Web Developer',
      focus: 'MERN Stack, Next.js, Go, TypeScript, React Native, n8n, AWS',
      bio: 'B.Tech CSE student at IIIT Sonepat. Expert in engineering lightning-fast user interfaces, and managing full stack deployments. Leading team workflows.',
      image: '/images/sandeep_v2.png',
      objectPosition: 'object-[center_10%]',
      socials: {
        linkedin: 'https://www.linkedin.com/in/sandeep-naik-067a07254/',
        github: 'https://github.com/sandeepnaikg',
        email: 'mailto:gugulothsandeepnaik82@gmail.com',
      },
    },
    {
      id: 'samadhan',
      name: 'Samadhan Ghorpade',
      role: 'Backend & DevOps Engineer',
      focus: 'Java, Spring Boot, PostgreSQL, AWS, Docker',
      bio: 'B.Tech CSE student at IIIT Sonepat. Architect of serverless async pipelines, high-performance web servers, and automated zero-downtime CI/CD.',
      image: '/images/samadhan_v4.png',
      objectPosition: 'object-[center_10%]',
      socials: {
        linkedin: 'https://www.linkedin.com/in/samadhan-gh/',
        github: 'https://github.com/SamadhanGh',
        email: 'mailto:sdghorpade2003@gmail.com',
      },
    },
  ];

  return (
    <>
      <SEO 
        title="Developer Team | Kryvvia"
        description="Meet the core engineering team behind Kryvvia - experts in AI integration, full stack systems, and DevOps scaling."
        path="/team"
      />

      <div className="max-w-6xl mx-auto px-6 pt-4 pb-24 space-y-12 bg-black text-gray-200">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 text-center flex flex-col items-center mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-mono inline-block">
            Three minds. One vision. Endless possibilities.
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Meet the Team <br />
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Behind Kryvvia.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-400 text-base sm:text-lg font-light leading-relaxed mx-auto"
          >
            Our journey began at IIIT Sonepat, where three passionate developers came together through a shared love for technology, innovation, and problem-solving. What started as classroom discussions, hackathons, and collaborative projects gradually evolved into a vision of building impactful digital products. Today, Kryvvia brings together expertise in AI, full-stack development, backend engineering, UI/UX, and product strategy to help businesses transform their ideas into scalable digital solutions.
          </motion.p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col justify-between bg-neutral-950/60 border border-neutral-900 backdrop-blur-md rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-800 hover:bg-neutral-900/40"
            >
              <div className="space-y-6">
                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-inner">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover ${member.objectPosition || 'object-center'} transition-transform duration-500 group-hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
                  />
                  <span className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm text-[10px] text-gray-300 font-mono px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {member.id === 'nikshitha' ? 'AI / Product' : member.id === 'sandeep' ? 'Fullstack' : 'Backend'}
                  </span>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="text-white text-xl font-bold tracking-tight group-hover:text-gray-300 transition-colors">
                      {member.name}
                    </h4>
                    <Link
                      href={`/team/${member.id}`}
                      className="text-gray-500 hover:text-white p-1 transition-colors"
                      aria-label={`View ${member.name} profile`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                  <span className="inline-block text-xs font-semibold text-white tracking-wider uppercase font-mono">
                    {member.role}
                  </span>
                  <p className="text-xs text-gray-400 font-mono">
                    {member.focus}
                  </p>
                  <p className="text-gray-400 text-sm font-light leading-relaxed pt-2">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Social Connections */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5 mt-6">
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href={member.socials.email}
                  className="text-gray-500 hover:text-white transition-colors"
                  aria-label="Email Address"
                >
                  <Mail size={16} />
                </a>
                <Link
                  href={`/team/${member.id}`}
                  className="ml-auto text-xs font-bold text-gray-300 group-hover:text-white transition-colors flex items-center gap-1 font-mono uppercase tracking-wider text-[11px]"
                >
                  Full Bio <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Principles / Why Us Section */}
        <div className="border-t border-neutral-900 pt-16 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-mono">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Collaborate With Our Engineers?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
              We operate as a high-density talent unit. By eliminating middle layers, we align directly with your technical goals to build fast, robust systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-950/40 border border-neutral-900 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-white text-lg font-bold">Direct Engineering Access</h3>
              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                You communicate directly with the core developers. No project managers, no translation loss—just high-fidelity collaboration from concept to production code.
              </p>
            </div>

            <div className="bg-neutral-950/40 border border-neutral-900 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-white text-lg font-bold">Research & Industry Rigor</h3>
              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                Combining research expertise from top labs (IIT Hyderabad) with hands-on startup execution (Ethara.ai, Gozy) to deliver state-of-the-art products.
              </p>
            </div>

            <div className="bg-neutral-950/40 border border-neutral-900 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-white text-lg font-bold">End-to-End Execution</h3>
              <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                From interactive UI designs in Figma to highly scalable backends and zero-downtime automated pipelines—we own the entire stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
