import Head from "next/head";
import SEO from "../components/SEO";
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
      <SEO />

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
