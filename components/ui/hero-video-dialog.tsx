"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Play, XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out"

interface HeroVideoProps {
  animationStyle?: AnimationStyle
  videoSrc: string
  thumbnailSrc: string
  thumbnailAlt?: string
  className?: string
  isVertical?: boolean
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
}

export function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
  isVertical = false,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const selectedAnimation = animationVariants[animationStyle]

  const isLocalVideo = videoSrc.includes('.mp4') || videoSrc.includes('.mov');

  return (
    <div className={cn("relative", className)}>
      <div
        className="relative cursor-pointer group"
        onClick={() => setIsVideoOpen(true)}
      >
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          width={1920}
          height={1080}
          className={cn(
            "w-full transition-all duration-300 group-hover:brightness-[0.8] ease-out rounded-2xl shadow-2xl border-[8px]",
            isVertical ? "aspect-[9/16] object-cover border-white/10" : "aspect-video object-cover border-white"
          )}
        />
        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out">
          <div className="bg-white/20 flex items-center justify-center rounded-full backdrop-blur-md size-24">
            <div
              className={`flex items-center justify-center bg-[#E01A2C] shadow-xl rounded-full size-16 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100`}
            >
              <Play
                className="size-6 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out"
                style={{
                  filter:
                    "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsVideoOpen(false)}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={cn(
                "relative w-full mx-4 md:mx-0",
                isVertical ? "max-w-[400px] aspect-[9/16]" : "max-w-4xl aspect-video"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-[#E01A2C] transition-colors"
              >
                <XIcon className="size-8" />
              </button>
              <div className="size-full border-2 border-white/10 rounded-2xl overflow-hidden isolate z-[1] relative shadow-2xl bg-black">
                {isLocalVideo ? (
                  <video 
                    src={videoSrc} 
                    autoPlay 
                    controls 
                    className="size-full object-cover"
                  />
                ) : (
                  <iframe
                    src={videoSrc}
                    className="size-full rounded-2xl"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
