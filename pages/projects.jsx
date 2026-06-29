import { useState } from 'react';
import Head from 'next/head';
import SEO from '../components/SEO';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Web Development', 'Backend & DevOps', 'AI & Research', 'UI/UX & Graphics'];

  const allProjects = [
    // Samadhan's
    {
      id: 'makesenseedu',
      title: 'MakeSenseEdu',
      category: 'Backend & DevOps',
      desc: 'Production EdTech platform serving async multi-quality HLS video transcoding and Razorpay checkout payments with webhook reconciliation.',
      tech: ['Java 21', 'Spring Boot', 'React', 'PostgreSQL', 'AWS Lambda', 'FFmpeg', 'Razorpay'],
      owner: 'Samadhan Ghorpade',
    },
    {
      id: 'ambrutratan-resort',
      title: 'Ambrutratan Resort Bhandardara',
      category: 'Web Development',
      desc: 'Responsive resort website displaying villas, local attractions, and direct WhatsApp booking with Cloudinary delivery integrations.',
      tech: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Cloudinary'],
      owner: 'Samadhan Ghorpade',
    },
    {
      id: 'hotel-kalsubai',
      title: 'Hotel Kalsubai Gate Point',
      category: 'Web Development',
      desc: 'Complete hotel scheduling, menu, and blog directory with JWT authentication security, RDS databases, and an admin panel.',
      tech: ['React.js', 'Spring Boot', 'AWS RDS', 'S3', 'CloudFront', 'JWT'],
      owner: 'Samadhan Ghorpade',
    },
    {
      id: 'volexo',
      title: 'Volexo Booking Backend',
      category: 'Backend & DevOps',
      desc: 'Ride scheduling Spring Boot server managing rider coordinates, driver acceptances, and wallet transaction logic.',
      tech: ['Spring Boot', 'Spring Security', 'PostgreSQL', 'JWT'],
      owner: 'Samadhan Ghorpade',
    },
    {
      id: 'safenote',
      title: 'SafeNote App',
      category: 'Backend & DevOps',
      desc: 'Secure note-taking server incorporating JWT + OAuth2 + 2FA setups, audit trail logs, and RBAC admin panels.',
      tech: ['Spring Boot', 'React', 'JWT', 'OAuth2', 'Swagger'],
      owner: 'Samadhan Ghorpade',
    },
    {
      id: 'async-image-processing',
      title: 'Async Image Processing',
      category: 'Backend & DevOps',
      desc: 'High-performance engine processing 900+ image tiles concurrently in 150-300ms using Java 21 Virtual Threads & StructuredTaskScope.',
      tech: ['Java 21', 'Virtual Threads', 'JavaFX', 'Maven'],
      owner: 'Samadhan Ghorpade',
    },
    {
      id: 'multithreaded-server',
      title: 'MultiThreaded Java Server',
      category: 'Backend & DevOps',
      desc: 'High-concurrency web server utilizing Java NIO selectors, ExecutorService thread pools, static caching, and SSL layers.',
      tech: ['Java', 'ExecutorService', 'Java NIO', 'HTTPS'],
      owner: 'Samadhan Ghorpade',
    },
    // Nikshitha's
    {
      id: 'deepface-emotions',
      title: 'DeepFace Emotions',
      category: 'AI & Research',
      desc: 'Facial emotion recognition system utilizing Convolutional Neural Networks and Federated Learning to classify expressions securely.',
      tech: ['Deep Learning', 'Computer Vision', 'Federated Learning', 'Python'],
      owner: 'Nikshitha Vadthyavath',
    },
    {
      id: 'endangered-species',
      title: 'Endangered Species Detection',
      category: 'AI & Research',
      desc: 'Presented research on AI wildlife conservation systems classifying species using deep vision networks. Published in IEEE CIPHER 2026.',
      tech: ['Deep Learning', 'CNN', 'Wildlife Conservation', 'Computer Vision'],
      owner: 'Nikshitha Vadthyavath',
      paperLink: 'https://ieeexplore.ieee.org/abstract/document/11523743',
    },
    {
      id: 'glaucoma-detection',
      title: 'Glaucoma Detection CDR Analysis',
      category: 'AI & Research',
      desc: 'Dual-stage diagnostics model segmenting the optic disc/cup and measuring CDR ratios. Published in IEEE CIPHER 2026.',
      tech: ['Medical AI', 'Deep Learning', 'Image Segmentation', 'Computer Vision'],
      owner: 'Nikshitha Vadthyavath',
      paperLink: 'https://ieeexplore.ieee.org/abstract/document/11523802',
    },
    {
      id: 'llm-post-training',
      title: 'LLM Post-Training & Multimodal Evaluation',
      category: 'AI & Research',
      desc: 'Worked on AI alignment, instruction-following validation, Chain-of-Thought benchmarks, and comparative ELO models.',
      tech: ['LLMs', 'Multimodal AI', 'AI Alignment', 'Prompt Evaluation', 'ELO'],
      owner: 'Nikshitha Vadthyavath',
    },
    // Sandeep's
    {
      id: 'disney-clone',
      title: 'Disney+ Clone',
      category: 'UI/UX & Graphics',
      desc: 'Responsive frontend clone of Disney+ featuring movie slider elements, Google logins, and real-time database syncing.',
      tech: ['React.js', 'Firebase', 'Redux', 'Tailwind CSS'],
      owner: 'Sandeep Naik',
    },
    {
      id: 'spotify-clone',
      title: 'Spotify Clone',
      category: 'UI/UX & Graphics',
      desc: 'Music dashboard playing songs from cloud storage databases with audio control tracks and auth controls.',
      tech: ['React.js', 'Firebase', 'Tailwind CSS'],
      owner: 'Sandeep Naik',
    },
    {
      id: 'chatgpt-helper',
      title: 'Conversational ChatGPT Helper',
      category: 'Web Development',
      desc: 'Custom UI integrating OpenAIs completion endpoints with prompt templates and dynamic conversation flows.',
      tech: ['React.js', 'OpenAI API', 'CSS3'],
      owner: 'Sandeep Naik',
    },
    {
      id: 'doctor-booking',
      title: 'Doctor Appointment App',
      category: 'Web Development',
      desc: 'Scheduling system for outpatient clinics matching user time-slots with doctors calendar states.',
      tech: ['React.js', 'Node.js', 'Express', 'MongoDB'],
      owner: 'Sandeep Naik',
    },
    {
      id: 'ipo-dashboard',
      title: 'IPO Analytics Dashboard',
      category: 'Web Development',
      desc: 'Fintech portal presenting IPO analytics and performance metrics with interactive charts. Serves 10,000+ users.',
      tech: ['React.js', 'Node.js', 'Tailwind CSS', 'REST API'],
      owner: 'Sandeep Naik',
    },
    {
      id: 'uber-clone',
      title: 'Uber Fullstack Replica',
      category: 'Web Development',
      desc: 'Location tracking app integrating Mapbox geolocation, ride bookings, and driver updates.',
      tech: ['Next.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB'],
      owner: 'Sandeep Naik',
    },
  ];

  // Filtering Logic
  const filteredProjects = allProjects.filter((project) => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="Featured Work & Projects | Kryvvia"
        description="Browse our portfolio of high-performance web applications, scalable platforms, and AI integrations."
        path="/projects"
      />

      <div className="max-w-6xl mx-auto px-6 pt-4 pb-24 space-y-16 bg-black text-gray-200">
        {/* Intro */}
        <div className="space-y-4 text-center flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-mono inline-block">
            Our Works
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Latest Projects <br />
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Recently Shipped.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-gray-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            From serverless transcoding video backends to IEEE publications, explore the full depth of our engineering.
          </motion.p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center pt-6 border-t border-white/5">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer border ${
                  activeFilter === cat
                    ? 'bg-white text-black border-white'
                    : 'bg-white/5 text-gray-400 border-white/5 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64 max-w-sm">
            <input
              type="text"
              placeholder="Search tech, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-950 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-gray-600"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Directory Grid */}
        <motion.div layout className="relative">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.id}
                    className="bg-neutral-950/60 p-6 rounded-2xl border border-neutral-900 flex flex-col justify-between hover:border-neutral-850 hover:bg-neutral-900/40 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                        <span className="uppercase text-white bg-white/5 px-2 py-0.5 rounded border border-white/10">
                          {project.category}
                        </span>
                        <span>By {project.owner.split(' ')[0]}</span>
                      </div>

                      <h3 className="text-white text-lg font-bold tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                        {project.desc}
                      </p>
                    </div>

                    <div className="space-y-4 pt-6 mt-6 border-t border-white/5">
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-mono text-gray-400 bg-black/40 border border-white/5 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        <Link
                          href={`/projects/${project.id}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-gray-300 transition-colors uppercase tracking-wider font-mono"
                        >
                          View Study <ArrowUpRight size={12} />
                        </Link>
                        {project.paperLink && (
                          <a
                            href={project.paperLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-wider font-mono border-l border-white/10 pl-4"
                          >
                            IEEE Xplore <ArrowUpRight size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 text-gray-500 font-mono"
              >
                No projects found matching the criteria.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
