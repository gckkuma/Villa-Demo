import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811", category: "Exterior", title: "Sunset Facade" },
  { url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", category: "Interior", title: "Grand Atrium" },
  { url: "https://images.unsplash.com/photo-1600585154340-be6199f7d009", category: "Kitchen", title: "Culinary Suite" },
  { url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", category: "Bedroom", title: "Master Observatory" },
  { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0", category: "Interior", title: "Lounge Area" },
  { url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7", category: "Exterior", title: "Infinity Horizon" },
  { url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b", category: "Bedroom", title: "Guest Suite A" },
  { url: "https://images.unsplash.com/photo-1540518614846-7eded433c457", category: "Night", title: "Starlight Pool" },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Exterior', 'Interior', 'Bedroom', 'Kitchen'];
  const filteredImages = filter === 'All' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <div className="pt-40 pb-24 px-12 bg-[#0c0c0b] text-[#e5e1da] min-h-screen border-x-[12px] md:border-x-[24px] border-[#1a1a18]">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#c5a67c]"></span>
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a67c]">Visual Residency</span>
            <span className="h-[1px] w-8 bg-[#c5a67c]"></span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl tracking-tighter mb-12 italic">The Gallery</h1>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase font-bold tracking-[0.4em] transition-all pb-4 border-b ${
                  filter === cat ? 'border-[#c5a67c] text-[#c5a67c]' : 'border-transparent text-white/30 hover:text-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredImages.map((img, i) => (
              <motion.div
                layout
                key={img.url}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative group cursor-pointer aspect-[4/5] overflow-hidden bg-[#1a1a18] border border-white/5 p-3"
                onClick={() => setSelectedImg(img.url)}
              >
                <div className="w-full h-full overflow-hidden relative">
                  <img 
                    src={`${img.url}?auto=format&fit=crop&q=80&w=1200`} 
                    alt={img.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center p-6">
                      <p className="text-[#c5a67c] text-[9px] uppercase tracking-[0.3em] mb-2 font-bold">{img.category}</p>
                      <h3 className="text-[#e5e1da] font-serif text-2xl italic tracking-tight">{img.title}</h3>
                      <div className="mt-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mx-auto group-hover:border-[#c5a67c] transition-colors">
                        <Maximize2 size={16} className="text-[#c5a67c]" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={`${selectedImg}?auto=format&fit=crop&q=90&w=2000`} 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
