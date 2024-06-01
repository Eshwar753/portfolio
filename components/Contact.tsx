"use client";

import toast from "react-hot-toast";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import sendEmail from "@/action/sendEmail";
import SubmitBtn from "./SubmitButton";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";


const Contact = () => {


  const { ref, inView} = useInView({
    threshold:0.75,
  });
  const {setActiveSection, timeOfLastClick} = useActiveSectionContext()

  useEffect(() => {
    if (inView&& Date.now() - timeOfLastClick > 1000) setActiveSection("Contact")
  },[inView, setActiveSection, timeOfLastClick]);

  return(

    <section
    ref={ref}
    id="contact"
    className="mb-20 sm:mb-28 scroll-mt-28  sm:pt-[8rem] w-[min(100%,38rem)] text-center"
  >
    <SectionHeading>Contact me</SectionHeading>
    <form
      className="mt-10 flex flex-col dark:text-black"
      action={async (formData) => {
        const { data, error } = await sendEmail(formData);

        if (error) {
          toast.error(error);
          return;
        }

        toast.success("Email sent successfully!");
      }}
    >
      <input
        className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        name="senderEmail"
        type="email"
        required
        maxLength={500}
        placeholder="Your email"
      />
      <textarea
        className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        name="message"
        placeholder="Your message"
        required
        maxLength={5000}
      />
      
      <SubmitBtn />
    </form>
  </section>

  ) 
};

export default Contact;
