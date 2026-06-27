import Head from 'next/head';
import Link from 'next/link';
import { Calendar, User, ArrowUpRight, Search, Clock } from 'lucide-react';
import { useState } from 'react';
import { blogsData } from '../data/blogs';

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Extract unique categories from blogsData
  const categories = ['All', ...new Set(blogsData.map((b) => b.category))];

  const filteredBlogs = blogsData.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || b.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Insights &amp; Blogs | Kryvvia</title>
        <meta
          name="description"
          content="Read latest updates, tech stories, and engineering learnings from the Kryvvia software development team."
        />
      </Head>

      <div className="max-w-6xl mx-auto px-6 pt-4 pb-24 space-y-10 bg-black text-gray-200">
        
        {/* Intro Section - Compact Vercel Style */}
        <div className="space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-white bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full font-mono">
            Insights &amp; Blogs
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Engineering Logs <br />
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">&amp; Product Strategy.</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
            Highly technical articles, deep-dives into backend microservices, real startup building reports, and product design guides written directly by our developers.
          </p>
        </div>

        {/* Filter & Search Bar - Consolidated for Tight Spacing */}
        <div className="pt-6 border-t border-neutral-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border font-mono transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-white text-black border-white'
                    : 'bg-neutral-950 text-gray-400 border-neutral-900 hover:text-white hover:border-neutral-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-900 rounded-full pl-10 pr-4 py-2 text-xs text-white focus:outline-none focus:border-neutral-700 transition-colors placeholder-gray-600"
            />
            <Search className="w-3.5 h-3.5 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Grid - Tight spacing aspect */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="bg-neutral-950/40 rounded-3xl p-6 border border-neutral-900 flex flex-col justify-between hover:border-neutral-800 hover:bg-neutral-900/20 group transition-all duration-300 relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Category & Date */}
                  <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono">
                    <span className="text-white uppercase tracking-wider font-semibold">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={11} /> {blog.date}
                    </span>
                  </div>

                  {/* Image Preview */}
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-neutral-900 bg-neutral-950">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={blog.suggestedCoverImage}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-base sm:text-lg font-bold tracking-tight leading-snug group-hover:text-gray-300 transition-colors line-clamp-2">
                    <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                  </h3>

                  {/* Short Excerpt */}
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                    {blog.desc}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-900 mt-6">
                  <span className="text-[10px] text-gray-400 font-light flex items-center gap-1">
                    <User size={11} className="text-gray-500" /> {blog.author}
                  </span>
                  <Link
                    href={`/blog/${blog.id}`}
                    className="text-[11px] font-bold text-white group-hover:text-gray-300 transition-colors flex items-center gap-1 uppercase tracking-wider font-mono"
                  >
                    Read <ArrowUpRight size={11} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 font-mono text-xs border border-dashed border-neutral-900 rounded-3xl bg-neutral-950/20">
            No articles found matching search query.
          </div>
        )}
      </div>
    </>
  );
}
