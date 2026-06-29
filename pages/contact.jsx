import Head from 'next/head';
import SEO from '../components/SEO';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Kryvvia | Hire Us For Your Next Project"
        description="Get in touch with the Kryvvia engineering team. We're ready to build scalable, AI-integrated digital products for your business."
        path="/contact"
      />

      <ContactSection isStandalone={true} />
    </>
  );
}
