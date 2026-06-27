import { ArrowUpRight, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { blogsData } from '../data/blogs';

export default function BlogSection() {
  // Display the first 3 latest blogs on the home page
  const blogs = blogsData.slice(0, 3);

  return (
    <section id="blog" className="pt-8 pb-10 px-6 bg-black relative z-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3">
            <h2 className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase">Insights &amp; Updates</h2>
            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Every Single Update <span className="text-gradient">News &amp; Blogs.</span>
            </h3>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 bg-white/5 border border-white/10 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/10 hover:border-white/20 transition-all shrink-0"
          >
            Read All Articles <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="glass-card rounded-3xl overflow-hidden border border-white/5 flex flex-col justify-between p-6 transition-all hover:border-white/10 hover:bg-neutral-900/40 group"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex justify-between items-center text-xs text-gray-500 font-mono">
                  <span className="text-white uppercase tracking-wider font-semibold">
                    {blog.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {blog.date}
                  </span>
                </div>

                <h3 className="text-white text-xl font-bold tracking-tight leading-snug group-hover:text-gray-300 transition-colors line-clamp-2">
                  <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                </h3>

                <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-3">
                  {blog.desc}
                </p>
              </div>

              {/* Author & CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-6">
                <span className="flex items-center gap-1.5 text-xs text-gray-400 font-light">
                  <User size={12} className="text-gray-500" /> By {blog.author}
                </span>

                <Link
                  href={`/blog/${blog.id}`}
                  className="text-xs font-bold text-white flex items-center gap-1 group-hover:text-gray-300 transition-colors"
                >
                  Read Post <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
