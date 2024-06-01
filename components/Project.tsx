import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { MovingBorderBtn } from "./ui/moving-border";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl, githubUrl, demoPage }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="bg-gray-300 max-w-[42rem] sm:min-h-[25rem] border border-black/5 rounded-lg 
      overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-400 transition
       sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold !underline-offset-1 !decoration-yellow-400">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-300 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap pt-4 pb-4 mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-yellow-400"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>


          <div className="flex pt-4 pb-7 gap-5">

            

           
            <a
              className="
              group bg-slate-900 text-white px-7 py-3 flex items-center gap-2
               rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950
                active:scale-105 transition "
              href={demoPage}
              target="_blank"
            >
              Demo
              <BsArrowRight  />
            </a>


           

            <a
          className="bg-white p-4  text-black flex items-center gap-2 text-[1.35rem] 
          rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 
          active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 z-10"
          href={githubUrl}
          target="_blank"
        >
          <FaGithubSquare />
        </a>

          </div>

    
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          priority
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
};

export default Project;
