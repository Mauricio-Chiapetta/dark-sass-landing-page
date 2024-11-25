"use client";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
export function ProductShowCase() {
  const appImage = useRef(null);

  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <div className="bg-black py-[72px] text-white bg-gradient-to-b from-black to-[#5d2ca8]">
      <div className="container">
        <h2 className="text-center font-bold text-3xl sm:text-5xl">
          Intuitive Interface
        </h2>
        <p className="text-center mt-5 text-xl tracking-tight px-0 sm:px-60 text-white/70">
          Celebrate the joy of accomplishment with an app designed to track your
          progress, motivate your efforts, and celebrate your successes, one
          task at a time.
        </p>
        <div
          className="mt-16 items-center flex justify-center"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.div
            ref={appImage}
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px",
            }}
          >
            <Image src={appScreen} alt="App Screen" className="shadow-md" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
