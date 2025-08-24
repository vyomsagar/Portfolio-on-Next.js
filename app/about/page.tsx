import { LampContainer } from "@/components/ui/lamp";
import {
  IoHome,
  IoPerson,
  IoRibbon,
  IoSchool,
  IoReaderOutline,
} from "react-icons/io5";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import WrapButton from "@/components/ui/wrap-button";

const About = () => {
  const items = [
    {
      title: "Home",
      icon: <IoHome className="w-6 h-6" />,
      href: "/",
    },
    {
      title: "About",
      icon: <IoPerson className="w-6 h-6" />,
      href: "/",
    },
    {
      title: "Skills",
      icon: <IoRibbon className="w-6 h-6" />,
      href: "/skills",
    },
    {
      title: "Resume",
      icon: <IoSchool className="w-6 h-6" />,
      href: "/vyom-sagar.pdf"
    },
  ];
  return (
    <div className="text-white text-center">
      <FloatingDock
        items={items}
        desktopClassName="fixed bottom-6 left-1/2 -translate-x-1/2 shadow-lg z-99"
        mobileClassName="fixed bottom-6 right-6 z-99"
      ></FloatingDock>
      <LampContainer>
        <div>
          <h1 className="text-xl font-bold">About Me</h1>
          <p>
            Hi, I'm Vyom Sagar, a passionate web developer focused on crafting
            clean and user-friendly web experiences.
            <br /> Based in Delhi, I specialize in building modern websites and
            applications using technologies like Next.js and React.
          </p>
          <br />
          <h2>My Background</h2>
          <p>
            With a background in Computer Science, I've worked on a range of
            projects—from personal websites to full-scale web applications.{" "}
            <br />I enjoy solving complex problems and turning ideas into
            reality through code.
          </p>
          <br />
          <h2 className="text-xl font-bold">Skills</h2>
          <p>
            <strong>Next.js & React</strong> | JavaScript & TypeScript |{" "}
            <strong>HTML5 & CSS3</strong> | Node.js |{" "}
            <strong>UI/UX Design</strong>
          </p>
          <br />
          <h2 className="text-xl font-bold">Education</h2>
          <p>
            I graduated in 2025 with a Bachelor’s degree in Computer Science.
            <br /> My studies provided me with a solid foundation in software
            development, algorithms, and problem-solving skills.
          </p>
          <br />
          <h2>Interests</h2>
          <p>
            When I’m not coding, you’ll find me exploring new technologies,
            reading, or spending time outdoors. <br />I enjoy learning
            constantly and believe in the power of technology to make a positive
            impact.
          </p>
          <h2>Let’s Connect</h2>
          <p>
            I love meeting new people and collaborating on exciting projects.
            Feel free to <a href="/contact">reach out</a> or connect with me on{" "}
            <a href="https://linkedin.com/in/yourprofile">LinkedIn</a> and{" "}
            <a href="https://github.com/yourprofile">GitHub</a>.
          </p>
        </div>
        <div>
          <WrapButton className="mt-10" href="/vyom-sagar.pdf">
          <IoReaderOutline className="animate-spin " />
          My Resume
        </WrapButton>
        </div>
        
      </LampContainer>
    </div>
  );
};

export default About;
