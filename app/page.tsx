import Image from "next/image";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div className="flex flex-col max-w-screen ">
      <Intro />
      <div className="flex flex-col items-center justify-between p-30 ">
        {/* <SectionDivider /> */}
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
