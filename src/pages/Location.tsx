import { MapPin, Compass, Anchor, ShoppingBag, Palmtree } from 'lucide-react';

export default function Location() {
  return (
    <div className="pt-40 pb-24 px-12 bg-[#0c0c0b] text-[#e5e1da] min-h-screen border-x-[12px] md:border-x-[24px] border-[#1a1a18]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#c5a67c]"></span>
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a67c]">The Geography</span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl tracking-tighter leading-none mb-12">
            The heart of <br /><span className="italic">Santorini</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl font-light">
            Perched on the private volcanic cliffs with unobstructed views of the Caldera, Villa Noir offers a perfect balance of seclusion and accessibility.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start mb-32">
          {/* Visual Map Placeholder */}
          <div className="relative aspect-video lg:aspect-square bg-[#1a1a18] border border-white/5 p-4 shadow-2xl">
            <div className="w-full h-full overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=2000" 
                className="w-full h-full object-cover grayscale opacity-20"
                alt="Map Background"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#c5a67c] text-black px-4 py-2 text-[9px] uppercase tracking-widest whitespace-nowrap font-bold">
                    Villa Noir Estate
                  </div>
                  <div className="w-6 h-6 bg-[#c5a67c] rounded-full animate-ping opacity-20" />
                  <div className="absolute top-0 left-0 w-6 h-6 bg-[#c5a67c] rounded-full border-4 border-black shadow-xl shadow-[#c5a67c]/20" />
                </div>
              </div>
            </div>
            
            {/* Interactive Overlay Mockup */}
            <div className="absolute bottom-10 left-10 right-10 bg-[#0c0c0b]/90 backdrop-blur-md p-8 border border-white/10 flex justify-between items-center shadow-2xl">
              <div className="flex gap-4">
                <MapPin className="text-[#c5a67c]" size={20} />
                <div>
                  <p className="font-serif text-lg italic text-[#e5e1da]">Oia Cliffside</p>
                  <p className="text-[9px] text-white/30 uppercase tracking-widest font-bold">84702 Santorini, Greece</p>
                </div>
              </div>
              <button className="bg-[#c5a67c] text-black px-6 py-3 text-[9px] uppercase tracking-widest font-bold hover:bg-[#d9bc96] transition-all">Directions</button>
            </div>
          </div>

          <div className="space-y-16">
            {[
              { icon: Anchor, title: "Amoudi Bay", dist: "10 mins", desc: "Traditional tavernas and boat charters departing for the volcanic islands." },
              { icon: ShoppingBag, title: "Oia Promenade", dist: "5 mins", desc: "The iconic walk with blue-domed churches and global high-luxury boutiques." },
              { icon: Palmtree, title: "Perivolos Beach", dist: "25 mins", desc: "Black volcanic sands and the island's most exclusive beach clubs." },
              { icon: Compass, title: "Thira Airport", dist: "20 mins / Transfer Included", desc: "Seamless private arrivals via our dedicated chauffeur fleet." }
            ].map((poi, i) => (
              <div key={i} className="flex gap-8 group pt-8 border-t border-white/5 first:pt-0 first:border-0">
                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#c5a67c] group-hover:border-[#c5a67c] group-hover:text-black transition-all">
                  <poi.icon size={20} className="opacity-60" />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-serif text-2xl italic tracking-tight">{poi.title}</h3>
                    <span className="text-[#c5a67c] text-[10px] uppercase tracking-[0.2em] font-bold">{poi.dist}</span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed font-light">{poi.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
