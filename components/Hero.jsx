'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

/**
 * Hero component - landing page header + hero + featured projects
 *
 * Accessibility: 
 * - Semantic tags for header, nav, section
 * - ARIA roles for menus
 * - Keyboard navigable
 *
 * Performance:
 * - Image optimization via next/image
 * - useCallback for handlers to prevent unnecessary re-renders
 * - Responsive layout with Tailwind breakpoints
 */
export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);


  const closeMenuAndOpenForm = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen w-full">
      {/* ===== HEADER ===== */}
      <header
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 
                   bg-white/10 backdrop-blur-md text-white px-6 md:px-8 py-3 
                   rounded-full shadow-lg flex items-center justify-between gap-6 
                   w-[90%] max-w-6xl"
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-2 font-semibold text-lg"
        >
          <h2 className="text-md md:text-2xl font-light tracking-tight leading-tight">
            Profile<span className="font-semibold text-white">X</span>
          </h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-lg text-gray-400" aria-label="Primary navigation">
          {['Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#`}
              className="hover:text-white transition"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={handleMenuToggle}
          className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
        >
          <Menu className="w-6 h-6 text-white" aria-hidden="true" />
        </button>

        {/* CTA Desktop */}
        <Link
          href="#"
          className="hidden md:flex items-center gap-2 bg-gradient-to-r from-neutral-800 to-black 
                     px-6 py-3 border border-gray-700 rounded-full font-medium 
                     hover:opacity-90 transition text-sm"
        >
          Get for Free
        </Link>
      </header>

      {/* ===== MOBILE SIDEBAR MENU ===== */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeMenu}
            aria-hidden="true"
          />
          {/* Sidebar */}
          <aside
            className={`fixed top-0 left-0 h-full w-64 bg-black z-50 p-6 
                        transform transition-transform duration-300 ease-in-out 
                        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            role="dialog"
            aria-modal="true"
          >
            <div className='mt-5 flex justify-between'>
              {/* Close Button */}
              <Link
                href="/"
                aria-label="Home"
                className="flex items-center gap-2 font-semibold text-lg"
              >
                <h2 className="text-md md:text-2xl font-light tracking-tight leading-tight">
                  Profile<span className="font-semibold text-white">X</span>
                </h2>
              </Link>
              <button
                onClick={closeMenu}
                className=" text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>

            </div>

            {/* Links */}
            <nav className="flex flex-col gap-6 mt-12" aria-label="Mobile navigation">
              {['Services', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              ))}
              <button
                onClick={closeMenuAndOpenForm}
                className="bg-gradient-to-r from-neutral-800 to-black px-6 py-3 
                           border border-gray-700 rounded-full font-medium 
                           hover:opacity-90 transition text-sm w-fit"
              >
                Get for Free
              </button>
            </nav>
          </aside>
        </>
      )}

      {/* ===== HERO SECTION ===== */}
      <section className="pt-32 md:pt-40 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 
                            rounded-full text-sm text-gray-300 backdrop-blur-md w-fit 
                            border border-white/10"
            >
              <span className="text-xs" aria-hidden="true">●</span>
              UI/UX &amp; Graphic Designer
            </div>

            <h1 className="text-5xl md:text-6xl font-light tracking-tight leading-tight">
              Arjun <span className="font-semibold text-white">Mehra</span>
              <span className="inline-block ml-2 rounded-full bg-white/10 p-2">
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-xl">
              I’m a versatile designer specializing in graphic, web, and product design
              to help grow your business. Let’s build something great!
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#projects"
                className="bg-white text-black px-6 py-3 border border-gray-700 
                           rounded-full font-medium hover:bg-gray-200 transition text-sm"
              >
                See All Projects
              </Link>
              <button
                className="bg-gradient-to-r from-neutral-800 to-black px-6 py-3 
                           border border-gray-700 rounded-full font-medium 
                           hover:opacity-90 transition text-sm"
              >
                Contact Now
              </button>
            </div>
          </div>

          {/* Floating Testimonials */}
          <div className="relative h-[280px] md:h-[300px] lg:h-[320px] w-full">
            <blockquote
              className="absolute top-6 left-0 bg-gradient-to-br from-white/5 to-white/10 
                         border border-white/10 text-base text-white p-5 rounded-xl 
                         shadow-md w-80 rotate-[-4deg] backdrop-blur-md"
            >
              “Working with him was a game changer!”
              <footer className="text-right mt-3 text-sm text-gray-400">– pranavnb</footer>
            </blockquote>

            <blockquote
              className="absolute bottom-6 right-0 bg-gradient-to-br from-white/5 to-white/10 
                         border border-white/10 text-base text-white p-5 rounded-xl 
                         shadow-md w-80 rotate-[4deg] backdrop-blur-md"
            >
              “We increased our conversions by 200%”
              <footer className="text-right mt-3 text-sm text-gray-400">– vijaynb</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="bg-black py-20 px-4">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-4xl font-bold mb-12 text-center md:text-left">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/images/project1.webp', alt: 'Project 1', span: 'sm:col-span-2 lg:col-span-2', aspect: 'aspect-[16/9]' },
              { src: '/images/project2.webp', alt: 'Project 2', aspect: 'aspect-[4/3]' },
              { src: '/images/project3.webp', alt: 'Project 3', span: 'sm:col-span-2', aspect: 'aspect-[16/9]' },
              { src: '/images/project4.webp', alt: 'Project 4', aspect: 'aspect-[4/3]' },
              { src: '/images/project5.webp', alt: 'Project 5', span: 'sm:col-span-2 lg:col-span-3', aspect: 'aspect-[21/9]' }
            ].map(({ src, alt, span = '', aspect }) => (
              <a
                key={src}
                href="/#"
                className={`relative group ${span}`}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={800}
                  height={600}
                  className={`rounded-lg w-full h-full object-cover ${aspect}`}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-white text-lg font-semibold">View Project</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
