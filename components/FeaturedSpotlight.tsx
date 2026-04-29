'use client';
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";
import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function FeaturedSpotlight() {
  return (
    <div className="relative flex min-h-[50rem] w-full overflow-hidden bg-slate-950 antialiased md:items-center md:justify-center py-20">
      {/* Grid Pattern */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]",
        )}
      />

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl mb-6">
            Your Future <br /> Starts Here.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg md:text-xl font-normal text-neutral-300 leading-relaxed">
            Whether you&apos;re looking for a luxury estate in Credit Valley or a modern loft in Toronto, 
            Parveen Arora brings the spotlight to the finest properties in the GTA.
          </p>
        </motion.div>

        {/* Action Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E01A2C] to-[#000000]" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Join the Inner Circle</h3>
              <p className="text-neutral-400 mb-8">
                Get exclusive access to off-market listings, weekly market insights, and priority booking for viewings.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E01A2C]" />
                  <span className="text-neutral-300 text-sm">Priority VIP Listings</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#000000]" />
                  <span className="text-neutral-300 text-sm">Market Analysis Reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E01A2C]" />
                  <span className="text-neutral-300 text-sm">Direct Access to Parveen</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-1 rounded-2xl">
              <div className="bg-slate-900 rounded-xl p-6 md:p-8">
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Full Name" 
                      className="w-full bg-slate-800 border-white/10 border px-4 py-3 text-white rounded-lg focus:ring-2 focus:ring-[#000000] outline-none transition-all placeholder:text-neutral-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full bg-slate-800 border-white/10 border px-4 py-3 text-white rounded-lg focus:ring-2 focus:ring-[#000000] outline-none transition-all placeholder:text-neutral-500"
                    />
                  </div>
                  <button className="w-full bg-[#E01A2C] hover:bg-[#BE1625] text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg">
                    Subscribe Now <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
