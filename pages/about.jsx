import Head from 'next/head';
import SEO from '../components/SEO';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Heart, Sparkles, Lightbulb, Compass, Award, Rocket, HelpCircle } from 'lucide-react';

export default function About() {
  const beliefs = [
    'Technology should simplify complexity.',
    'Every product should solve a real problem.',
    'Good design is invisible.',
    'Clean architecture creates long-term success.',
    'Building relationships is more important than delivering projects.',
    'Innovation comes from continuous learning.',
  ];

  const whatWeDo = [
    { title: 'Web Development', desc: 'Custom, lightning-fast frontend interfaces and server-rendered Next.js architectures.' },
    { title: 'Mobile App Development', desc: 'Cross-platform native iOS & Android applications using React Native.' },
    { title: 'UI/UX Design', desc: 'Low-fidelity wireframing, moodboards, user journeys, and component systems in Figma.' },
    { title: 'SEO', desc: 'Optimized semantic HTML metadata structure, canonical links, and fast Lighthouse scores.' },
  ];

  const workflows = [
    { phase: 'Discover', desc: 'Understanding your vision, business goals, users, and challenges.' },
    { phase: 'Design', desc: 'Research, wireframes, user experience, and modern interfaces.' },
    { phase: 'Develop', desc: 'Building secure, scalable, high-performance applications.' },
    { phase: 'Launch', desc: 'Testing, deployment, optimization, and continuous improvements.' },
  ];

  const whyChooseUs = [
    'Business-first approach',
    'Modern technology stack',
    'Scalable architecture',
    'Clean and maintainable code',
    'Transparent communication',
    'Long-term technical partnership',
    'End-to-end product development',
    'User-centered design',
    'Reliable support',
  ];

  const team = [
    {
      id: 'nikshitha',
      name: 'Nikshitha Vadthyavath',
      role: 'Co-Founder',
      skills: 'AI • Product Strategy • Frontend',
      image: '/images/nikshitha_v2.png',
      objectPosition: 'object-[center_28%]',
      desc: 'Focuses on understanding business requirements, product strategy, user experience, market research, AI integration, and frontend development.',
    },
    {
      id: 'sandeep',
      name: 'Sandeep Naik',
      role: 'Co-Founder',
      skills: 'Full Stack Development',
      image: '/images/sandeep_v2.png',
      objectPosition: 'object-[center_10%]',
      desc: 'Specializes in designing and developing scalable web applications, building modern user interfaces, integrating APIs, and transforming business ideas into digital products.',
    },
    {
      id: 'samadhan',
      name: 'Samadhan Ghorpade',
      role: 'Co-Founder',
      skills: 'Backend & Cloud Engineering',
      image: '/images/samadhan_v4.png',
      objectPosition: 'object-[center_10%]',
      desc: 'Builds secure backend systems, cloud infrastructure, databases, APIs, deployment pipelines, and scalable architectures that power reliable applications.',
    },
  ];

  return (
    <>
      <SEO 
        title="About Kryvvia | Software Engineering Agency"
        description="Learn about Kryvvia - a software development agency founded by three IIIT Sonepat engineers building high-performance products."
        path="/about"
      />

      <div className="max-w-6xl mx-auto px-6 pt-4 pb-16 space-y-6 bg-black text-gray-200">
        
        {/* HERO SECTION - TIGHT COMPACT */}
        <section className="space-y-4 pt-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 max-w-4xl mx-auto flex flex-col items-center"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-mono">
              About Our Agency
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight text-center">
              Building Digital Products <br />
              <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">That Drive Growth.</span>
            </h1>
            <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl text-center">
              At Kryvvia, we transform ideas into scalable digital products through thoughtful design, modern engineering, and a deep understanding of business needs.
            </p>
            <p className="text-gray-500 text-sm sm:text-base font-light leading-relaxed max-w-2xl text-center">
              Founded by three engineers who met at IIIT Sonepat, Kryvvia was built on a shared passion for technology, collaboration, and creating meaningful software. Today, we help startups, businesses, and organizations build web applications, mobile apps, UI/UX designs, and digital experiences that are fast, scalable, and built to last.
            </p>
            <div className="flex gap-4 pt-2 justify-center">
              <Link
                href="/contact"
                className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-neutral-200 transition-all text-xs font-mono uppercase tracking-wider"
              >
                Start Your Project
              </Link>
              <Link
                href="/projects"
                className="bg-neutral-900 border border-neutral-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-neutral-800 transition-all text-xs font-mono uppercase tracking-wider"
              >
                Explore Our Work
              </Link>
            </div>
          </motion.div>
        </section>

        {/* OUR STORY - PLACED SECOND */}
        <section className="border-t border-neutral-900 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-mono">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Where It All Started
            </h2>
            <blockquote className="border-l-2 border-white/20 pl-4 py-1 text-gray-400 italic text-xs sm:text-sm">
              &ldquo;Every successful product begins with a conversation.&rdquo;
            </blockquote>
          </div>
          <div className="lg:col-span-7 space-y-3 text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
            <p>
              Ours started at IIIT Sonepat, where three developers with different strengths discovered a shared vision for building impactful technology.
            </p>
            <p>
              Countless hours spent collaborating on projects, exchanging ideas, solving technical challenges, and learning together eventually led to something bigger than individual ambitions.
            </p>
            <p>
              Instead of simply writing software, we wanted to build products that solve real business problems while delivering exceptional user experiences.
            </p>
            <p className="text-white font-semibold">
              That vision became Kryvvia.
            </p>
            <p>
              Today we work as one team, combining design, engineering, and product thinking to help businesses turn ideas into successful digital products.
            </p>
          </div>
        </section>

        {/* WHAT WE BELIEVE */}
        <section className="border-t border-neutral-900 pt-6 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-mono">
              Core Beliefs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What We Believe
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beliefs.map((belief, idx) => (
              <div
                key={idx}
                className="bg-neutral-950/40 border border-neutral-900 rounded-2xl p-6 flex gap-4 items-start hover:border-neutral-800 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 text-white shrink-0">
                  <CheckCircle2 size={14} />
                </div>
                <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed pt-0.5">
                  {belief}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="border-t border-neutral-900 pt-6 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-mono">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What We Do
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
              We partner with startups, founders, and growing businesses to design, develop, and scale digital products. From idea validation to deployment and ongoing support, we become an extension of your team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatWeDo.map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-950 border border-neutral-900 rounded-3xl p-6 space-y-3 hover:border-neutral-800 transition-colors"
              >
                <h3 className="text-white text-base sm:text-lg font-bold">{item.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="border-t border-neutral-900 pt-6 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-mono">
              Engineering Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflows.map((flow, idx) => (
              <div
                key={idx}
                className="bg-neutral-950/60 p-6 rounded-2xl border border-neutral-900 space-y-3 relative hover:border-neutral-800 transition-colors"
              >
                <div className="absolute top-6 right-6 text-[10px] text-gray-500 font-mono font-bold">
                  PHASE 0{idx + 1}
                </div>
                <h3 className="text-white font-bold text-base sm:text-lg tracking-tight font-mono">{flow.phase}</h3>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">{flow.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MEET THE TEAM - PLACED HERE */}
        <section className="border-t border-neutral-900 pt-6 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-mono">
              Our Core Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Meet the Team
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light">
              The engineers and co-founders building your next scalable platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between bg-neutral-950 border border-neutral-900 backdrop-blur-md rounded-3xl p-6 hover:border-neutral-800 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Image */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-inner">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover ${member.objectPosition || 'object-center'} transition-transform duration-500 group-hover:scale-102`}
                    />
                  </div>
                  {/* Bio details */}
                  <div className="space-y-2">
                    <h4 className="text-white text-base sm:text-lg font-bold tracking-tight">
                      {member.name}
                    </h4>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
                        {member.role}
                      </span>
                      <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider block">
                        {member.skills}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed pt-1">
                      {member.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 mt-4 flex justify-between items-center">
                  <Link
                    href={`/team/${member.id}`}
                    className="text-xs font-bold text-gray-300 hover:text-white transition-colors flex items-center gap-1 font-mono uppercase tracking-wider text-[10px]"
                  >
                    View Biography <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE KRYVVIA */}
        <section className="border-t border-neutral-900 pt-6 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-mono">
              Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Choose Kryvvia
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="bg-neutral-950/40 border border-neutral-900 rounded-xl p-5 flex items-center gap-3 hover:border-neutral-800 transition-colors"
              >
                <div className="w-2 h-2 bg-white rounded-full shrink-0" />
                <span className="text-gray-300 text-xs sm:text-sm font-light">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="border-t border-neutral-900 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-neutral-950 border border-neutral-900 p-8 rounded-3xl space-y-3 hover:border-neutral-800 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white">
              <Rocket size={18} />
            </div>
            <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">Our Mission</h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
              To help ambitious businesses transform ideas into intelligent digital products through innovation, engineering excellence, and meaningful collaboration.
            </p>
          </div>

          <div className="bg-neutral-950 border border-neutral-900 p-8 rounded-3xl space-y-3 hover:border-neutral-800 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white">
              <Compass size={18} />
            </div>
            <h3 className="text-white text-lg sm:text-xl font-bold tracking-tight">Our Vision</h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
              To become a trusted technology partner for startups and enterprises by building software that creates measurable business impact.
            </p>
          </div>
        </section>

        {/* FINAL CTA - LET'S BUILD SOMETHING EXCEPTIONAL */}
        <section className="border-t border-neutral-900 pt-6">
          <div className="bg-gradient-to-b from-neutral-950 to-neutral-900 border border-neutral-900 p-8 sm:p-12 rounded-3xl text-center space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/[0.01] pointer-events-none" />
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let&apos;s Build Something Exceptional Together
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed max-w-xl mx-auto">
              Whether you&apos;re building your first MVP, scaling an existing platform, or bringing a new digital idea to life, we&apos;re here to help. At Kryvvia, we don&apos;t just build software. We build products that people love to use.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-neutral-200 transition-all text-xs font-mono uppercase tracking-wider"
              >
                Start a Project
              </Link>
              <Link
                href="/contact"
                className="bg-neutral-900 border border-neutral-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-neutral-800 transition-all text-xs font-mono uppercase tracking-wider"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
