import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 py-16 border-t border-slate-200 z-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="mb-6 flex flex-col">
              <div className="relative w-48 h-12 mb-4 opacity-90">
                <Image 
                  src="/blacklogo.png" 
                  alt="Team Arora Logo" 
                  fill 
                  sizes="192px"
                  className="object-contain object-left" 
                />
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Parveen Arora is the #1 Realtor in Brampton and Mississauga, leading a team of experts at RE/MAX Optimum Realty. Independently Owned and Operated Brokerage.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-6 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#E01A2C] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#E01A2C] transition-colors">About Parveen</a></li>
              <li><a href="#neighborhoods" className="hover:text-[#E01A2C] transition-colors">Featured Regions</a></li>
              <li><a href="#media" className="hover:text-[#E01A2C] transition-colors">Media</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-slate-900 font-semibold mb-6 text-sm tracking-wide">Contact Details</h4>
            <ul className="space-y-5 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#E01A2C] w-5 h-5 flex-shrink-0" />
                <span className="leading-snug">268 Derry Rd W Unit 101, Mississauga, ON L5W 0H6</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#E01A2C] w-5 h-5 flex-shrink-0" />
                <span className="text-base text-slate-800">416-910-8923</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#E01A2C] w-5 h-5 flex-shrink-0" />
                <span>parveen@teamarora.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Team Arora Realty. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
