"use client"

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandDjango, TbBrandNextjs } from "react-icons/tb";
import {
  SiDocker,
  SiExpress,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaPython } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import {motion} from "framer-motion"



const iconVariants= (duration: number): any=>({
  initial:{y: -10},
  animate: {
    y:[5,-5],
    transition:{
      duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    }
  },
  

})

const Technologies = () => {

  const { ref, inView} = useInView({
    threshold:0.5,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext()

  useEffect(() => {
    if (inView&& Date.now() - timeOfLastClick > 1000) setActiveSection("Skills")
  },[inView, setActiveSection, timeOfLastClick])

  return (
    <section ref={ref} id="skills" className="border-b scroll-mt-28  pb-[8rem] sm:pb-[12rem] mb-[7rem] max-w-[49rem]">
      <SectionHeading> Technologies </SectionHeading>
      <div className="flex justify-center items-center gap-4 sm:flex-row flex-col  ">
        <div className="flex flex-row gap-3">
            <motion.div variants={iconVariants(2.5)}
            animate='animate'
            initial='initial'
             className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-4xl text-[#e44e26]" />
            </motion.div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className="text-4xl text-[#1e63b2]" />
            </div>
            <motion.div variants={iconVariants(3)}
            animate='animate'
            initial='initial' className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className="text-4xl text-yellow-400" />
            </motion.div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-4xl text-green-500" />
            </div>   
        </div>
        <div className="flex flex-row gap-3">
           
            <motion.div variants={iconVariants(3.5)}
            animate='animate'
            initial='initial' className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-4xl" />
            </motion.div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-4xl text-cyan-400" />
            </div>
            <motion.div variants={iconVariants(4)}
            animate='animate'
            initial='initial' className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaNodeJs className="text-4xl text-[#00ed64]" />
            </motion.div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiRedux className="text-4xl text-purple-500" />
            </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-5 sm:flex-row flex-col ">

        <div className="flex flex-row gap-3">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-4xl" />
            </div>

            <motion.div variants={iconVariants(4.5)}
            animate='animate'
            initial='initial' className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss className="text-4xl text-cyan-600" />
            </motion.div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTypescript className="text-4xl text-[#2f74c0]" />
            </div>
            <motion.div variants={iconVariants(5)}
            animate='animate'
            initial='initial' className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiDocker className="text-4xl text-[#1c60e6]" />
            </motion.div>

        </div>
        <div className="flex flex-row gap-3">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiKubernetes className="text-4xl text-[#326ae8]" />
            </div>
            <motion.div variants={iconVariants(5.5)}
            animate='animate'
            initial='initial' className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-4xl " />
            </motion.div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandDjango className="text-4xl text-[#0a2d1f]" />
            </div>
            <motion.div variants={iconVariants(6)}
            animate='animate'
            initial='initial' className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-4xl text-[#31638c]" />
            </motion.div>
        </div>   
      </div>
    </section>
  );
};

export default Technologies;
