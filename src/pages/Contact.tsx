import { Mail, Phone, Clock, MessageSquare, Instagram, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-40 pb-24 px-12 bg-[#0c0c0b] text-[#e5e1da] min-h-screen border-x-[12px] md:border-x-[24px] border-[#1a1a18]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#c5a67c]"></span>
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a67c]">Direct Connection</span>
          </div>
          <h1 className="font-serif text-5xl md:text-8xl tracking-tighter leading-none mb-12">
            Let's discuss <br /><span className="italic">excellence</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-16">
            <div className="bg-[#141412] p-12 border border-white/5 shadow-2xl">
              <h2 className="font-serif text-3xl mb-12 tracking-tight italic">The Concierge Desk</h2>
              <div className="space-y-10">
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#c5a67c] group-hover:border-[#c5a67c] group-hover:text-black transition-all">
                    <Phone size={20} className="opacity-60" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 font-bold font-sans">Speak with us</p>
                    <p className="font-serif text-2xl italic">+30 22860 12345</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#c5a67c] group-hover:border-[#c5a67c] group-hover:text-black transition-all">
                    <Mail size={20} className="opacity-60" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 font-bold font-sans">Email Reservations</p>
                    <p className="font-serif text-2xl italic">res@villanoir.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#c5a67c] group-hover:border-[#c5a67c] group-hover:text-black transition-all">
                    <MessageSquare size={20} className="opacity-60" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 font-bold font-sans">Instant Inquiry</p>
                    <p className="font-serif text-2xl italic">WhatsApp Concierge</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 px-12">
              <div>
                <Clock className="text-[#c5a67c] mb-6 opacity-60" size={20} />
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3">Availability</h4>
                <p className="text-[12px] text-white/30 leading-relaxed font-light uppercase tracking-widest">Digital Response within 4 hours, 24/7/365.</p>
              </div>
              <div>
                <Globe className="text-[#c5a67c] mb-6 opacity-60" size={20} />
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3">Global Access</h4>
                <p className="text-[12px] text-white/30 leading-relaxed font-light uppercase tracking-widest">Multilingual support in EN, FR, IT, RU.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-10">
               <span className="h-[1px] w-8 bg-[#c5a67c]"></span>
               <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a67c]">Social Residency</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: 'Instagram', handle: '@villanoir', bg: 'bg-[#1a1a18]' },
                { name: 'Facebook', handle: 'villanoirluxury', bg: 'bg-[#1a1a18]' }
              ].map((social, i) => (
                <div key={i} className={`${social.bg} p-12 h-72 flex flex-col justify-between group overflow-hidden relative border border-white/5`}>
                  <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#c5a67c] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <div className="relative z-10 flex justify-between items-start">
                    {social.name === 'Instagram' ? <Instagram size={24} className="text-[#c5a67c]/60" /> : <Globe size={24} className="text-[#c5a67c]/60" />}
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:border-[#c5a67c]/30 transition-colors">
                      <ArrowRight size={14} className="text-[#e5e1da]/40 group-hover:text-[#c5a67c] transition-colors" />
                    </div>
                  </div>
                  <div className="relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 mb-2 font-bold">{social.name}</p>
                    <p className="font-serif text-3xl italic tracking-tight">{social.handle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Image */}
        <div className="mt-40 bg-[#1a1a18] p-4 border border-white/5">
          <div className="aspect-[16/6] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" className="w-full h-full object-cover grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000" />
          </div>
        </div>
      </div>
    </div>
  );
}
