import Head from 'next/head';

export default function SEO({ title, description, path = '' }) {
  const defaultTitle = 'Kryvvia – Premium AI & Software Development Agency';
  const defaultDesc = 'Kryvvia is a premium digital agency specializing in Web Development, Mobile App Development, UI/UX Design, and Search Engine Optimization (SEO). Founded by Sandeep Naik, Nikshitha Vadthyavath, and Samadhan Ghorpade.';
  const pageTitle = title ? `${title} | Kryvvia` : defaultTitle;
  const pageDesc = description || defaultDesc;
  const url = `https://kryvvia.com${path}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content="/og-image.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content="/og-image.jpg" />
    </Head>
  );
}
