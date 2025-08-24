import { HyperText } from "@/components/magicui/hyper-text";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { FloatingDock } from "@/components/ui/floating-dock";
import MaskedDiv from "@/components/ui/masked-div";
import { IoHome, IoPerson, IoReaderOutline, IoRibbon, IoSchool } from "react-icons/io5";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export const allSkillsData = [
  // Languages
  {
    title: "Java",
    desc: "Strong in Java with OOPs, DSA problem-solving, and small app development.",
    img: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    level1: "Advanced",
    level2: "OOPs & DSA",
  },
  {
    title: "C",
    desc: "Good fundamentals in C, pointers, memory management, and system-level programming.",
    img: "https://img.icons8.com/?size=100&id=shQTXiDQiQVR&format=png&color=000000",
    level1: "Intermediate",
    level2: "Pointers & Memory",
  },
  {
    title: "C++",
    desc: "Proficient in C++ with OOPs, STL, templates, and competitive programming.",
    img: "https://cdn.simpleicons.org/cplusplus",
    level1: "Advanced",
    level2: "STL & OOPs",
  },

  // Frontend
  {
    title: "HTML",
    desc: "Strong grasp of semantic HTML and modern markup standards.",
    img: "https://cdn.simpleicons.org/html5",
    level1: "Advanced Level",
    level2: "SEO & Accessibility Friendly",
  },
  {
    title: "CSS",
    desc: "Proficient in styling, animations, and responsive design.",
    img: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
    level1: "Advanced Level",
    level2: "Flexbox, Grid, Media Queries",
  },
  {
    title: "JavaScript",
    desc: "Skilled in modern JS including ES6+, DOM manipulation, and APIs.",
    img: "https://cdn.simpleicons.org/javascript",
    level1: "Advanced Level",
    level2: "Asynchronous Programming, Fetch API",
  },
  {
    title: "React",
    desc: "Building dynamic web apps using components, hooks, and routing.",
    img: "https://cdn.simpleicons.org/react",
    level1: "Advanced Level",
    level2: "Hooks, State Management, Routing",
  },

  // Backend
  {
    title: "PHP",
    desc: "Have experience building basic backend logic and forms using PHP and XAMPP.",
    img: "https://cdn.simpleicons.org/php",
    level1: "Intermediate Level",
    level2: "Form Handling, MySQL Integration",
  },
  {
    title: "Node.js",
    desc: "Currently learning Node.js to build backend APIs and work with MongoDB.",
    img: "https://cdn.simpleicons.org/node.js",
    level1: "Beginner to Intermediate",
    level2: "Express.js, REST APIs (In Progress)",
  },
  {
    title: "Flask",
    desc: "Experience in building RESTful APIs using Flask. Created basic backend logic and handled routing, requests, and JSON responses.",
    img: "https://img.icons8.com/?size=100&id=hCWb1IvpcBZ0&format=png&color=000000",
    level1: "Beginner to Intermediate",
    level2: "Flask, REST APIs",
  },

  // Databases
  {
    title: "SQL",
    desc: "Comfortable writing queries, joins, and designing relational schemas.",
    img: "https://cdn.simpleicons.org/mysql",
    level1: "Intermediate Level",
    level2: "MySQL, XAMPP, phpMyAdmin",
  },
  {
    title: "MongoDB",
    desc: "Working knowledge of NoSQL database used in MERN stack projects.",
    img: "https://cdn.simpleicons.org/mongodb",
    level1: "Beginner to Intermediate",
    level2: "CRUD Operations, Mongoose (In Progress)",
  },

  // Additional
  {
    title: "Tailwind CSS",
    desc: "Utility-first CSS for building modern, responsive UI quickly.",
    img: "https://cdn.simpleicons.org/tailwindcss",
    level1: "Advanced Level",
    level2: "Mobile-first & Custom Themes",
  },
  {
    title: "Bootstrap",
    desc: "Fast prototyping with prebuilt responsive components.",
    img: "https://cdn.simpleicons.org/bootstrap",
    level1: "Intermediate Level",
    level2: "Grid System, Utility Classes",
  },
  {
    title: "React Bootstrap",
    desc: "Utilized React Bootstrap components to simplify UI building with responsiveness and React compatibility.",
    img: "https://icons.getbootstrap.com/assets/img/icons-hero.png",
    level1: "Intermediate Level",
    level2: "Card, Carousel, Modals, Forms",
  },
  {
    title: "XAMPP",
    desc: "PHP & MySQL local development with Apache stack.",
    img: "https://cdn.simpleicons.org/xampp",
    level1: "Intermediate Level",
    level2: "Database Setup, Local Hosting",
  },
  {
    title: "GSAP",
    desc: "Creating animations for better interactivity in UI.",
    img: "https://cdn.simpleicons.org/greensock",
    level1: "Intermediate Level",
    level2: "Scroll Animations, Timelines",
  },
  {
    title: "WordPress",
    desc: "Experience in customizing themes and working with plugins.",
    img: "https://cdn.simpleicons.org/wordpress",
    level1: "Intermediate Level",
    level2: "Theme Customization, Blogging",
  },
  {
    title: "Git",
    desc: "Version control with Git CLI and GitHub integration.",
    img: "https://cdn.simpleicons.org/git",
    level1: "Advanced Level",
    level2: "Branching, Merging, Conflict Handling",
  },
  {
    title: "GitHub",
    desc: "Code collaboration, repositories, and GitHub Pages.",
    img: "https://cdn.simpleicons.org/github",
    level1: "Advanced Level",
    level2: "Pull Requests, Project Management",
  },
];

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

const skills = () => {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex flex-col w-full h-auto items-center bg-slate-950 justify-center overflow-hidden">
      <div>
        <IconCloud images={images} />
      </div>
      <FloatingDock 
              items={items} 
              desktopClassName="fixed bottom-6 text-white left-1/2 -translate-x-1/2 shadow-lg z-99"
              mobileClassName="fixed bottom-6 text-white right-6 z-99"></FloatingDock>
      <div className="text-center">
        <HyperText className="text-slate-100 font-bold">Skills i have</HyperText>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 w-full max-w-7xl px-4">
          {allSkillsData.map(({ title, desc, img, level1, level2 }, idx) => (
            <div
              key={title}
              className="skill-card bg-slate-900 rounded-xl p-4 shadow-lg flex flex-col items-center text-center"
            >
              <MaskedDiv
                maskType={"type-1"}
                size={0.8}
                backgroundColor="bg-slate-700"
                className="mb-4 w-full max-w-[160px]"
              >
                <img src={img} alt={title} className="w-full h-auto" />
              </MaskedDiv>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-gray-400 text-sm mt-1">{desc}</p>
              <small className="text-gray-500 mt-2">
                {level1} | {level2}
              </small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default skills;
