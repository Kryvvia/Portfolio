import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function CountUpNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  const target = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const duration = 1800; // 1.8 seconds duration

    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing out quad
      const easedProgress = progress * (2 - progress);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    }

    window.requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function SkillMeter({ skill }) {
  const barRef = useRef(null);
  const isBarInView = useInView(barRef, { once: true, margin: "-50px" });

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <span className="text-gray-300">{skill.name}</span>
        <span className="text-white">{skill.level}%</span>
      </div>
      <div ref={barRef} className="w-full bg-neutral-900 border border-white/5 h-3.5 rounded-full overflow-hidden p-0.5">
        <motion.div
          className={`${skill.colorClass} h-full rounded-full`}
          initial={{ width: "0%" }}
          animate={isBarInView ? { width: `${skill.level}%` } : { width: "0%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          role="progressbar"
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

export default function SkillsExperience() {
  const skills = [
    { name: 'Web Development', level: 90, colorClass: 'bg-white' },
    { name: 'Mobile App Development', level: 85, colorClass: 'bg-neutral-300' },
    { name: 'UI/UX Design', level: 80, colorClass: 'bg-neutral-400' },
    { name: 'Search Engine Optimization (SEO)', level: 75, colorClass: 'bg-neutral-500' },
  ];

  const stats = [
    { value: '50+', label: 'Projects Completed' },
    { value: '50+', label: 'Satisfied Clients' },
    { value: '5+', label: 'Awards & Honours' },
    { value: '3', label: 'Core Engineers' },
  ];

  return (
    <section className="pt-8 pb-10 px-6 relative z-10 bg-black">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase"
          >
            Our Capabilities
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            Creative &amp; Professional <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Skills Experience.</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base font-light leading-relaxed"
          >
            We are a remote developer agency based in India, working with clients around the world. As passionate designers, researchers, and developers, we love building software that solves problems.
          </motion.p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Skill Bars Column */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h4 className="text-white text-xl font-bold tracking-tight mb-4 font-mono">Technical Competency Meters</h4>
            {skills.map((skill) => (
              <SkillMeter key={skill.name} skill={skill} />
            ))}
          </motion.div>

          {/* Stats Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl flex flex-col justify-center items-center text-center space-y-2 hover:border-neutral-800 transition-colors duration-300"
              >
                <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white font-mono">
                  <CountUpNumber value={stat.value} />
                </span>
                <span className="text-gray-400 text-xs sm:text-sm font-light">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
