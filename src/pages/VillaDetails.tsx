import { motion } from 'motion/react';
import { Bed, Bath, User, Square, Droplet, Wind, Tv, Wifi } from 'lucide-react';

const specs = [
  { icon: Bed, label: "5 Bedrooms", sub: "Sea View Balconies" },
  { icon: Bath, label: "6 Bathrooms", sub: "Italian Marble" },
  { icon: User, label: "10 Guests", sub: "Maximum Occupancy" },
  { icon: Square, label: "850 sqm", sub: "Living Space" }
];

const amenitiesList = [
  { icon: Droplet, name: "Infinity Pool", desc: "Heated salt-water pool with automated filtration." },
  { icon: Wind, name: "Climate Control", desc: "Silent, energy-efficient environmental systems." },
  { icon: Tv, name: "Home Cinema", desc: "4K laser projector with Dolby Atmos surround." },
  { icon: Wifi, name: "Starlink Pro", desc: "Ultra-fast global connectivity across the estate." }
];

export default function VillaDetails() {
  return (
    <div className="pt-40 pb-24 px-12 bg-[#0c0c0b] text-[#e5e1da] min-h-screen border-x-[12px] md:border-x-[24px] border-[#1a1a18]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#c5a67c]"></span>
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a67c]">The Sanctuary</span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl tracking-tighter leading-none mb-10">
            Architectural <br />
            <span className="italic">Excellence</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl font-light">
            Stretching across three levels of contemporary design, Villa Noir redefines the relationship between indoor living and the vast Mediterranean horizon.
          </p>
        </header>

        {/* Key Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-y border-white/5 py-12">
          {specs.map((spec, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <spec.icon size={20} className="text-[#c5a67c] mb-6 opacity-80" />
              <p className="font-serif text-2xl tracking-tight italic">{spec.label}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mt-2 font-bold">{spec.sub}</p>
            </div>
          ))}
        </div>

        {/* Detailed Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-40 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-10 tracking-tight">The Ground Level</h2>
            <p className="text-white/50 leading-relaxed mb-6 font-light">
              The heart of the villa features an expansive open-plan lounge with floor-to-ceiling retractable glass walls that blur the lines between the interior and the infinity pool terrace. 
            </p>
            <p className="text-white/50 leading-relaxed font-light">
              Equipped with a professional-grade kitchen, formal dining for 12, and a secondary "prep" kitchen for private chefs, the ground level is designed for effortless hosting.
            </p>
            
            <div className="mt-16 space-y-8">
              {amenitiesList.slice(0, 2).map((a, i) => (
                <div key={i} className="flex gap-6 p-8 bg-[#141412] border border-white/5">
                  <a.icon size={24} className="text-[#c5a67c] shrink-0" />
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold mb-3">{a.name}</h4>
                    <p className="text-white/40 text-xs mt-1 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#1a1a18] p-4 border border-white/5">
            <div className="overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2670" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Villa Living Room"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="order-2 lg:order-1 bg-[#1a1a18] p-4 border border-white/5">
            <div className="overflow-hidden aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=2670" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Villa Master Suite"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl mb-10 tracking-tight">The Upper Sanctuaries</h2>
            <p className="text-white/50 leading-relaxed mb-6 font-light">
              The upper level is dedicated to rest and rejuvenation. The Master Observatory Suite offers 180° panoramic views of the bay, featuring a private lounge, dressing room, and an ensuite bath with a stone-carved tub.
            </p>
            <p className="text-white/50 leading-relaxed font-light">
              Four additional guest suites, each with unique character, ensure that every resident enjoys maximum privacy and individual terraces overlooking the gardens or sea.
            </p>

            <div className="mt-16 space-y-8">
              {amenitiesList.slice(2, 4).map((a, i) => (
                <div key={i} className="flex gap-6 p-8 bg-[#141412] border border-white/5">
                  <a.icon size={24} className="text-[#c5a67c] shrink-0" />
                  <div>
                    <h4 className="text-[11px] uppercase tracking-widest font-bold mb-3">{a.name}</h4>
                    <p className="text-white/40 text-xs mt-1 leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
