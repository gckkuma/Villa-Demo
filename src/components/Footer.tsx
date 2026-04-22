import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0b] text-[#e5e1da] pt-24 pb-12 px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="flex flex-col mb-6">
            <span className="font-serif italic text-2xl tracking-[0.2em] text-[#c5a67c]">VILLA NOIR</span>
          </div>
          <p className="text-sm text-white/50 leading-relaxed max-w-xs font-light">
            An ultra-exclusive private estate designed for total privacy, panoramic views, and uncompromising luxury service.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#c5a67c] mb-8 underline underline-offset-8 decoration-white/10">
            Navigation
          </h4>
          <ul className="space-y-4">
            {['Home', 'The Villa', 'Amenities', 'Gallery', 'Location', 'Booking'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'The Villa' ? '/villa' : item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="text-[11px] uppercase tracking-[0.15em] text-white/50 hover:text-[#c5a67c] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#c5a67c] mb-8 underline underline-offset-8 decoration-white/10">
            Reach Out
          </h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-white/50 hover:text-[#c5a67c] transition-colors cursor-pointer">
              <Mail size={14} className="opacity-50" />
              <span className="text-[11px] uppercase tracking-[0.15em]">reservations@villanoir.com</span>
            </li>
            <li className="flex items-center gap-4 text-white/50 hover:text-[#c5a67c] transition-colors cursor-pointer">
              <Phone size={14} className="opacity-50" />
              <span className="text-[11px] uppercase tracking-[0.15em]">+30 228 60 12345</span>
            </li>
            <li className="flex items-center gap-4 text-white/50 hover:text-[#c5a67c] transition-colors cursor-pointer">
              <MapPin size={14} className="opacity-50" />
              <span className="text-[11px] uppercase tracking-[0.15em]">Santorini, Greece</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#c5a67c] mb-8 underline underline-offset-8 decoration-white/10">
            Social
          </h4>
          <div className="flex gap-4 mb-8">
            {[Instagram, Facebook, Globe].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:border-[#c5a67c] hover:text-[#c5a67c] transition-all">
                <Icon size={16} />
              </a>
            ))}
          </div>
          <div className="bg-white/5 p-6 border border-white/5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#c5a67c] mb-4 font-bold">Residency Newsletter</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-transparent border-b border-white/10 text-xs py-2 flex-grow outline-none focus:border-[#c5a67c] transition-colors text-white/80" />
              <button className="text-[11px] uppercase font-bold tracking-widest pl-4 text-[#c5a67c]">Join</button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
          © 2024 VILLA NOIR. SCULPTED PRIVACY.
        </p>
        <div className="flex gap-10 text-[10px] uppercase tracking-[0.3em] text-white/30">
          <Link to="#" className="hover:text-[#c5a67c] transition-colors">Privacy</Link>
          <Link to="#" className="hover:text-[#c5a67c] transition-colors">Terms</Link>
          <Link to="#" className="hover:text-[#c5a67c] transition-colors">Legal</Link>
        </div>
      </div>
    </footer>
  );
}
