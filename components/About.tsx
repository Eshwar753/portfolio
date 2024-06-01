"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";

const About = () => {

  const { ref, inView} = useInView({
    threshold:0.75,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setActiveSection("About")
  },[inView, setActiveSection,timeOfLastClick ])




  return (
    <motion.section 
      ref={ ref}
      className="mb-28 p-4 max-w-[45rem] border-b pb-[7rem] text-center leading-8 sm:mb-40 sm:pt-[6rem] pt-[6rem] scroll-mt-28 border-t "
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.25 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Upon receiving {" "}
        <span className="font-medium decoration-auto underline decoration-yellow-500 underline-offset-2">Mechanical engineering degree</span>, I made the decision to explore my 
        interest for programming. I took a coding boot camp course 
        and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="decoration-auto underline decoration-yellow-500 underline-offset-2">adore</span> the
        satisfaction I get from solving an issue at last. <span className="font-medium text-yellow-400">
           React, Next.js, Node.js, MongoDB
        </span> make up my main stack.
         I am also familiar with TypeScript and Python.  I'm constantly trying to learn new technology.
          I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing games, reading books, doing Yoga  and playing with my dogs. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">DSA</span>.
        </p>
    </motion.section>
  );
};

export default About;
