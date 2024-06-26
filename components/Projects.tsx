'use client'

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
import toast from "react-hot-toast";

const Projects = () => {

  const { ref, inView} = useInView({
    threshold:0.2,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setActiveSection("Projects")
  },[inView, setActiveSection, timeOfLastClick])

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 border-b  sm:pb-[8rem]">
      <SectionHeading>Some things I've Build</SectionHeading>

      <div>
        <p>⚠️ In case the server is inactive for long time, it may take 20-50 seconds to load the demo, please bare with it ⚠️</p>
        {projectsData.map((project, index) => (
          <div key={index}>
            <Project {...project}  />
          </div>
        ))}
      </div>
    </section>
  );
};



export default Projects;
