import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-neutral-900 last:border-0 py-4">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
      >
        <span className="text-white text-base sm:text-lg font-medium group-hover:text-gray-300 transition-colors duration-250">
          {item.question}
        </span>
        <span className="p-2 rounded-lg bg-neutral-950 border border-neutral-900 text-white shrink-0 group-hover:border-neutral-800 transition-colors">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light pb-6">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What services does Kryvvia offer?',
      answer: 'Kryvvia specializes in Web Development (Next.js, React, Node.js, Spring Boot), Mobile App Development (iOS & Android via React Native), UI/UX Design & Prototyping (Figma & Framer), and Search Engine Optimization (SEO).',
    },
    {
      question: 'Who are the founders of Kryvvia?',
      answer: 'Kryvvia was co-founded by Sandeep Naik, Nikshitha Vadthyavath, and Samadhan Ghorpade, who collaborate directly as core software engineers, AI researchers, and DevOps architects.',
    },
    {
      question: "What is Kryvvia's relationship with Gozy Private Limited?",
      answer: 'Gozy Private Limited is a separate past company and project. Our co-founders gained critical production-grade experience there, building web applications, admin dashboards, media processing engines, and payment infrastructures before co-founding Kryvvia.',
    },
    {
      question: 'How do you ensure project quality and security?',
      answer: 'We write production-grade code, enforce rigorous testing schedules, and configure secure hosting. We leverage tools like JWT + OAuth2 + 2FA security setups, VPC private subnets, Docker containers, and automated Github Actions CI/CD pipelines.',
    },
    {
      question: 'How can we start working with Kryvvia?',
      answer: 'You can get in touch through our contact page or by emailing kryvvia@gmail.com. We typically respond within 12 hours to schedule a discovery call and discuss your product roadmap.',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-8 pb-10 px-6 relative z-10 bg-black">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase"
          >
            Faq
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            Frequently Asked <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Questions.</span>
          </motion.h3>
        </div>

        {/* Accordion Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-950/40 border border-neutral-900 rounded-3xl p-6 sm:p-8 backdrop-blur-md"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
