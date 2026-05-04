'use client';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Star, CheckCircle2, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function LeadCapture() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      timestamp: new Date().toLocaleString(),
      formType: 'Home Evaluation'
    };

    try {
      // Note: Replace this URL with your actual Google Apps Script Web App URL
      const SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || '';
      
      if (!SCRIPT_URL) {
        // Fallback for demo purposes if URL isn't set yet
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form data:', data);
        setIsSubmitted(true);
        return;
      }

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Apps Script requires no-cors for simple redirects
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      setIsSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="evaluation" className="py-24 bg-gradient-to-br from-[#000000] to-[#111111] relative overflow-hidden z-10">
      {/* Background motif layer */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* Left column graphic */}
        <motion.div 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="w-full lg:w-1/3 flex justify-center lg:justify-end drop-shadow-2xl"
        >
           <div className="relative w-72 h-72 md:w-80 md:h-80">
              <Image 
                src="/thumbnails/get-top-dollars.png"
                alt="Get Top Dollars"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
           </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-lg shadow-2xl relative border-t-8 border-[#E01A2C]"
        >
          {isSubmitted ? (
            <div className="text-center py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6"
              >
                <CheckCircle2 className="w-10 h-10" />
              </motion.div>
              <h2 className="text-3xl font-serif text-slate-900 mb-4">Request Received!</h2>
              <p className="text-slate-600 text-lg mb-8">
                Thank you for reaching out. Parveen Arora&apos;s team will analyze your property and contact you shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-[#E01A2C] font-bold uppercase tracking-widest text-xs hover:underline"
              >
                Send another request
              </button>
            </div>
          ) : (
            <>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#E01A2C] text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs shadow-md flex items-center gap-2 whitespace-nowrap">
                 <Star className="w-4 h-4 fill-current"/> VIP Access
              </div>

              <div className="text-center mt-4 mb-10">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Discover Your Home&apos;s <span className="font-bold text-[#000000]">True Value</span></h2>
                <p className="text-slate-600 text-lg">
                  Get a comprehensive, no-obligation Free Home Evaluation from the #1 Team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-1.5 ml-1">First Name *</label>
                    <input name="firstName" type="text" className="w-full bg-slate-50 border-gray-200 border px-4 py-3 text-slate-900 rounded-sm focus:ring-2 focus:ring-[#000000] focus:border-[#000000] outline-none transition-all" placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-1.5 ml-1">Last Name *</label>
                    <input name="lastName" type="text" className="w-full bg-slate-50 border-gray-200 border px-4 py-3 text-slate-900 rounded-sm focus:ring-2 focus:ring-[#000000] focus:border-[#000000] outline-none transition-all" placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-1.5 ml-1">Email Address *</label>
                    <input name="email" type="email" className="w-full bg-slate-50 border-gray-200 border px-4 py-3 text-slate-900 rounded-sm focus:ring-2 focus:ring-[#000000] focus:border-[#000000] outline-none transition-all" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-1.5 ml-1">Phone Number *</label>
                    <input name="phone" type="tel" className="w-full bg-slate-50 border-gray-200 border px-4 py-3 text-slate-900 rounded-sm focus:ring-2 focus:ring-[#000000] focus:border-[#000000] outline-none transition-all" placeholder="(555) 123-4567" required />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 mb-1.5 ml-1">Property Address *</label>
                  <input name="address" type="text" className="w-full bg-slate-50 border-gray-200 border px-4 py-3 text-slate-900 rounded-sm focus:ring-2 focus:ring-[#000000] focus:border-[#000000] outline-none transition-all" placeholder="123 Main St, Brampton, ON" required />
                </div>

                {error && (
                  <p className="text-red-500 text-sm font-bold text-center bg-red-50 py-2 rounded-sm border border-red-100">{error}</p>
                )}

                <div className="pt-4">
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-[#E01A2C] hover:bg-[#BE1625] disabled:bg-slate-400 text-white font-bold uppercase tracking-widest text-sm py-4 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-lg group"
                  >
                    {isSubmitting ? (
                      <>Processing <Loader2 className="w-4 h-4 animate-spin" /></>
                    ) : (
                      <>Request Evaluation <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                    )}
                  </button>
                </div>
                
                <p className="text-[10px] uppercase tracking-wider text-center text-slate-400 mt-4 leading-relaxed font-semibold">
                  By submitting this form, you agree to be contacted by RE/MAX Real Estate Centre Team Arora Realty via call, email, or text.
                </p>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
