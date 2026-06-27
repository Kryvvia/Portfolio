import { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 
                   bg-black/80 backdrop-blur-md px-6 md:px-8 py-3.5 
                   rounded-full border border-neutral-800 shadow-xl flex items-center justify-between gap-6 
                   w-[94%] max-w-6xl transition-all duration-300"
      >
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 group" aria-label="Nikshitha Home">
          <Sparkles className="w-5 h-5 text-indigo-500 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xl md:text-2xl font-light tracking-wider leading-none text-white">
            Nikshitha<span className="font-semibold text-indigo-500 group-hover:text-white transition-colors">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5" aria-label="Primary navigation">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-semibold tracking-wider uppercase transition duration-200 hover:text-white px-1.5 py-1 rounded text-gray-400"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <Link
          href="#contact"
          className="hidden lg:flex items-center gap-1 bg-white text-black font-mono uppercase tracking-wider text-[11px] font-bold 
                     px-4 py-2 rounded-full hover:bg-neutral-200 transition"
        >
          Let's Connect <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleMenuToggle}
          className="lg:hidden p-1.5 focus:outline-none text-white hover:text-gray-400 transition"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <aside
            className="fixed top-0 right-0 h-full w-72 bg-black border-l border-neutral-800 z-50 p-6 
                       flex flex-col gap-6 shadow-2xl animate-slideDown"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <span className="text-xl font-light tracking-wider text-white">
                  Nikshitha<span className="font-semibold text-indigo-500">.</span>
                </span>
              </div>
              <button
                onClick={closeMenu}
                className="text-gray-400 hover:text-white transition"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-lg" aria-label="Mobile navigation">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="py-2 px-3 rounded-lg transition-colors text-gray-400 hover:bg-neutral-900 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Link
              href="#contact"
              onClick={closeMenu}
              className="mt-auto w-full text-center bg-white text-black font-mono uppercase tracking-wider text-xs 
                         px-6 py-3 rounded-xl font-medium shadow-lg transition hover:bg-neutral-200 flex items-center justify-center gap-1.5"
            >
              Let's Connect <ArrowUpRight className="w-4 h-4" />
            </Link>
          </aside>
        </>
      )}
    </>
  );
}
