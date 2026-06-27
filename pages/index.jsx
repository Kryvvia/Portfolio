import Head from "next/head";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsExperience from "../components/SkillsExperience";
import TeamSection from "../components/TeamSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kryvvia – Premium AI &amp; Software Development Agency</title>
        <meta
          name="description"
          content="Kryvvia is a premium digital agency specializing in Web Development, Mobile App Development, UI/UX Design, and Search Engine Optimization (SEO). Founded by Sandeep Naik, Nikshitha Vadthyavath, and Samadhan Ghorpade."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* About Us section */}
      <AboutSection />

      {/* Featured Projects Showcase */}
      <ProjectsSection />

      {/* Technical Skill Metrics & Achievements */}
      <SkillsExperience />

      {/* Team Co-founders */}
      <TeamSection />

      {/* Verified Client Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Blogs & Insights preview */}
      <BlogSection />

      {/* Say Hello Contact section */}
      <ContactSection />
    </>
  );
}
