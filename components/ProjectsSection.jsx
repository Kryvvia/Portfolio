import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

function ProjectSpotlightCard({ project }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative bg-neutral-950/40 border border-neutral-900 rounded-3xl p-8 flex flex-col justify-between 
                 overflow-hidden shadow-2xl transition-all duration-300 hover:border-neutral-800/80"
    >
      {/* Spotlight Hover Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.05),
              transparent 80%
            )
          `,
        }}
      />

      <div className="space-y-6 relative z-10">
        <div className="flex justify-between items-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            {project.category}
          </span>
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-white text-2xl font-bold tracking-tight group-hover:text-gray-300 transition-colors">
            {project.title}
          </h4>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      <div className="space-y-4 pt-8 relative z-10 mt-6 border-t border-white/5">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-gray-300 bg-black border border-white/5 px-2.5 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-gray-300 transition-colors uppercase tracking-wider"
        >
          View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      id: 'makesenseedu',
      title: 'MakeSenseEdu',
      category: 'Web & Backend',
      description: 'A live production EdTech platform featuring HLS multi-quality video streaming, serverless async video transcoding pipelines, and secure Razorpay payment gateway integration.',
      tech: ['Spring Boot', 'React', 'AWS Lambda', 'FFmpeg', 'PostgreSQL'],
    },
    {
      id: 'deepface-emotions',
      title: 'DeepFace Emotions',
      category: 'AI & Research',
      description: 'Facial emotion recognition systems developed using Deep Learning, Computer Vision, and Federated Learning. Explored high-accuracy models with private datasets.',
      tech: ['Deep Learning', 'Computer Vision', 'Federated Learning', 'Python'],
    },
    {
      id: 'disney-clone',
      title: 'Disney+ Clone',
      category: 'Frontend & UI',
      description: 'A full responsive replica of the Disney+ interface, featuring movie sliders, Google authentication logins, database syncing, and video streams.',
      tech: ['React.js', 'Redux', 'Firebase', 'Tailwind CSS'],
    },
    {
      id: 'ipo-dashboard',
      title: 'IPO Analytics Platform',
      category: 'Web & Fintech',
      description: 'An interactive IPO information board engineering data visualization, analytics dashboard, real-time stock alerts, and mobile-friendly metrics.',
      tech: ['React.js', 'Node.js', 'Tailwind CSS', 'RESTful API'],
    },
  ];  return (
    <section id="projects" className="pt-8 pb-10 bg-black relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-10 px-6">

        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase"
            >
              Our Portfolio
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white"
            >
              Latest Projects We <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Recently Finished.</span>
            </motion.h3>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0"
          >
            <Link
              href="/projects"
              className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/10 hover:border-white/20 transition-all"
            >
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectSpotlightCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
