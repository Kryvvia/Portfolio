import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ArrowLeft, Calendar, User, Clock, ArrowRight, Share2, Twitter, Linkedin, Check, ChevronDown } from 'lucide-react';
import { blogsData } from '../../data/blogs';

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState({});

  if (!id) return <div className="text-center py-24 text-gray-500 font-mono bg-black min-h-screen">Loading article...</div>;

  const article = blogsData.find((b) => b.id === id);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6 bg-black text-gray-300 min-h-screen">
        <h1 className="text-3xl font-bold text-white">Article not found</h1>
        <Link href="/blog" className="text-white hover:underline flex items-center justify-center gap-1.5 font-mono">
          <ArrowLeft size={16} /> Return to Blog Directory
        </Link>
      </div>
    );
  }

  // Get related articles (excluding the current one)
  const relatedArticles = blogsData
    .filter((b) => b.id !== article.id)
    .slice(0, 3);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const copyToClipboard = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <>
      <Head>
        <title>{article.title} | Kryvvia Insights</title>
        <meta name="description" content={article.metaDesc} />
        <meta name="keywords" content={article.keywords.join(', ')} />
        <meta property="og:title" content={article.ogTitle} />
        <meta property="og:description" content={article.ogDesc} />
        <meta property="og:image" content={article.suggestedCoverImage} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="bg-black text-gray-200 min-h-screen">
        {/* Progress bar or simple top spacing */}
        <div className="max-w-6xl mx-auto px-6 pt-4 pb-16">
          {/* Back button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 text-sm font-mono">
            <ArrowLeft size={14} /> Back to Insights
          </Link>

          {/* Grid Layout - 12 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left/Main Column - Content (8 cols) */}
            <main className="lg:col-span-8 space-y-6">

              {/* Header Info */}
              <div className="space-y-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded-full font-mono">
                  {article.category}
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-mono border-y border-white/5 py-3">
                  <span className="flex items-center gap-1.5 text-gray-400">
                    <User size={13} className="text-gray-500" /> {article.author}
                  </span>
                  <span className="w-1 h-1 bg-neutral-800 rounded-full"></span>
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} /> {article.date}
                  </span>
                  <span className="w-1 h-1 bg-neutral-800 rounded-full"></span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} /> {article.readTime}
                  </span>
                </div>
              </div>

              {/* Cover Image */}
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-white/5 bg-neutral-900 shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.suggestedCoverImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Short Description */}
              <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed italic border-l-2 border-white/20 pl-4 py-1">
                {article.desc}
              </p>

              {/* Rich Blocks Injected Content */}
              <div className="space-y-5 text-gray-300 font-light leading-relaxed text-sm sm:text-base">
                {article.content.map((block, idx) => {
                  switch (block.type) {
                    case 'paragraph':
                      return (
                        <p key={idx} className="mb-4">
                          {block.text}
                        </p>
                      );
                    case 'heading':
                      const HeadingTag = block.level === 3 ? 'h3' : 'h2';
                      const headingClass = block.level === 3
                        ? 'text-lg sm:text-xl font-bold text-white tracking-tight pt-3'
                        : 'text-xl sm:text-2xl font-bold text-white tracking-tight pt-5';
                      return (
                        <HeadingTag key={idx} id={block.id} className={headingClass}>
                          {block.text}
                        </HeadingTag>
                      );
                    case 'list':
                      return (
                        <ul key={idx} className="list-disc pl-5 space-y-2 mb-4 text-gray-400 font-light text-xs sm:text-sm">
                          {block.items.map((item, lidx) => (
                            <li key={lidx}>{item}</li>
                          ))}
                        </ul>
                      );
                    case 'callout':
                      return (
                        <div key={idx} className="border-l-2 border-white/30 bg-neutral-950/80 p-4 rounded-r-xl my-4 space-y-1">
                          {block.title && <h5 className="text-white text-xs sm:text-sm font-semibold font-mono">{block.title}</h5>}
                          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{block.text}</p>
                        </div>
                      );
                    case 'code':
                      return (
                        <div key={idx} className="bg-neutral-950 border border-white/5 rounded-xl overflow-hidden my-4 font-mono text-xs sm:text-sm">
                          <div className="bg-neutral-900 px-4 py-2 border-b border-white/5 flex justify-between items-center">
                            <span className="text-gray-500 font-semibold">{block.language}</span>
                            <span className="text-gray-500 text-[10px]">read-only</span>
                          </div>
                          <pre className="p-4 overflow-x-auto text-gray-300 leading-relaxed font-mono">
                            <code>{block.code}</code>
                          </pre>
                        </div>
                      );
                    case 'pullquote':
                      return (
                        <div key={idx} className="border-y border-white/5 py-6 my-6 text-center">
                          <span className="text-4xl text-gray-600 block leading-none font-serif">&ldquo;</span>
                          <p className="text-white text-base sm:text-lg italic font-light max-w-xl mx-auto leading-relaxed">
                            {block.text}
                          </p>
                          {block.author && (
                            <cite className="text-xs text-gray-500 font-mono uppercase tracking-wider block mt-3 not-italic">
                              — {block.author}
                            </cite>
                          )}
                        </div>
                      );
                    case 'diagram':
                      return (
                        <div key={idx} className="bg-neutral-950 border border-white/5 rounded-xl p-4 my-4 space-y-3">
                          {block.caption && (
                            <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider block">
                              Diagram: {block.caption}
                            </span>
                          )}
                          <div className="font-mono text-xs text-gray-400 leading-relaxed bg-neutral-900/50 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap border border-white/5">
                            {block.text}
                          </div>
                        </div>
                      );
                    case 'image':
                      return (
                        <div key={idx} className="my-6 space-y-2">
                          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-white/5 bg-neutral-950">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={block.url}
                              alt={block.caption || 'Article Image'}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {block.caption && (
                            <span className="text-[10px] text-gray-500 font-mono block text-center uppercase tracking-wider">
                              {block.caption}
                            </span>
                          )}
                        </div>
                      );
                    default:
                      return null;
                  }
                })}
              </div>

              {/* FAQ Section */}
              {article.faqs && article.faqs.length > 0 && (
                <section className="border-t border-white/5 pt-8 mt-8 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-mono">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {article.faqs.map((faq, fidx) => (
                      <div key={fidx} className="border border-white/5 rounded-xl overflow-hidden bg-neutral-950/40">
                        <button
                          onClick={() => toggleFaq(fidx)}
                          className="w-full px-5 py-4 text-left flex justify-between items-center text-white hover:bg-neutral-900/20 transition-colors"
                        >
                          <span className="font-semibold text-xs sm:text-sm">{faq.q}</span>
                          <ChevronDown size={16} className={`text-gray-500 transition-transform ${openFaq[fidx] ? 'rotate-180' : ''}`} />
                        </button>
                        {openFaq[fidx] && (
                          <div className="px-5 pb-4 text-xs sm:text-sm text-gray-400 font-light leading-relaxed border-t border-white/5 pt-3">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Suggested Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-[10px] text-gray-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full font-mono">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Bio Section */}
              <div className="bg-neutral-950 border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.authorAvatar}
                  alt={article.author}
                  className="w-16 h-16 rounded-full object-cover border border-white/10 shrink-0 bg-neutral-900"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <h4 className="text-white font-bold text-sm sm:text-base leading-none">{article.author}</h4>
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">{article.authorRole}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {article.authorBio}
                  </p>
                </div>
              </div>

              {/* Mandatory Footer CTA */}
              <div className="border-t border-white/5 pt-8 mt-12 space-y-4">
                <div className="bg-gradient-to-b from-neutral-950 to-neutral-900 border border-white/5 p-6 sm:p-8 rounded-3xl text-center space-y-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/[0.01] pointer-events-none" />
                  <h4 className="text-lg sm:text-xl font-bold text-white">Need help building your next product?</h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-xl mx-auto">
                    Our team at Kryvvia specializes in Web Development, Mobile App Development, UI/UX Design, and Search Engine Optimization (SEO).
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-white text-black text-xs font-semibold px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors shadow-md font-mono uppercase tracking-wider"
                    >
                      Let&apos;s build something amazing together <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </main>

            {/* Right Column - Sticky Sidebar (4 cols) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">

              {/* Table of Contents */}
              <div className="bg-neutral-950 border border-white/5 rounded-2xl p-5 space-y-4">
                <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider border-b border-white/5 pb-2">
                  Table of Contents
                </h4>
                <nav className="space-y-2">
                  {article.toc.map((item, idx) => (
                    <a
                      key={idx}
                      href={`#${item.id}`}
                      className="block text-xs text-gray-400 hover:text-white transition-colors py-0.5 leading-relaxed truncate"
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Share & Actions */}
              <div className="bg-neutral-950 border border-white/5 rounded-2xl p-5 space-y-4">
                <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider border-b border-white/5 pb-2">
                  Share Article
                </h4>
                <div className="flex gap-2">
                  <button
                    onClick={copyToClipboard}
                    className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition rounded-xl py-2.5 flex items-center justify-center gap-1.5 text-xs text-white"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-green-500" /> Copied
                      </>
                    ) : (
                      <>
                        <Share2 size={14} /> Copy Link
                      </>
                    )}
                  </button>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition rounded-xl flex items-center justify-center text-white"
                  >
                    <Twitter size={14} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition rounded-xl flex items-center justify-center text-white"
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>

              {/* Premium Newsletter CTA */}
              <div className="bg-neutral-950 border border-white/5 rounded-2xl p-5 space-y-4">
                <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider border-b border-white/5 pb-2">
                  Newsletter
                </h4>
                <p className="text-gray-400 text-xs font-light leading-relaxed">
                  Join our engineering mailing list. We send tech deep-dives and development strategy articles. No spam.
                </p>
                {subscribed ? (
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center text-xs text-gray-300 font-mono">
                    Subscribed successfully!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-2">
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-neutral-900 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-black rounded-xl py-2.5 text-xs font-bold hover:bg-neutral-200 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </aside>
          </div>

          {/* Related Articles Section */}
          <div className="border-t border-white/5 pt-16 mt-16 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 font-mono">
                Read Next
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Related Articles
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link key={rel.id} href={`/blog/${rel.id}`} className="group block space-y-3">
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/5 bg-neutral-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={rel.suggestedCoverImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] text-gray-500 uppercase tracking-wider font-mono">
                      {rel.category}
                    </span>
                    <h4 className="text-white text-sm sm:text-base font-bold tracking-tight leading-snug group-hover:text-gray-300 transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
