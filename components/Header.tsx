"use client";


import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { ModeToggle } from "./ModeToogle";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";



const Header = () => {

const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext()

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border-2
       border-yellow-400 border-opacity-40 bg-gray-200  shadow-lg shadow-yellow-400/[0.03]
        backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y:0  , x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className=" flex fixed left-1/2 h-12 -translate-x-1/2 -translate-y-[6rem] sm:-translate-y-[0]  py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul
          className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem]
             font-medium text-gray-600 sm:w-[initial] sm:flex-nowrap sm:gap-5 "
        >
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="flex relative items-center justify-center h-1/3" 
              initial ={{ y: -100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx("flex w-full h-1/3 items-center justify-center p-3 hover:text-yellow-500 transition",
                {
                  "!text-gray-950 dark:text-gray-200":
                  activeSection === link.name,
                  
                })
               }

               onClick={() =>{ setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
               }}
              >
                {link.name}
                {
                  link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 text-black rounded-full absolute inset-0 -z-10 dark:bg-yellow-400 "
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    
                    ></motion.span>)
                }
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <motion.div className="lg:flex fixed h-12 right-1/4 top-8 scroll-m-[20rem] hidden"
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
         type: "tween",
         duration: 0.2,
       }}>
        <ModeToggle />
        </motion.div>
      
    </header>
  );
};

export default Header;
