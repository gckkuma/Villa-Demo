import { motion } from 'motion/react';
import { ChevronRight, Star, ArrowRight, Shield, Award, Calendar, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: Shield, title: "Private Sanctuary", desc: "Completely secluded with 24/7 concierge service." },
  { icon: Award, title: "Award Winning", desc: "Voted top European luxury villa in 2023." },
  { icon: HomeIcon, title: "Master Craftsmanship", desc: "Designed by renowned architects for ultimate comfort." }
];

export default function Home() {
  return (
    <div className="bg-[#0c0c0b] text-[#e5e1da]">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col md:flex-row px-12 pt-32 pb-12 gap-12 overflow-hidden border-x-[12px] md:border-x-[24px] border-[#1a1a18]">
        {/* Left Content */}
        <div className="w-full md:w-5/12 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#c5a67c]"></span>
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a67c]">Santorini, Greece</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 tracking-tight">
              The Silent <br/>
              <span className="italic">Sanctuary</span>
            </h1>
            <p className="text-lg leading-relaxed text-white/60 mb-10 font-light max-w-sm">
              An ultra-exclusive private estate perched on the volcanic cliffs of Oia. Designed for total privacy, panoramic views, and uncompromising luxury service.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12 border-y border-white/5 py-8">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Capacity</div>
                <div className="text-lg font-serif italic text-[#c5a67c]">8 Guests · 4 Suites</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Signature</div>
                <div className="text-lg font-serif italic text-[#c5a67c]">Infinite Pool & Chef</div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <div className="flex text-[#c5a67c] text-xs mb-1 italic font-serif font-bold">★★★★★</div>
                <div className="text-[10px] uppercase tracking-wider opacity-50">4.9/5 Guest Rating</div>
              </div>
              <div className="h-8 w-[1px] bg-white/10"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-900/20 flex items-center justify-center">
                   <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse shadow-[0_0_8px_#25D366]"></div>
                </div>
                <a href="#" className="text-[10px] uppercase tracking-widest font-semibold hover:text-[#c5a67c] transition-colors">Direct Inquiry</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Visuals */}
        <div className="w-full md:w-7/12 relative flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[60vh] md:h-[520px] bg-[#1a1a18] overflow-hidden group shadow-2xl"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-1000" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1024')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0b] via-transparent to-transparent opacity-60"></div>
            
            {/* Floating Amenity Card */}
            <div className="absolute bottom-8 right-8 bg-[#0c0c0b]/90 backdrop-blur-md p-8 border border-white/10 w-72 shadow-2xl">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#c5a67c] mb-3 font-bold underline underline-offset-8 decoration-[#c5a67c]/30">Featured Experience</div>
              <p className="text-sm italic font-serif leading-relaxed text-white/80">
                "Private sunset dinner on the cliffside terrace, prepared by our Michelin-starred chef."
              </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute left-10 bottom-0 flex flex-col items-center gap-2">
               <div className="text-[9px] uppercase tracking-[0.4em] text-white/40 rotate-180 [writing-mode:vertical-rl]">Explore Estate</div>
               <div className="w-[1px] h-24 bg-gradient-to-b from-[#c5a67c] to-transparent"></div>
            </div>
          </motion.div>
          
          {/* Side Vertical Text */}
          <div className="absolute -right-12 lg:-right-24 top-1/2 -translate-y-1/2 rotate-90 text-[10px] uppercase tracking-[0.6em] text-white/10 whitespace-nowrap font-medium pointer-events-none">
            ESTABLISHED IN MMXIX — SCULPTED PRIVACY
          </div>
        </div>

        {/* Decorative Blur */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#c5a67c]/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 -z-10"></div>
      </section>

      {/* Intro Section */}
      <section className="py-40 px-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="overflow-hidden bg-[#1a1a18] border border-white/5 p-4 aspect-[4/5] rounded-[2rem]">
               <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6199f7d009?auto=format&fit=crop&q=80&w=2670" 
                  className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-1000"
                  alt="Interior"
               />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#141412] p-10 border border-white/10">
               <p className="font-serif italic text-4xl text-[#c5a67c]">850</p>
               <p className="text-[9px] uppercase tracking-widest text-white/40 mt-1">m² Living space</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8 bg-[#c5a67c]"></span>
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a67c]">The Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              A symphony of stone, <br/>
              <span className="italic">light, and sea</span>.
            </h2>
            <p className="text-white/50 leading-relaxed font-light mb-12 max-w-lg">
              Villa Noir is carved directly into the caldera rock, offering a seamless blend of Brutalist architecture and Cycladic tradition. Every sunrise and sunset is framed by our floor-to-ceiling panoramic glass.
            </p>
            <div className="flex flex-col gap-10">
               {features.map((f, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                     <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#c5a67c] group-hover:bg-[#c5a67c] group-hover:text-black transition-all">
                        <f.icon size={20} />
                     </div>
                     <div>
                        <h4 className="text-[11px] uppercase tracking-widest font-bold mb-1 text-[#e5e1da]">{f.title}</h4>
                        <p className="text-white/40 text-xs leading-relaxed max-w-xs">{f.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spaces */}
      <section className="py-40 bg-[#0a0a09]">
        <div className="px-12 mb-20 text-center">
           <span className="text-[#c5a67c] text-[10px] uppercase tracking-[0.5em] mb-4 block">Collection One</span>
           <h2 className="text-5xl font-serif italic mb-4 text-[#e5e1da]">The Curated Suites</h2>
           <div className="w-24 h-[1px] bg-white/10 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c", title: "Helios Master Suite", cat: "Observation Deck" },
            { img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7", title: "Volcanic Infinity Pool", cat: "Caldera Edge" },
            { img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3", title: "Obsidian Private Spa", cat: "Wellness Core" }
          ].map((item, i) => (
            <div key={i} className="relative aspect-[3/4] group overflow-hidden border-r border-white/5">
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-12 left-12 transform group-hover:-translate-y-2 transition-transform duration-500">
                <p className="text-[#c5a67c] text-[9px] uppercase tracking-[0.3em] font-bold mb-2">{item.cat}</p>
                <h3 className="text-2xl font-serif text-[#e5e1da]">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Section */}
      <section className="py-40 bg-[#0c0c0b]">
        <div className="max-w-4xl mx-auto px-12 text-center">
          <div className="flex justify-center gap-1 mb-10">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#c5a67c" color="#c5a67c" />)}
          </div>
          <blockquote className="font-serif text-3xl md:text-5xl italic tracking-tight leading-relaxed mb-12 text-[#e5e1da]">
            "A truly transcendental stay. The attention to detail is remarkable—from the morning caldera yoga to the candlelit dinners by the pool. Villa Noir is the New Standard of Mediterranean luxury."
          </blockquote>
          <div className="flex flex-col items-center">
            <div className="w-12 h-[1px] bg-[#c5a67c] mb-6"></div>
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#e5e1da]">Alessandra Rossi</span>
            <span className="text-white/30 text-[10px] uppercase tracking-widest mt-2">Connoisseur Traveller</span>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-40 px-12">
        <div className="max-w-7xl mx-auto bg-[#141412] p-12 md:p-32 relative overflow-hidden text-center border border-white/5">
          <div className="absolute inset-0 opacity-20 bg-cover bg-center grayscale" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=2639')" }}>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[#c5a67c] text-[11px] uppercase tracking-[0.5em] font-bold mb-10 block">The Next Chapter</span>
            <h2 className="text-white font-serif text-5xl md:text-7xl tracking-tighter leading-tight mb-16">
              The retreat you'll <br />
              <span className="italic">never</span> forget.
            </h2>
            <div className="flex justify-center">
              <Link 
                to="/booking"
                className="bg-[#c5a67c] text-black px-16 py-6 text-[11px] uppercase tracking-[0.2em] font-bold hover:bg-[#d9bc96] transition-all shadow-2xl flex items-center gap-4"
              >
                Request Residency <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-20 flex flex-wrap items-center justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/30">
              <span className="flex items-center gap-2 font-medium">● Best Price Direct</span>
              <span className="flex items-center gap-2 font-medium">● 24/7 Concierge</span>
              <span className="flex items-center gap-2 font-medium">● Seamless Transfer</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
