import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ArrowLeft, Mail, Phone, MapPin, Linkedin, Github, Award, CheckCircle, Terminal, Briefcase, ArrowUpRight } from 'lucide-react';

const memberData = {
  nikshitha: {
    id: 'nikshitha',
    name: 'Nikshitha Vadthyavath',
    role: 'Co-founder & AI Researcher',
    avatar: '/images/nikshitha_v2.png',
    objectPosition: 'object-[center_28%]',
    projectTitle: 'Core AI & Software Projects',
    bgTheme: 'from-black via-neutral-950 to-black',
    colorGlow: 'border-neutral-800 shadow-neutral-900/5',
    accentClass: 'text-white',
    email: 'nikshitha1312@gmail.com',
    phone: '+91 93475 56415',
    location: 'Telangana, India',
    linkedin: 'https://www.linkedin.com/in/v-nikshitha-860655258/',
    github: 'https://github.com/nikshitha1312',
    quote: '"I believe the future belongs to those who combine research, engineering, and innovation. Every project I build is driven by curiosity, backed by technology, and focused on creating real-world impact."',
    bio: "I'm Nikshitha Vadthyavath, an AI Researcher, Software Developer, Entrepreneur, and Information Technology undergraduate at IIIT Sonepat. My passion lies at the intersection of AI, Full Stack Development, and Product Innovation. I enjoy building intelligent applications that combine modern software engineering with cutting-edge AI technologies to solve meaningful problems.",
    skills: [
      { category: 'Programming Languages', items: ['C / C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL', 'MERN Stack', 'AWS', 'Java', 'Assembly Language', 'Competitive Programming', 'Machine Learning', 'Jupyter Notebook', 'Tailwind CSS'] },
      { category: 'Tools and Frameworks', items: ['Jupyter', 'VisualStudio', 'Jira', 'Git', 'Excel', 'PowerBi', 'CNN', 'Docker', 'Canva', 'n8n', 'Nhost', 'Hasura'] },
      { category: 'Operating Systems', items: ['Windows', 'Linux'] },
      { category: 'Soft Skills', items: ['Leadership', 'Team Management', 'Adaptibility', 'Problem Solving', 'Public Speaking'] },
    ],
    experience: [
      {
        role: 'Co-founder & AI Software Lead',
        company: 'Kryvvia',
        duration: 'May 2026 — Present',
        desc: 'Leading product research, team collaboration, and AI integrations at Kryvvia agency from ideation to deployment.',
      },
      {
        role: 'Co-founder',
        company: 'Gozy Private Limited',
        duration: 'June 2025 — Apr 2026',
        desc: 'Co-founded Gozy Private Limited. Engineered the main gozy.online portal, designed the user funnel recruitment system, and built the admin metrics monitoring dashboards.',
      },
      {
        role: 'LLM Post-Training Intern',
        company: 'Ethara.ai',
        duration: 'Feb 2026 — Apr 2026',
        desc: 'Contributed to post-training and evaluation of Large Language Models (LLMs) and multimodal AI systems. Handled high-quality data annotation and evaluation across text, image, audio, and video modalities, ELO-based evaluations, and Chain-of-Thought (CoT) validation.',
      },
      {
        role: 'Research Intern',
        company: 'IIT Hyderabad',
        duration: 'June 2025 — Aug 2025',
        desc: 'Worked on DeepFace Emotions dataset in collaboration with a full-time research scholar, applying deep learning, computer vision, and federated learning techniques for facial emotion recognition, including dataset preprocessing, model training, and evaluation.',
      },
    ],
    education: [
      {
        degree: 'B.Tech in Information Technology',
        school: 'Indian Institute of Information Technology, Sonepat',
        duration: '2022 — 2026',
        desc: 'IIIT Sonepat. Score: 80% (GPA 8.0/10). Focusing on AI, ML, Cloud computing, and Algorithms. Social Media Lead at E-Cell IIIT Sonepat.',
      },
      {
        degree: 'Senior Secondary Certificate (Class XII)',
        school: 'Sri Chaitanya College, Telangana',
        duration: '2020 — 2022',
        desc: 'Telangana Board, Score: 84.6%. Focus on Mathematics, Physics, Chemistry.',
      },
      {
        degree: 'Matriculation (Class X)',
        school: 'Sri Aurobindo High School, Telangana',
        duration: '2019 — 2020',
        desc: 'Telangana Board, Score: 10.0 GPA (100%).',
      },
    ],
    projects: [
      { name: 'Endangered Species Detection', desc: 'Nov 2024 - Apr 2025. Python, Jupyter Notebook, Computer Vision, C++, HTML, CNN. Implemented a CNN model achieving 85% accuracy in detecting endangered species across 10,000+ images.' },
      { name: 'Grammar Scoring Engine', desc: 'Apr 2025 - May 2025. Python, Jupyter Notebook, SpeechRecognition, TextBlob, Flask, NLP. Evaluates spoken English, transcribes audio to text, and provides real-time grammar feedback.' },
      { name: 'TripMate Travel Manager', desc: 'Jan 2024 - Mar 2024. React, HTML, JavaScript, CSS. Implemented a travel manager to handle up to 100+ user submissions and showcase key sites in Japan with video links.' },
    ],
    achievements: [
      'Presented research papers "Endangered Species Detection and Prevention Using Deep Learning" and "Dual-Stage Deep Learning Model for Glaucoma Detection" at IEEE EDS International Conference (CIPHER-2026), NIT Jalandhar, Feb 2026.',
      'SIH 2022: Cleared the internal qualifiers round of Smart India Hackathon.',
      'Coding Profiles: Solved 500+ competitive programming questions across Codeforces, LeetCode, CodeChef, and GeeksforGeeks.',
      'EBSB: Delegate at national inter-state cultural exchange program.',
      'Social Media Lead, E-Cell IIIT Sonepat: Increased event participation by 30% and managed team of 5+ members.',
    ],
    publications: [
      {
        title: 'Endangered Species Detection and Prevention Using Deep Learning',
        venue: 'IEEE CIPHER 2026 | NIT Jalandhar',
        desc: 'AI-powered wildlife conservation system using Convolutional Neural Networks (CNNs) for species classification.',
        url: 'https://ieeexplore.ieee.org/abstract/document/11523743',
      },
      {
        title: 'Dual-Stage Deep Learning Model for Glaucoma Detection through Optic Disc–Cup Segmentation and CDR Analysis',
        venue: 'IEEE CIPHER 2026 | NIT Jalandhar',
        desc: 'Early diagnostics medical vision framework calculating optic Disc-to-Cup ratios via image segmentation.',
        url: 'https://ieeexplore.ieee.org/abstract/document/11523802',
      },
    ],
  },
  sandeep: {
    id: 'sandeep',
    name: 'Sandeep Naik',
    role: 'Co-founder & Full Stack Web Developer',
    avatar: '/images/sandeep_v2.png',
    objectPosition: 'object-[center_10%]',
    projectTitle: 'Core Full Stack Projects',
    bgTheme: 'from-black via-neutral-950 to-black',
    colorGlow: 'border-neutral-800 shadow-neutral-900/5',
    accentClass: 'text-white',
    email: 'gugulothsandeepnaik82@gmail.com',
    phone: '+91 96522 97686',
    location: 'Mahabhubabad, Telangana, India',
    linkedin: 'https://www.linkedin.com/in/sandeep-naik-067a07254/',
    github: 'https://github.com/sandeepnaikg',
    quote: '"Imagine a website that loads in under a second, engages users instantly, and converts them into loyal customers — that’s the kind of full stack experience I build. I understand what keeps users hooked, and I bring that insight into every line of code."',
    bio: "I'm Sandeep Naik, a Full Stack Web Developer with a passion for building fast, scalable, and user-friendly web applications. From designing sleek, responsive user interfaces using React, Next.js, and Tailwind CSS, to building robust backend services with Node.js, Express, and MongoDB, I enjoy bringing ideas to life in the browser. My goal is to write clean, efficient code and craft seamless user experiences that solve real-world problems.",
    skills: [
      { category: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Redux', 'Bootstrap', 'Ejs'] },
      { category: 'Backend & APIs', items: ['Node.js', 'Express.js', 'Socket.io', 'RESTful APIs', 'JWT'] },
      { category: 'Languages', items: ['C', 'C++', 'Java', 'Python', 'JavaScript'] },
      { category: 'Databases & Tools', items: ['MongoDB', 'SQL', 'Git/GitHub', 'Firebase', 'Cloudinary', 'Postman'] },
    ],
    experience: [
      {
        role: 'Co-founder & Full Stack Developer',
        company: 'Kryvvia',
        duration: 'May 2026 — Present',
        desc: 'Co-founded Kryvvia. Architecting high-speed web platforms, backend integrations, and frontend responsive components for agency projects.',
      },
      {
        role: 'Co-founder',
        company: 'Gozy Private Limited',
        duration: 'June 2025 — Apr 2026',
        desc: 'Co-founded Gozy Private Limited. Crafted interactive chart modules for real-time traffic statistics, engineered pixel-perfect landing views, and optimized frontend page response speeds.',
      },
      {
        role: 'SDE Co-Team Lead',
        company: 'Bluestock Fintech',
        duration: 'Feb 2025 — Apr 2025',
        desc: 'Engineered an IPO Information Platform using React & Node.js, serving 10,000+ investors. Deployed responsive visual charts resulting in an 85% user retention increase.',
      },
      {
        role: 'Web Development Intern',
        company: 'Teachnook',
        duration: 'June 2024 — Aug 2024',
        desc: 'Built responsive frontend templates with Tailwind CSS and integrated API feeds, improving application load performance by 25%.',
      },
    ],
    education: [
      {
        degree: 'B.Tech in Computer Science & Engineering',
        school: 'Indian Institute of Information Technology, Sonepat',
        duration: '2022 — 2026',
        desc: 'Actively involved in full stack development. Represented the institute at Startup Mahakumbh in New Delhi.',
      },
      {
        degree: 'Intermediate Education',
        school: 'Narayana IIT Academy, Hyderabad',
        duration: '2019 — 2021',
        desc: 'Intensive JEE engineering entrance preparations.',
      },
    ],
    volunteering: [
      {
        title: 'College Sports Captain',
        desc: 'Volleyball and Cricket captain at IIIT Sonepat, leading the team to multiple inter-college tournament championships. Sports taught me composure, versioning, and team coordination.',
      },
    ],
    projects: [
      { name: 'IPO Analytics Dashboard', desc: 'Fintech portal presenting IPO analytics and performance metrics with interactive charts. Serves 10,000+ users.' },
      { name: 'Spotify Clone', desc: 'Music dashboard playing songs from cloud storage databases with audio control tracks and auth controls.' },
      { name: 'Conversational ChatGPT Helper', desc: 'Custom UI integrating OpenAI completion endpoints with prompt templates and dynamic conversation flows.' },
    ],
    achievements: [
      'Co-Team Lead on Bluestock IPO analytics system',
      'Developed and shipped 10+ web portfolios and clones',
      'Represented IIIT Sonepat at national tech summits',
      'Volleyball and Cricket tournament champion captain',
    ],
  },
  samadhan: {
    id: 'samadhan',
    name: 'Samadhan Ghorpade',
    role: 'Backend Developer',
    avatar: '/images/samadhan_v4.png',
    objectPosition: 'object-[center_10%]',
    projectTitle: 'Core Backend Implementations',
    bgTheme: 'from-black via-neutral-950 to-black',
    colorGlow: 'border-neutral-800 shadow-neutral-900/5',
    accentClass: 'text-white',
    email: 'sdghorpade2003@gmail.com',
    phone: '+91 90674 42486',
    location: 'Nashik, India',
    linkedin: 'https://www.linkedin.com/in/samadhan-gh/',
    github: 'https://github.com/SamadhanGh',
    quote: '"I build secure, scalable backend systems using Spring Boot, PostgreSQL, AWS, and Docker. I love solving real-world problems with clean architecture and performance-driven design."',
    bio: "I'm Samadhan Ghorpade, a passionate software developer and 4th-year CSE student at IIIT Sonepat. I specialize in backend microservices, serverless video transcoder architectures, non-blocking Java web servers, and deploying production environments under a strict cloud budget.",
    skills: [
      { category: 'Backend Systems', items: ['Spring Boot', 'Hibernate', 'REST APIs', 'Java NIO', 'ExecutorService'] },
      { category: 'Databases & Ops', items: ['PostgreSQL', 'MySQL', 'Docker', 'AWS Lambda', 'S3', 'CloudFront'] },
      { category: 'Languages', items: ['Java', 'SQL', 'JavaScript', 'Python', 'C++'] },
      { category: 'Tools & Security', items: ['Git/GitHub', 'Maven', 'JWT', 'OAuth2', '2FA', 'Postman'] },
    ],
    experience: [
      {
        role: 'Co-founder & Backend Lead',
        company: 'Kryvvia',
        duration: 'May 2026 — Present',
        desc: 'Handling backend servers, security architectures, microservice integrations, and deployment schedules at Kryvvia.',
      },
      {
        role: 'Freelance Backend Software Engineer',
        company: 'MakeSenseEdu',
        duration: 'Jan 2025 — Present',
        desc: 'Architected async video transcoding using AWS Lambda & FFmpeg, reducing EC2 loads to zero. Integrated Razorpay webhooks and deployed database services inside VPC private subnets.',
      },
    ],
    education: [
      {
        degree: 'B.Tech in Computer Science & Engineering',
        school: 'Indian Institute of Information Technology, Sonepat',
        duration: '2022 — 2026',
        desc: 'Specializing in data structures, algorithms, operating systems, and computer networks.',
      },
    ],
    projects: [
      { name: 'Volexo Booking System', desc: 'Ride-matching wallet engine in Spring Boot improving allocations by 50%.' },
      { name: 'Async Image Processing System', desc: 'Concurrently processing 900+ image tiles in 150-300ms using Virtual Threads.' },
      { name: 'MultiThreaded NIO Web Server', desc: 'Static content cache server using non-blocking NIO selectors, HTTPS, SSL.' },
    ],
  },
};

export default function TeamMember() {
  const router = useRouter();
  const { member } = router.query;

  // Terminal Simulator State for Samadhan
  const [terminalOutput, setTerminalOutput] = useState([
    'Welcome to Samadhan\'s Backend Console. Type "help" for a list of commands.',
    '$ ready_to_build: true',
  ]);
  const [commandInput, setCommandInput] = useState('');

  if (!member) return <div className="text-center py-24 text-gray-500">Resolving profile...</div>;

  const data = memberData[member];

  if (!data) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <h1 className="text-3xl font-bold text-white">Profile not found</h1>
        <Link href="/" className="text-white hover:underline flex items-center justify-center gap-1.5">
          <ArrowLeft size={16} /> Return to Homepage
        </Link>
      </div>
    );
  }

  // Handle Command Submission on Samadhan's console
  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cmd = commandInput.trim().toLowerCase();
    if (!cmd) return;

    let response = [];
    if (cmd === 'help') {
      response = [
        'Available commands:',
        '  whoami       - Display personal info and summary',
        '  skills       - Print technical competency levels',
        '  experience   - List professional freelance highlights',
        '  projects     - List key backend server designs',
        '  clear        - Clear console logs',
      ];
    } else if (cmd === 'whoami') {
      response = [
        'Name: Samadhan Ghorpade',
        'Role: Backend Developer',
        'Address: Igatpuri, Nashik District, Maharashtra, India',
        'Focus: Clean Architecture, Scalable APIs, AWS Optimization',
      ];
    } else if (cmd === 'skills') {
      response = [
        'Spring Boot [██████████] 95%',
        'Java         [██████████] 95%',
        'PostgreSQL   [████████░░] 88%',
        'Docker       [███████░░░] 75%',
        'AWS Cloud    [███████░░░] 75%',
      ];
    } else if (cmd === 'experience') {
      response = [
        'MakeSenseEdu: Shipped Serverless Lambda FFmpeg transcoders, saving $100s in operational bills.',
        'Kryvvia: Deployed database services, JWT authorization logic, and Docker build scripts.',
      ];
    } else if (cmd === 'projects') {
      response = [
        '1. Volexo (Ride booking wallet flow reducing waittimes by 50%)',
        '2. Async Image Processing System (Virtual threads tiles scheduler in under 200ms)',
        '3. NIO Web Server (Custom Java HTTPS caching server)',
      ];
    } else if (cmd === 'clear') {
      setTerminalOutput([]);
      setCommandInput('');
      return;
    } else {
      response = [`Command not found: "${cmd}". Type "help" for a list of options.`];
    }

    setTerminalOutput((prev) => [...prev, `$ ${commandInput}`, ...response]);
    setCommandInput('');
  };

  return (
    <>
      <Head>
        <title>{data.name} | {data.role}</title>
        <meta name="description" content={data.quote} />
      </Head>

      <div className={`min-h-screen bg-gradient-to-b ${data.bgTheme} text-gray-200 pb-20`}>
        {/* Profile Header Block */}
        <div className="max-w-6xl mx-auto px-6 pt-10">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-10">
            <ArrowLeft size={16} /> Back to Agency
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Portrait Column */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div className={`relative w-72 h-72 rounded-3xl overflow-hidden border ${data.colorGlow} bg-neutral-900`}>
                <Image
                  src={data.avatar}
                  alt={data.name}
                  fill
                  className={`object-cover ${data.objectPosition || 'object-center'}`}
                  priority
                  sizes="288px"
                />
              </div>

              {/* Quick Contacts */}
              <div className="mt-8 space-y-3 w-full max-w-xs text-sm text-gray-400 bg-neutral-950 border border-white/5 p-5 rounded-2xl">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className={data.accentClass} />
                  <span>{data.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className={data.accentClass} />
                  <a href={`mailto:${data.email}`} className="hover:underline">{data.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className={data.accentClass} />
                  <span>{data.phone}</span>
                </div>
              </div>
            </div>

            {/* Profile Story Column */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <span className={`text-xs font-semibold uppercase tracking-wider ${data.accentClass}`}>
                  {data.role}
                </span>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  {data.name}
                </h1>
              </div>

              <blockquote className="border-l-2 border-white/20 pl-4 py-1 text-gray-300 leading-relaxed italic text-base sm:text-lg">
                {data.quote}
              </blockquote>

              <div className="space-y-4 text-gray-400 text-sm sm:text-base font-light leading-relaxed">
                <p>{data.bio}</p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-2">
                <a href={data.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors">
                  <Linkedin size={14} /> LinkedIn
                </a>
                <a href={data.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors">
                  <Github size={14} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Terminal Section for Samadhan */}
        {member === 'samadhan' && (
          <div className="max-w-6xl mx-auto px-6 mt-20">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-6 flex items-center gap-2 font-mono">
              <Terminal className="text-white" /> console_shell.sh
            </h2>
            <div className="bg-black/80 border border-white/10 rounded-2xl overflow-hidden font-mono shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="bg-neutral-900 border-b border-white/5 px-4 py-3.5 flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-neutral-800 inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-neutral-800 inline-block" />
                <span className="w-3.5 h-3.5 rounded-full bg-neutral-800 inline-block" />
                <span className="text-xs text-gray-500 ml-4 font-mono">samadhan@dev-server:~</span>
              </div>
              {/* Terminal Logs */}
              <div className="p-6 h-80 overflow-y-auto text-xs sm:text-sm text-gray-300 space-y-2">
                {terminalOutput.map((line, index) => (
                  <div key={index} className="whitespace-pre-wrap leading-relaxed">
                    {line}
                  </div>
                ))}
              </div>
              {/* Terminal Input */}
              <form onSubmit={handleCommandSubmit} className="bg-neutral-950 border-t border-white/5 px-6 py-3 flex items-center gap-2">
                <span className="text-white font-mono">$</span>
                <input
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  placeholder='Type "help" to start exploring backend datasets...'
                  className="bg-transparent border-none text-white focus:outline-none w-full font-mono text-sm"
                />
              </form>
            </div>
          </div>
        )}

        {/* Unified Resume details (Skills, Experience, Education) */}
        <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Skills list */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-white text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
              <Award className={data.accentClass} /> Skills Inventory
            </h2>
            <div className="space-y-6">
              {data.skills.map((grp) => (
                <div key={grp.category} className="space-y-3">
                  <h3 className="text-gray-400 text-xs font-semibold tracking-wider uppercase">{grp.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {grp.items.map((it) => (
                      <span key={it} className="text-xs font-mono text-gray-300 bg-neutral-900 border border-white/5 px-2.5 py-1 rounded">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            {data.achievements && (
              <div className="space-y-6 pt-8 border-t border-white/5">
                <h3 className="text-white text-lg font-bold tracking-tight">Key Achievements</h3>
                <ul className="space-y-3 text-sm text-gray-400 font-light">
                  {data.achievements.map((ach, idx) => (
                    <li key={idx} className="flex gap-2 items-start">
                      <CheckCircle size={16} className={`${data.accentClass} shrink-0 mt-0.5`} />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Timeline details */}
          <div className="lg:col-span-8 space-y-12">
            {/* Experience */}
            <div className="space-y-8">
              <h2 className="text-white text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
                <Briefcase className={data.accentClass} /> Work Experience
              </h2>
              <div className="space-y-6 relative pl-4 border-l border-white/5 ml-2">
                {data.experience.map((exp, idx) => (
                  <div key={idx} className="relative space-y-2">
                    <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-white" />
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-white font-bold text-lg leading-tight">{exp.role}</h3>
                      <span className="text-xs font-mono text-gray-500">{exp.duration}</span>
                    </div>
                    <span className={`inline-block text-xs font-semibold ${data.accentClass} tracking-wide`}>
                      {exp.company}
                    </span>
                    <p className="text-gray-400 text-sm font-light leading-relaxed pt-1">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Research Papers / publications for Nikshitha */}
            {data.publications && (
              <div className="space-y-8 pt-8 border-t border-white/5">
                <h2 className="text-white text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
                  <Terminal className="text-white" /> IEEE Research &amp; Publications
                </h2>
                <div className="space-y-6">
                  {data.publications.map((pub, idx) => (
                    <div key={idx} className="glass-card p-6 rounded-2xl border border-white/5 space-y-3">
                      {pub.url ? (
                        <a 
                          href={pub.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group block"
                        >
                          <h3 className="text-white font-bold text-lg tracking-tight leading-snug group-hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 hover:underline decoration-blue-400/40">
                            {pub.title}
                            <ArrowUpRight size={16} className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                          </h3>
                        </a>
                      ) : (
                        <h3 className="text-white font-bold text-lg tracking-tight leading-snug">{pub.title}</h3>
                      )}
                      <span className="text-xs text-white font-mono font-semibold block">{pub.venue}</span>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">{pub.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sports Leadership for Sandeep */}
            {data.volunteering && (
              <div className="space-y-8 pt-8 border-t border-white/5">
                <h2 className="text-white text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
                  <Award className="text-white" /> Volunteering &amp; Sports
                </h2>
                <div className="space-y-4">
                  {data.volunteering.map((v, i) => (
                    <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 space-y-2">
                      <h3 className="text-white font-bold text-lg tracking-tight">{v.title}</h3>
                      <p className="text-gray-400 text-sm font-light leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects for team member */}
            {data.projects && (
              <div className="space-y-8 pt-8 border-t border-white/5">
                <h2 className="text-white text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
                  <Award className="text-white" /> {data.projectTitle || 'Featured Projects'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.projects.map((p, i) => (
                    <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 space-y-2">
                      <h3 className="text-white font-bold text-base tracking-tight">{p.name}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            <div className="space-y-8 pt-8 border-t border-white/5">
              <h2 className="text-white text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
                <Award className={data.accentClass} /> Education History
              </h2>
              <div className="space-y-6">
                {data.education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start flex-wrap gap-2 text-sm">
                    <div className="space-y-1">
                      <h4 className="text-white font-bold">{edu.degree}</h4>
                      <p className="text-gray-400 font-light">{edu.school}</p>
                      <p className="text-xs text-gray-500 leading-relaxed font-light">{edu.desc}</p>
                    </div>
                    <span className="text-xs font-mono text-gray-500">{edu.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
