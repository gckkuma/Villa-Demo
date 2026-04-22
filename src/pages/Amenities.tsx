import { Wine, Coffee, Waves, Utensils, Zap, Shield, Car, Radio } from 'lucide-react';

const amenities = [
  { icon: Waves, title: "Infinity Pool", desc: "18-meter heated salt-water pool with panoramic bay views." },
  { icon: Utensils, title: "Gourmet Kitchen", desc: "Professional Miele & Sub-Zero appliances for private catering." },
  { icon: Wine, title: "Vineyard Cellar", desc: "Temperature-controlled collection of organic local wines." },
  { icon: Shield, title: "24/7 Security", desc: "Advanced biometric access and discreet on-site safety." },
  { icon: Car, title: "Private Fleet", desc: "Underground parking for 6 luxury vehicles." },
  { icon: Coffee, title: "Artisan Lounge", desc: "Custom espresso bar and library with rare editions." },
  { icon: Zap, title: "Wellness Hub", desc: "Technogym equipped studio and private massage suite." },
  { icon: Radio, title: "Global Intel", desc: "Dedicated high-speed Starlink and satellite communications." }
];

export default function Amenities() {
  return (
    <div className="pt-40 pb-24 px-12 bg-[#0c0c0b] text-[#e5e1da] min-h-screen border-x-[12px] md:border-x-[24px] border-[#1a1a18]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#c5a67c]"></span>
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a67c]">The Curated Life</span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl tracking-tighter leading-none mb-12">
            Beyond <br /><span className="italic">Expectation</span>
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl border-l border-white/10 pl-8 font-light">
            Every amenity at Villa Noir has been selected to satisfy the most demanding international standards of luxury and utility.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
          {amenities.map((item, i) => (
            <div key={i} className="group p-8 bg-[#141412] border border-white/5 hover:border-[#c5a67c]/30 transition-all duration-500">
              <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#c5a67c] group-hover:border-[#c5a67c] group-hover:text-black transition-all duration-500">
                <item.icon size={22} />
              </div>
              <h3 className="font-serif text-2xl mb-4 tracking-tight underline underline-offset-8 decoration-white/5">{item.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Exclusive Services Section */}
        <div className="mt-40 pt-40 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-10 tracking-tight italic text-[#c5a67c]">Personalized Excellence</h2>
              <p className="text-white/50 leading-relaxed mb-12 font-light">
                Your stay includes a dedicated lifestyle manager who can arrange anything from private jet transfers to Michelin-starred dining on your terrace.
              </p>
              <ul className="space-y-6">
                {['Daily Housekeeping & Turndown', 'Private Chef & Sommelier', 'Yacht & Helicopter Charters', 'Secured VIP Transport', 'In-Villa Spa Treatments'].map((service, i) => (
                  <li key={i} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">
                    <div className="w-2 h-2 bg-[#c5a67c] shadow-[0_0_8px_#c5a67c] group-hover:scale-125 transition-transform" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1a1a18] p-4 border border-white/5">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=2670" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
