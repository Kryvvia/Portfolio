import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';

const projectCaseStudies = {
  makesenseedu: {
    title: 'MakeSenseEdu',
    category: 'Backend & DevOps',
    owner: 'Samadhan Ghorpade',
    client: 'MakeSenseEducation',
    duration: 'Oct 2025 – Apr 2026',
    status: 'Live Production',
    link: 'https://makesenseedu.com',
    desc: 'MakeSenseEdu is a live, commercial EdTech platform architected to stream high-definition course lectures using custom serverless pipelines, keeping AWS operational bills within a tight $60/month budget.',
    tech: ['Java 21', 'Spring Boot', 'React', 'PostgreSQL', 'AWS Lambda', 'FFmpeg', 'CloudFront', 'Razorpay'],
    overview: 'The primary challenge of MakeSenseEdu was handling large-scale video uploads and HLS adaptive bitrate streaming without maintaining an active, expensive EC2 transcoding node. We architected a serverless async video pipeline triggered directly by S3 events, which reduced server CPU load to zero.',
    pipeline: [
      'Client uploads raw mp4 lectures to private Amazon S3 staging buckets.',
      'S3 trigger fires AWS Lambda executing static FFmpeg binaries.',
      'Lambda transcodes video into 360p, 720p, and 1080p TS chunks and creates an index manifest playlist (.m3u8).',
      'The multi-quality playlist is stored in public-delivery S3, cached on CloudFront with SSL.',
      'Secure Razorpay integrations verify payments via HMAC SHA256 signatures, preventing duplicate checkouts.',
    ],
    features: [
      'Adaptive Bitrate HLS Streaming (360p / 720p / 1080p)',
      'Serverless Async Transcoding Pipeline',
      'EC2 Private Subnet DB Security',
      'Razorpay HMAC Webhook Security Integration',
      'Automated Zero-Downtime Docker CI/CD deployments',
    ],
  },
  'deepface-emotions': {
    title: 'DeepFace Emotions',
    category: 'AI & Research',
    owner: 'Nikshitha Vadthyavath',
    client: 'IIT Hyderabad (Research)',
    duration: 'June 2025 – Aug 2025',
    status: 'Research Complete',
    link: 'https://github.com',
    desc: 'DeepFace Emotions explores the boundary of Facial Emotion Recognition (FER) systems using Convolutional Neural Networks and privacy-preserving Federated Learning setups.',
    tech: ['Deep Learning', 'Computer Vision', 'Federated Learning', 'Python', 'PyTorch', 'Jupyter'],
    overview: 'As part of a Research Internship under IIT Hyderabad scholars, the focus was modeling human expressions in high-accuracy datasets. Training massive vision systems presents privacy concerns when aggregating source data. We implemented federated learning schemas where neural weights are updated locally on client devices before secure aggregation.',
    pipeline: [
      'Preprocessed custom FER image datasets through histogram equalization and face alignment cropping.',
      'Constructed CNN nodes with PyTorch, tuning hyper-parameters to enhance recognition accuracies.',
      'Programmed federated loops, simulating weight sharing and central parameter aggregations.',
      'Conducted comparative studies measuring model convergence rates under non-IID data distributions.',
    ],
    features: [
      'High-accuracy Facial Expression classification',
      'Federated Learning secure local parameters mapping',
      'Image preprocessing scripts (CLAHE & MTCNN)',
      'Model validation reports on cross-dataset training',
    ],
  },
  'disney-clone': {
    title: 'Disney+ Clone',
    category: 'UI & Graphics',
    owner: 'Sandeep Naik',
    client: 'Independent Project',
    duration: 'May 2024',
    status: 'Demo Live',
    link: 'https://github.com',
    desc: 'Disney+ Clone is a highly polished responsive recreation of the Disney+ landing experience and movie directory, serving dynamic content streams.',
    tech: ['React.js', 'Redux', 'Firebase', 'Tailwind CSS', 'Google Auth'],
    overview: 'This project was designed to demonstrate pixel-perfect responsive layouts, complex state tracking (managing user bookmarks and stream views via Redux), and database syncing through Firestore. The landing page looks identical to the original platform with sliding carousels and glassmorphic card grids.',
    pipeline: [
      'Constructed pixel-perfect layout using Tailwind grid system.',
      'Wired Google login authentications through Firebase SDK.',
      'Managed active media carousels and slider components.',
      'Synchronized stream listings dynamically from Firebase Firestore.',
    ],
    features: [
      'Responsive video streaming overlays',
      'Redux slice-based playlist tracking',
      'Google authentication profile setups',
      'Tailwind fluid transitions and glass overlays',
    ],
  },
  'ipo-dashboard': {
    title: 'IPO Analytics Platform',
    category: 'Web & Fintech',
    owner: 'Sandeep Naik',
    client: 'Bluestock Fintech',
    duration: 'Feb 2025 – Apr 2025',
    status: 'Production Deployed',
    link: 'https://github.com',
    desc: 'An IPO information and analytics board designed to simplify investment statistics for retail traders, handling 10,000+ active investors.',
    tech: ['React.js', 'Node.js', 'Express', 'Tailwind CSS', 'REST API'],
    overview: 'During my internship at Bluestock Fintech, we noticed traditional stock platforms present IPO figures in flat tables. We built an analytics dashboard that maps statistics visually, resulting in an 85% increase in user retention rates.',
    pipeline: [
      'Designed responsive UI layouts using Tailwind CSS.',
      'Wired Node Express REST endpoints to fetch dynamic stock feeds.',
      'Crafted custom charts visualizing IPO premium margins.',
      'Implemented real-time alerts warning users of subscriptions.',
    ],
    features: [
      'Interactive IPO performance charts',
      'Fast REST API loading and data structures',
      'Alert tracking & subcription flags',
      '85% increase in user retention optimization',
    ],
  },
  'endangered-species': {
    title: 'Endangered Species Detection',
    category: 'AI & Research',
    owner: 'Nikshitha Vadthyavath',
    client: 'NIT Jalandhar / IEEE CIPHER',
    duration: 'Nov 2024 – Apr 2025',
    status: 'Published',
    link: 'https://ieeexplore.ieee.org/abstract/document/11523743',
    linkLabel: 'IEEE Publication',
    desc: 'Presented research on AI wildlife conservation systems classifying species using deep vision networks. Published in IEEE CIPHER 2026.',
    tech: ['Deep Learning', 'CNN', 'Wildlife Conservation', 'Computer Vision', 'Python', 'Jupyter'],
    overview: 'This research proposes an AI-based system designed for wildlife conservation to detect and prevent harm to endangered species using deep learning techniques. By leveraging Convolutional Neural Networks (CNNs) trained on extensive image datasets of vulnerable animal species, the model successfully automates classification and monitoring tasks, assisting rangers and ecological researchers in the field.',
    pipeline: [
      'Curated and preprocessed wildlife datasets containing 10,000+ images of target species.',
      'Designed and implemented a CNN architecture using custom filters for unique animal features.',
      'Trained the model and performed validation checks, achieving an accuracy rating of 85%.',
      'Compiled research findings and published the study in the IEEE EDS CIPHER 2026 conference.'
    ],
    features: [
      'Convolutional Neural Network (CNN) Classifier',
      'Real-time image classification and object identification',
      'Robust model handling diverse environments and lighting',
      'Detailed accuracy validation reports (85% performance score)'
    ],
  },
  'glaucoma-detection': {
    title: 'Glaucoma Detection CDR Analysis',
    category: 'AI & Research',
    owner: 'Nikshitha Vadthyavath',
    client: 'NIT Jalandhar / IEEE CIPHER',
    duration: 'Nov 2025 – Feb 2026',
    status: 'Published',
    link: 'https://ieeexplore.ieee.org/abstract/document/11523802',
    linkLabel: 'IEEE Publication',
    desc: 'Dual-stage diagnostics model segmenting the optic disc/cup and measuring CDR ratios. Published in IEEE CIPHER 2026.',
    tech: ['Medical AI', 'Deep Learning', 'Image Segmentation', 'Computer Vision', 'U-Net', 'Python'],
    overview: 'This clinical AI framework introduces a dual-stage deep learning model for early glaucoma detection. It automates optic disc and optic cup segmentation to calculate the Cup-to-Disc Ratio (CDR), which is a key clinical metric for glaucoma diagnosis. The system provides automated, reliable diagnostics supporting ophthalmologists.',
    pipeline: [
      'Acquired and standardized clinical retinal fundus images.',
      'Constructed a dual-stage segmentation model (U-Net based) to separate optic disc and cup.',
      'Programmed post-processing scripts calculating vertical Cup-to-Disc Ratios (CDR).',
      'Conducted clinical benchmark validations and presented the results at IEEE CIPHER 2026.'
    ],
    features: [
      'Dual-Stage Deep Learning Segmentation framework',
      'High-precision optic disc and cup boundary mapping',
      'Automated vertical Cup-to-Disc Ratio (CDR) calculations',
      'Validated against standard clinical fundus image datasets'
    ],
  },
};

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Fallback if loading or dynamic route hasn't resolved
  if (!id) return <div className="text-center py-24 text-gray-500">Loading case study...</div>;

  const data = projectCaseStudies[id];

  // Generic fallback if page isn't in detailed data
  if (!data) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6 bg-black text-gray-300">
        <h1 className="text-3xl font-bold text-white">Project Showcase: {id}</h1>
        <p className="text-gray-400">
          This project details are undergoing archive preparation. You can view all our agency works by clicking below.
        </p>
        <Link href="/projects" className="inline-flex items-center gap-2 text-white hover:underline">
          <ArrowLeft size={16} /> Back to Projects Directory
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{data.title} | Kryvvia Case Study</title>
        <meta name="description" content={data.desc} />
      </Head>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-12 bg-black text-gray-200">
        {/* Back Link */}
        <Link href="/projects" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition">
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Hero Title */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              {data.category}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full">
              {data.status}
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {data.title}
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-3xl">
            {data.desc}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-b border-white/5 text-sm">
          <div>
            <span className="text-gray-500 block uppercase tracking-wider text-xs">Architect</span>
            <span className="text-white font-bold block mt-1">{data.owner}</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase tracking-wider text-xs">Client</span>
            <span className="text-white font-bold block mt-1">{data.client}</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase tracking-wider text-xs">Duration</span>
            <span className="text-white font-bold block mt-1">{data.duration}</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase tracking-wider text-xs">Resource</span>
            <a href={data.link} target="_blank" rel="noreferrer" className="text-white font-bold mt-1 flex items-center gap-1 hover:underline">
              {data.linkLabel || 'Live Link'} <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Case Study Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main story */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <h2 className="text-white text-2xl font-bold tracking-tight">Project Overview</h2>
              <p className="text-gray-400 text-base font-light leading-relaxed">
                {data.overview}
              </p>
            </div>

            {/* Architecture Pipeline */}
            <div className="space-y-4">
              <h2 className="text-white text-2xl font-bold tracking-tight">System Architecture &amp; Lifecycle</h2>
              <div className="space-y-4 relative pl-4 border-l border-white/10 ml-2">
                {data.pipeline.map((step, index) => (
                  <div key={index} className="relative space-y-1">
                    <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-white" />
                    <p className="text-sm text-gray-300 font-light leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Specs */}
          <div className="lg:col-span-4 space-y-6">
            {/* Features */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider">Key Features</h3>
              <ul className="space-y-2">
                {data.features.map((feat, i) => (
                  <li key={i} className="flex gap-2 text-xs text-gray-300 font-light items-start">
                    <Check size={14} className="text-white shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack box */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-4">
              <h3 className="text-white text-sm font-semibold uppercase tracking-wider font-mono">Tech Stack Used</h3>
              <div className="flex flex-wrap gap-1.5">
                {data.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-gray-300 bg-black/40 border border-white/5 px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
