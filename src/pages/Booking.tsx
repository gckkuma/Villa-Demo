import { useState } from 'react';
import React from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Users, CheckCircle, ShieldCheck, MapPin, Star } from 'lucide-react';
import { format, addDays } from 'date-fns';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: format(addDays(new Date(), 14), 'yyyy-MM-dd'),
    checkOut: format(addDays(new Date(), 21), 'yyyy-MM-dd'),
    guests: '2',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-40 pb-24 px-12 bg-[#0c0c0b] text-[#e5e1da] min-h-screen border-x-[12px] md:border-x-[24px] border-[#1a1a18]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32">
        
        {/* Left Column: Info & Scarcity */}
        <div className="lg:col-span-12 xl:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#c5a67c]"></span>
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#c5a67c]">Residency Request</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl tracking-tighter mb-12 leading-[1.1]">Secure Your <br /><span className="italic">Exclusive</span> Stay</h1>
          
          <div className="bg-[#141412] p-10 border border-white/5 shadow-2xl mb-12">
            <div className="flex items-center gap-3 text-red-400 mb-6 font-bold text-[10px] uppercase tracking-widest">
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(248,113,113,0.5)]"></div>
              Only 3 weeks remaining this summer
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light">
              Villa Noir is a highly sought-after private estate. We recommend booking at least 6 months in advance for peak season (June - August).
            </p>
          </div>

          <div className="space-y-10">
            {[
              { icon: CheckCircle, title: "Best Price Guaranteed", desc: "No booking fees when you reserve directly through our concierge." },
              { icon: ShieldCheck, title: "Luxury Insurance", desc: "Premium travel protection included for all residencies." },
              { icon: Star, title: "Personal Concierge", desc: "A dedicated manager is assigned to your stay from the moment of booking." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <item.icon size={20} className="text-[#c5a67c] opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest font-bold mb-2">{item.title}</h4>
                  <p className="text-white/30 text-xs leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-10 bg-[#1a1a18] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a67c]/5 blur-[60px] rounded-full"></div>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 p-1">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" alt="Concierge" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-[#c5a67c] font-bold mb-1">Estate Curator</p>
                <p className="font-serif text-xl italic">Marie-Clair</p>
              </div>
            </div>
            <p className="text-sm text-white/50 italic leading-relaxed font-light">
              "I personally oversee every guest journey. Whether it's a private yacht charter or a specific vintage in the cellar, we make it happen with absolute discretion."
            </p>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-12 xl:col-span-7">
          <div className="bg-[#141412] p-8 md:p-16 border border-white/5 shadow-2xl relative">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-24"
              >
                <div className="w-24 h-24 bg-[#c5a67c]/10 text-[#c5a67c] rounded-full flex items-center justify-center mx-auto mb-10 border border-[#c5a67c]/20">
                  <CheckCircle size={40} strokeWidth={1} />
                </div>
                <h2 className="font-serif text-4xl mb-6 italic">Request Received</h2>
                <p className="text-white/40 max-w-sm mx-auto font-light leading-relaxed">
                  Marie-Clair will review your requested dates and contact you within the next 4 hours to finalize your residency.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Guest Identity</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 py-5 outline-none focus:border-[#c5a67c] transition-colors text-sm font-light placeholder:text-white/10"
                      placeholder="e.g. Julian Alexander"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Communications</label>
                    <input 
                      required
                      type="email" 
                      className="w-full bg-transparent border-b border-white/10 py-5 outline-none focus:border-[#c5a67c] transition-colors text-sm font-light placeholder:text-white/10"
                      placeholder="julian@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Arrival Date</label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-0 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                      <input 
                        required
                        type="date" 
                        className="w-full bg-transparent border-b border-white/10 py-5 pl-8 outline-none focus:border-[#c5a67c] transition-colors text-sm font-light color-scheme-dark"
                        style={{ colorScheme: 'dark' }}
                        value={formData.checkIn}
                        onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Departure Date</label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-0 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                      <input 
                        required
                        type="date" 
                        className="w-full bg-transparent border-b border-white/10 py-5 pl-8 outline-none focus:border-[#c5a67c] transition-colors text-sm font-light color-scheme-dark"
                        style={{ colorScheme: 'dark' }}
                        value={formData.checkOut}
                        onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Party Size</label>
                  <div className="relative group">
                    <Users className="absolute left-0 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-[#c5a67c] transition-colors" size={16} />
                    <select 
                      className="w-full bg-transparent border-b border-white/10 py-5 pl-8 outline-none focus:border-[#c5a67c] transition-colors text-sm font-light appearance-none"
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n} className="bg-[#141412]">{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">Bespoke Requirements</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 py-5 outline-none focus:border-[#c5a67c] transition-colors text-sm font-light resize-none placeholder:text-white/10"
                    placeholder="Tell us about any specific desires (private chef, yacht charter, etc.)"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#c5a67c] text-black py-6 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#d9bc96] transition-all shadow-2xl"
                >
                  Send Inquiry Request
                </button>
                
                <p className="text-[10px] text-center text-white/20 uppercase tracking-[0.2em] font-medium">
                  Guaranteed response within 4 hours
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
