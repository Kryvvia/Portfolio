import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export default function TeamSection() {
  const members = [
    {
      id: 'nikshitha',
      name: 'Nikshitha Vadthyavath',
      role: 'Co-founder & AI Researcher',
      focus: 'Deep Learning, LLM Alignment, MERN Stack',
      bio: 'B.Tech IT undergraduate at IIIT Sonepat. AI researcher with publications in medical diagnostics and computer vision. Leading product execution.',
      image: '/images/nikshitha_v2.png',
      color: 'border-neutral-800 shadow-neutral-900/5',
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
      color: 'border-neutral-800 shadow-neutral-900/5',
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
      color: 'border-neutral-800 shadow-neutral-900/5',
      objectPosition: 'object-[center_10%]',
      socials: {
        linkedin: 'https://www.linkedin.com/in/samadhan-gh/',
        github: 'https://github.com/SamadhanGh',
        email: 'mailto:sdghorpade2003@gmail.com',
      },
    },
  ];

  return (
    <section id="team" className="py-14 px-6 bg-black relative z-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">
            Three minds. One vision. Endless possibilities.
          </h2>
          <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Meet the Team Behind Kryvvia
          </h3>
          <p className="text-gray-400 text-base font-light leading-relaxed">
            Our journey began at IIIT Sonepat, where three passionate developers came together through a shared love for technology, innovation, and problem-solving. What started as classroom discussions, hackathons, and collaborative projects gradually evolved into a vision of building impactful digital products. Today, Kryvvia brings together expertise in AI, full-stack development, backend engineering, UI/UX, and product strategy to help businesses transform their ideas into scalable digital solutions.
          </p>
        </div>

        {/* Member Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className={`group flex flex-col justify-between bg-neutral-950 border ${member.color} backdrop-blur-md rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/15`}
            >
              <div className="space-y-6">
                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-inner">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className={`object-cover ${member.objectPosition || 'object-center'} transition-transform duration-500 group-hover:scale-103`}
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
                  <span className="inline-block text-xs font-semibold text-white tracking-wider uppercase">
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
                  className="ml-auto text-xs font-bold text-gray-300 group-hover:text-white transition-colors flex items-center gap-1"
                >
                  Full Bio <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
