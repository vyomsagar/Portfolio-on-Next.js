import { BackgroundLines } from "@/components/ui/background-lines";
import { CardCarousel } from "@/components/ui/card-carousel";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Cover } from "@/components/ui/cover";
import { FloatingDock } from "@/components/ui/floating-dock";
import React from "react";
import { IoHome, IoPerson, IoReaderOutline, IoRibbon, IoSchool } from "react-icons/io5";
import { TextScroll } from "@/components/ui/text-scroll"
import { LampContainer } from "@/components/ui/lamp";
import WrapButton from "@/components/ui/wrap-button";

const Page = () => {
  const images = [
     {
      src: "/avtar1.svg",
      alt: "Project 1",
      href: "https://github.com/yourusername/project1",
    },
    {
      src: "/flask.svg",
      alt: "Project 2",
      href: "https://your-website.com/project2",
    },
    {
      src: "/c.svg",
      alt: "Project 3",
      href: "https://vercel.com",
    },
  ]
 


  const items = [
     {
    title: "Home",
    icon: <IoHome className="w-6 h-6"/>,
    href: "/",
  },
  {
    title: "About",
    icon: <IoPerson className="w-6 h-6" />,
    href: "/about"
  },
  {
    title: "Skills",
    icon: <IoRibbon className="w-6 h-6" />,
    href: "/skills"
  },
  {
    title: "Resume",
    icon: <IoSchool className="w-6 h-6" />,
    href: "/vyom-sagar.pdf"
  }
  ]
  return (
    <div className="text-white">
      <FloatingDock 
        items={items} 
        desktopClassName="fixed bottom-6 left-1/2 -translate-x-1/2 shadow-lg z-99"
        mobileClassName="fixed bottom-6 right-6 z-99"></FloatingDock>
      <LampContainer >
<div >
          <BackgroundLines className="w-full ">
        <div className="flex flex-col items-center justify-center  max-w-xl">
            <div className="mb-4">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2">
                I&apos;M <Cover>VYOM SAGAR</Cover>
              </h2>
            </div>

            <div className=" text-center">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                LET ME <span className="purple">INTRODUCE</span> MYSELF
              </h1>
              <p className="home-about-body mt-2 leading-relaxed text-sm sm:text-base">
                I&apos;m a passionate developer who enjoys building practical and
                creative solutions for the web.
                <br />
                I have a good understanding of{" "}
                <b className="purple">C, C++, Java, and JavaScript.</b>
                <br />
                My interests lie in developing modern{" "}
                <b className="purple">web applications</b>.
                {/* <br />
                <br />
                I work with <b className="purple">Node.js</b> for backend
                development and enjoy building UIs with{" "}
                <b className="purple">React.js and Tailwind CSS</b>.
                <br />
                Currently, I’m learning <b className="purple">Next.js</b>, and
                this portfolio is built using <b className="purple">Next.js</b>.
                <br />
                I’m continuously learning and love contributing to projects when
                I can.*/}
                <WrapButton className="mt-10 relative z-10" href="/vyom-sagar.pdf" >
            <IoReaderOutline className="animate-spin "/>
            My Resume
        </WrapButton>
              </p> 
            </div>
          </div>
         
      </BackgroundLines>
       
      
      
</div>
      <TextScroll className="mt-40 w-[100vw]" text="Hello I'm Vyom Sagar" />
      </LampContainer>

      <ContainerScroll titleComponent={<h1></h1>}>
        <div>
          <CardCarousel images={images}
          autoplayDelay={2000}
          showPagination={false} 
          showNavigation={true}
          />


        </div>
      </ContainerScroll>
    </div>
  );
};

export default Page;
