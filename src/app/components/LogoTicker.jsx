"use client";
import Image from "next/image";
import { logoImages } from "../../data/imagesData.js";
import { motion } from "framer-motion";
export function LogoTicker() {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-lg text-white/50">
          Trusted by the world's most innovate teams
        </h2>

        <div className=" flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-20 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] before:z-10">
          <motion.div
            className="flex gap-20 flex-none pr-20"
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          >
            {logoImages.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                key={alt}
                className="flex-none h-7 w-auto"
              />
            ))}
            {logoImages.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                key={alt}
                className="flex-none h-7 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
