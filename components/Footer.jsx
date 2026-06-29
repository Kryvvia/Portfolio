import { Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import { memo } from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer
      className="bg-black text-gray-400 py-16 border-t border-neutral-800 relative overflow-hidden"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-light tracking-wider text-white">
                KRYVVIA<span className="font-semibold text-gray-400">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              Where an idea turns into a project. Helping startups, businesses, and ideas grow and solve problems through the power of clean code and expert engineering.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <Github size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase font-mono">Our Services</h3>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <Link href="/services" className="hover:text-white transition">Web Development</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">Mobile App Development</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">UI/UX Strategy & Design</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">Search Engine Optimization (SEO)</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase font-mono">Agency</h3>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <Link href="/about" className="hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">Featured Projects</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition">Developer Team</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">News & Blogs</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold mb-4 text-xs tracking-wider uppercase font-mono">Get in Touch</h3>
            <p className="flex items-start gap-2.5 text-sm text-gray-400 leading-relaxed font-light">
              <MapPin size={18} className="text-gray-400 mt-0.5 shrink-0" />
              <span>Hyderabad, Telangana, India</span>
            </p>
            <p className="flex items-center gap-2.5 text-sm text-gray-400">
              <Mail size={16} className="shrink-0" />
              <a href="mailto:kryvvia@gmail.com" className="hover:text-white transition">kryvvia@gmail.com</a>
            </p>
            <p className="flex items-center gap-2.5 text-sm text-gray-400">
              <Phone size={16} className="shrink-0" />
              <a href="tel:+91 9067442486" className="hover:text-white transition">+91 90674 42486</a>
            </p>
            <p className="flex items-center gap-2.5 text-sm text-gray-400">
              <Phone size={16} className="shrink-0" />
              <a href="tel:+91 2996527686" className="hover:text-white transition">+91 29965 27686</a>
            </p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-b border-neutral-800 py-8 my-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1">
            <h4 className="text-white font-medium text-base">Let&apos;s be friends and get interesting news about us</h4>
            <p className="text-xs text-gray-500 font-light">We send high-quality tech guides and startup product tips once a month.</p>
          </div>
          <form className="flex w-full md:w-auto max-w-md bg-neutral-900 border border-neutral-800 rounded-full p-1 overflow-hidden" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Write Email"
              className="bg-transparent text-sm text-white px-4 py-2 w-full focus:outline-none placeholder-gray-600"
              required
            />
            <button
              type="submit"
              className="bg-white hover:bg-neutral-200 text-black text-xs font-mono uppercase tracking-wider font-bold px-6 py-2 rounded-full transition shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 Kryvvia. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
