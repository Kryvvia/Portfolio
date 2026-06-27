import Head from 'next/head';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Kryvvia</title>
        <meta
          name="description"
          content="Get in touch with Kryvvia to build your web, app, UI/UX, or AI project."
        />
      </Head>

      <ContactSection isStandalone={true} />
    </>
  );
}
