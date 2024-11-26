"use client";
import { useRef } from "react";
import emojistar from "../assets/images/emojistar.png";
import helix from "../assets/images/helix2.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
export function CallToAction() {
  const handleForm = (ev) => {
    ev.preventeDefault();
  };

  const containerDiv = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerDiv,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <div
      className="bg-black py-[72px] text-white border-b border-white/30"
      ref={containerDiv}
    >
      <div className="container relative mt-44 mb-10">
        <h3 className="text-center  font-bold text-3xl sm:text-5xl">
          Get instant Access
        </h3>
        <p className="text-center mt-5 text-lg tracking-tight text-white/70 sm:px-72">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center w-full">
          <form
            onSubmit={handleForm}
            className="flex flex-col sm:flex-row items-center w-full max-w-md"
          >
            <input
              type="text"
              placeholder="name@email.com"
              className="placeholder:text-zinc-400 placeholder:tracking-tight bg-zinc-800 mr-0 sm:mr-2 py-2 px-2 rounded-lg w-full placeholder:font-medium focus:outline-none sm:w-72 mb-2 sm:mb-0"
            />
            <button className="bg-white text-black py-2 px-2 rounded-lg font-medium hover:bg-purple-200 transition duration-300 active:bg-purple-100 w-full sm:w-auto">
              Get access
            </button>
            <motion.div
              style={{ translateY: translateY }}
              className="absolute right-[70px] top-[65px] hidden md:inline -rotate-12"
            >
              <Image
                src={helix}
                alt="emoji star image"
                height="150"
                width="200"
              />
            </motion.div>
            <motion.div
              style={{ translateY: translateY }}
              className="absolute left-[95px] bottom-[100px] hidden md:inline"
            >
              <Image
                src={emojistar}
                alt="helix image"
                height="200"
                width="220"
              />
            </motion.div>
          </form>
        </div>
      </div>
    </div>
  );
}
