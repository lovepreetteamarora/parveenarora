'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Star, LogIn } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Why Sell With Parveen?', href: '#about' },
    { name: 'Featured Regions', href: '#neighborhoods' },
    { name: 'Media', href: '#media' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-b from-white/95 to-transparent'
      }`}
    >
      <div className={`flex justify-between items-stretch max-w-[1600px] mx-auto ${isScrolled ? 'h-20': 'h-24'} transition-all duration-300`}>
        {/* Logo container */}
        <div className="flex items-center px-4 sm:px-8">
          <Link href="#" className="flex items-center">
            <div className="relative w-40 h-10 md:w-56 md:h-14 transition-all duration-300">
              <Image 
                  src={'/blacklogo.png'} 
                  alt="Team Arora Logo" 
                  fill 
                  sizes="(max-width: 768px) 160px, 224px"
                  className="object-contain object-left"
                  priority
              />
            </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs xl:text-sm font-bold uppercase tracking-wide hover:text-[#E01A2C] transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-slate-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-6 px-6">
          <Link href="#login" className={`text-xs font-bold uppercase tracking-widest hover:text-[#E01A2C] transition-colors flex items-center gap-2 ${isScrolled ? 'text-slate-600' : 'text-slate-800'}`}>
            <LogIn size={14} /> Login
          </Link>
          <Link href="#evaluation" className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all shadow-sm ${isScrolled ? 'bg-[#000000] text-white hover:bg-[#111111]' : 'bg-[#E01A2C] text-white hover:bg-[#BE1625]'}`}>
            <Star size={14} /> VIP Access
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden px-4 flex items-center ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-wide text-slate-800 py-3 border-b border-gray-100"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-4 mt-4">
                <Link
                  href="#evaluation"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 px-5 py-4 w-full bg-[#000000] text-white text-center text-xs font-bold uppercase rounded-full flex items-center justify-center gap-2"
                >
                  <Star size={16} /> VIP
                </Link>
                <Link
                  href="#login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-1 px-5 py-4 w-full bg-[#000000] text-white text-center text-xs font-bold uppercase rounded-full flex items-center justify-center gap-2"
                >
                  <LogIn size={16} /> Login
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
