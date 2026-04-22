import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'The Villa', path: '/villa' },
  { name: 'Amenities', path: '/amenities' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Location', path: '/location' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-12 py-8',
        scrolled ? 'bg-[#0c0c0b]/90 backdrop-blur-md shadow-sm py-5' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className={cn(
            "font-serif italic text-2xl tracking-[0.2em] transition-colors",
            scrolled ? "text-[#c5a67c]" : "text-[#c5a67c]"
          )}>
            VILLA NOIR
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[11px] uppercase tracking-[0.15em] font-medium transition-all hover:text-[#c5a67c]",
                location.pathname === link.path ? "text-[#c5a67c]" : "text-[#e5e1da] opacity-80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-6 ml-4">
            <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center opacity-60 cursor-pointer hover:opacity-100 transition-opacity">
              <span className="text-xs text-[#e5e1da]">EN</span>
            </div>
            <Link
              to="/booking"
              className="px-6 py-3 bg-[#c5a67c] text-black text-[11px] font-bold uppercase tracking-widest hover:bg-[#d9bc96] transition-all"
            >
              Book Experience
            </Link>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-[#e5e1da]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#0c0c0b] z-40 flex flex-col pt-24 px-12 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif italic tracking-tight text-[#e5e1da] border-b border-white/10 pb-4"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-[#c5a67c] text-black text-center py-5 text-[11px] font-bold uppercase tracking-widest"
              >
                Book Experience
              </Link>
            </div>
            <div className="mt-auto mb-12 flex items-center gap-6">
              <Instagram size={20} className="text-neutral-400" />
              <Facebook size={20} className="text-neutral-400" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
