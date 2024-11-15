"use client";
import { Smoothscroll } from '@/components/Smoothscroll';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from "next/image";
import profile from "@/public/profile.webp";
import logo from "@/public/1a.jpg";

const Home = () => {
  const containerRef = React.useRef(null);
  const targetRef = React.useRef(null);
  const blackSectionRef = React.useRef(null);

  // Add scroll progress for the work section
  const { scrollYProgress: workProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const { scrollYProgress: sequenceProgress } = useScroll({
    target: blackSectionRef,
    offset: ["start start", "end end"]
  });

   const workTextSize = useTransform(
  workProgress,
  [0, 0.3, 1], // Now the scale happens in first 30% of scroll
  ["20vw", "10vw", "10vw"]
);

  // Adjusted timing values for closer image transitions
  const lagosOpacity = useTransform(sequenceProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const nigeriaOpacity = useTransform(sequenceProgress, [0.25, 0.4, 0.55], [0, 1, 0]);
  const londonOpacity = useTransform(sequenceProgress, [0.5, 0.65, 0.8], [0, 1, 0]);

  // Tighter image transformations
  const firstImageTransform = {
    y: useTransform(sequenceProgress, [0, 0.3], ["0%", "-100%"]),
    opacity: useTransform(sequenceProgress, [0, 0.15, 0.3], [1, 1, 0]),
  };

  const secondImageTransform = {
    y: useTransform(sequenceProgress, [0.25, 0.55], ["100%", "-100%"]),
    opacity: useTransform(sequenceProgress, [0.25, 0.4, 0.55], [1, 1, 0]),
  };

  const thirdImageTransform = {
    y: useTransform(sequenceProgress, [0.5, 0.8], ["100%", "-100%"]),
    opacity: useTransform(sequenceProgress, [0.5, 0.65, 0.8], [1, 1, 0]),
  };

  return (
    <Smoothscroll>
      <main className="relative" ref={containerRef}>
        <h1 className="text-4xl font-bold uppercase">
          A front end developer who loves design
        </h1>
        <div className="relative">
          <Image 
            src={logo} 
            alt="Profile image" 
            width={800} 
            height={800} 
            className="rounded-full"
            priority 
          />
        </div>

        <section ref={targetRef} className="relative min-h-[300vh]">
          <div className="sticky top-0 h-screen w-full bg-white overflow-hidden">
            <div className="relative h-full w-full grid place-items-center">
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src={profile}
                  alt="Profile image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <motion.h2 
                className="relative font-bold leading-none mix-blend-difference text-white"
                style={{
                  filter: "blur(0px)",
                  opacity: 1,
                  zIndex: 7,
                  fontSize: workTextSize
                }}
              >
                WORK
              </motion.h2>
            </div>
          </div>

          <div ref={blackSectionRef} className="relative bg-black min-h-[200vh] z-[4]">
            <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ perspective: "1000px" }}>
              {/* Fixed Location Text Overlays */}
              <div className="absolute inset-0 flex items-center justify-center z-50">
                <motion.h2 
                  className="absolute text-[20rem] z-[100] text-white font-normal mix-blend-difference"
                  style={{ opacity: lagosOpacity }}
                >
                  Lagos
                </motion.h2>
                <motion.h2 
                  className="absolute text-white text-[20rem] z-[100] font-normal mix-blend-difference"
                  style={{ opacity: nigeriaOpacity }}
                >
                  Nigeria
                </motion.h2>
                <motion.h2 
                  className="absolute text-white text-[20rem] z-[100] font-normal mix-blend-difference"
                  style={{ opacity: londonOpacity }}
                >
                  London
                </motion.h2>
              </div>
              
              {/* Image Transitions */}
              <motion.div 
                className="absolute bottom-0 w-full h-full flex items-end justify-center"
                style={{ 
                  y: firstImageTransform.y,
                  opacity: firstImageTransform.opacity,
                  transformOrigin: "center center",
                }}
              >
                <div className="relative w-[30vw] h-[60vh] rounded-lg overflow-hidden">
                  <Image 
                    src={logo}
                    alt="Project 1"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="absolute w-full h-full flex items-center justify-center"
                style={{ 
                  y: secondImageTransform.y,
                  opacity: secondImageTransform.opacity,
                  transformOrigin: "center center",
                }}
              >
                <div className="relative w-[30vw] h-[60vh] rounded-lg overflow-hidden">
                  <Image 
                    src={profile}
                    alt="Project 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div 
                className="absolute w-full h-full flex items-center justify-center"
                style={{ 
                  y: thirdImageTransform.y,
                  opacity: thirdImageTransform.opacity,
                  transformOrigin: "center center",
                }}
              >
                <div className="relative w-[30vw] h-[60vh] rounded-lg overflow-hidden">
                  <Image 
                    src={logo}
                    alt="Project 3"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <section className="relative bg-slate-200 top-0 h-screen w-full">

          <h1 className="text-4xl font-bold uppercase">
          A front end developer who loves design
        </h1>
        <div className="relative">
          <Image 
            src={logo} 
            alt="Profile image" 
            width={800} 
            height={800} 
            className="rounded-full"
            priority 
          />
            </div>
          </section>
            
        </section>
      </main>
    </Smoothscroll>
  );
};

export default Home;

