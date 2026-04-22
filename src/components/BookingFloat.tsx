import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, MessageCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BookingFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when user scrolls past 500px
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-40 h-24 bg-[#141412] border-t border-white/5 flex items-center px-12 gap-10"
        >
          <div className="flex-1 flex gap-12 text-[#e5e1da]">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Check-In</span>
              <span className="text-sm font-medium">Select Dates</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10 self-center hidden md:block"></div>
            <div className="flex flex-col hidden md:flex">
              <span className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Guests</span>
              <span className="text-sm font-medium">2 Adults</span>
            </div>
            <div className="w-[1px] h-8 bg-white/10 self-center hidden md:block"></div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Rate From</span>
              <span className="text-sm font-medium text-[#c5a67c]">€1,250 / Night</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="text-right hidden lg:block">
              <div className="text-[10px] uppercase tracking-widest text-red-400 font-bold mb-1">● Only 2 weeks left for July</div>
              <div className="text-[10px] opacity-40 uppercase tracking-widest text-[#e5e1da]">Best Price Guaranteed</div>
            </div>
            <Link
              to="/booking"
              className="px-10 py-5 bg-[#c5a67c] text-black text-[12px] font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-[#d9bc96] transition-all whitespace-nowrap"
            >
              Confirm Stay
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
