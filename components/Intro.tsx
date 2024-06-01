"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {useInView} from "react-intersection-observer";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { MovingBorder, MovingBorderBtn } from "./ui/moving-border";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const Intro = () => {

  const { ref, inView} = useInView({
    threshold:0.5,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext()

  useEffect(() => {
    if (inView&& Date.now() - timeOfLastClick > 1000) setActiveSection("Home")
  },[inView, setActiveSection, timeOfLastClick])

  

  return (
    <section className="sm:mb-[12rem] lg:pt-[3rem] py-[4rem]  sm:-pt-[2rem]"
    ref = {ref}>
      <div className="flex flex-col-reverse gap-[8rem] lg:flex-row sm:gap-[12rem] justify-between ">

      <div className="sm:pl-40 p-auto mt-10" >
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-normal sm:text-4xl sm:px-[8rem]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className=" text-xl sm:text-xl ">Hello, 
       <br/>
         I'm <motion.span   transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.7,
      }} className="text-yellow-400 !text-3xl sm:!text-6xl">Eshwar</motion.span>.
        
        <br/></span>
        <p className="font-normal text-xl"> I build{" "}
        <span className="font-bold text-yellow-400">full-stack application</span> for web.
         <br/> passionate about building a modern web <br/>  
              application that users love. I enjoy <br/> building<span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline decoration-yellow-400">React (Next.js)</span>.
        </p>
      </motion.h1>

      <motion.div
        className="flex flex-col  text-black sm:flex-row items-center
         justify-center gap-2 px-4 text-lg font-medium sm:!-translate-x-[5.2rem]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >

       
        
        <a
          className="
          group px-7 py-3 flex items-center gap-2
           rounded-full outline-none focus:scale-110 hover:scale-110 
            active:scale-110 transition "
          href="/CV.pdf"
          download
        >
          <MovingBorderBtn>
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </MovingBorderBtn>

        </a>
       
        

        <a
          className="bg-slate-300  text-black p-4  hover:text-gray-950 
          flex items-center gap-2 rounded-full
           focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:bg-slate-400
           transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/eshwar-s-b-esb/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-slate-300 p-4  text-black flex items-center gap-2 text-[1.35rem] 
          rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 hover:bg-slate-400 active:scale-105
           transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Eshwar753"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>

      </div>

      <div className="relative w-72 h-72 !translate-x-[1.5rem] sm:!translate-x-[13rem]  pt-[4rem]   space-y-3 -rotate-[30deg] lg:!-translate-x-[12rem]  sm:!translate-y-[2rem] "
   
      
      >
        <div className="flex gap-3 translate-x-8">
          
          <motion.div className=" pacman w-32 h-32 rounded-full  " initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.7,
      }}></motion.div>

          <motion.div className=" triangle w-32 h-32 rounded-2xl bg-pink-500 " initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 405,
        delay: 0.6,
        duration: 2,
      }} ></motion.div>
          
          
        </div>
        <motion.div className="flex gap-3 -translate-x-8" initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.7,
      }}>
          <div className="triangle-down w-32 h-32 rounded-2xl bg-green-500 " ></div>
    
          <div className="w-32 h-32 rounded-full bg-sky-500 " ></div>
          
        </motion.div>
        <motion.div className="glow absolute bottom-[25%]  right-1/2  -z-10" initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.7,
      }} ></motion.div>
      </div>
     

      </div>
      
     
    
    </section>
  );
};

export default Intro;
