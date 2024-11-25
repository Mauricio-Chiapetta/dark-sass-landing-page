"use client";
import Image from "next/image";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4F21A1_63%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border=[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-98px)] sm:top-[calc(100%-130px)] sm:w-[1536px] sm:h-[768px] lg:w-[2500px] lg:h-[700px] "></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="border py-1 px-2 rounded-lg border-white/30 flex gap-3"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
              Version 2.0 is here
            </span>
            <div className="flex items-center gap-1">
              <span>Read More</span>
              <motion.div whileHover={{ x: 3}}>
                <ArrowWIcon />
              </motion.div>
            </div>
          </a>
        </div>
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative">
            <h1 className="text-7xl font-bold tracking-tighter text-center  flex sm:text-9xl">
              One Task <br />
              at a Time
            </h1>
            <motion.div
              className="absolute right-[460px] top-[108px] hidden sm:inline"
              drag
              dragSnapToOrigin
              whileDrag={{ scale: 1.1 }}
            >
              <Image
                src={cursorImage}
                alt="cursor image"
                height="200"
                width="200"
                className="max-w-none cursor-pointer"
                draggable="false"
              />
            </motion.div>
            
            <motion.div
              className="absolute left-[480px] top-[56px] hidden sm:inline"
              drag
              dragSnapToOrigin
              whileDrag={{ scale: 1.1 }}
            
            >
              <Image
                src={messageImage}
                alt="message image"
                height="200"
                width="200"
                className="max-w-none cursor-pointer"
                draggable="false"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your sucesses.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium  hover:bg-purple-200 transition duration-300 active:bg-purple-100">
            Get for free
          </button>
        </div>
      </div>
    </div>
  );
}
