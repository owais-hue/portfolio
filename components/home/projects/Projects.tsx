import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  // {
  //   title: "The Prophet's Path",
  //   imgSrc: "/project-imgs/1.jpeg",
  //   code: "https://www.github.com",
  //   projectLink: "https://youtu.be/gWvvT17o35g",
  //   tech: ["Flutter", "Node.js", "Sytled Components","Yolo","Tensor Flow"],
  //   description:
  //     "The Prophet’s Path” is a machine-learning hybrid mobile app that will detect your mood via camera categorize it and then show you the numbers of Sunna Dua’s which will help you in that mood with more features like Qibla Direction, Tasbeeh Counter, Search by topic and Kid's videos",
  //   modalContent: (
  //     <>
  //       <p>
  //        Worked as a senior developer and created dynamic reusable components, integrated calendly, messaging and project management features.
  //       </p>
  //     </>
  //   ),
  // },
  {
    title: "The SAFE-RH",
    imgSrc: "/project-imgs/SAFAE_RH.jpg",
    code: "#",
    projectLink: "#",
    tech: ["Flutter", "jango", "Sytled Components","Yolo","Tensor Flow"],
    description:"The Erasmus+ SAFE-Rural-Health program in Pakistan aims to enhance healthcare access for women, children, and the elderly in remote areas. It targets reducing mortality rates, addressing maternity issues, and providing elderly monitoring. The program builds a digital healthcare community to develop effective solutions bridging health and computing.",
    modalContent: (
      <>
        <p>
         Worked as a senior developer and created dynamic reusable components, integrated calendly, messaging and project management features.
        </p>
      </>
    ),
  },
  {
    title: "Kitchen Genie",
    imgSrc: "/project-imgs/kitchen.png",
    code: "https://github.com/",
    projectLink: "https://github.com/",
    tech: ["Flutter", "Dart"],
    description:
      "This Flutter and Firebase-backed app transforms meal planning and grocery shopping with AI recipe suggestions, shared schedules/lists, and automated management, promoting healthy habits and household coordination",
    modalContent: (
      <>
     
      </>
    ),
  },
  {
    title: "ClassRoom Monsters",
    imgSrc: "/project-imgs/classroom_monsters.png",
    code: "",
    projectLink: "",
    tech: ["Flutter", "Dart", "Firebase"],
    description:
      "ClassRoomMonsters is an interactive educational app gamifying classrooms with a user-friendly admin panel, evolving student avatars, dice-rolling games, and peer collaboration features",
    modalContent: (
      <>
             <p>
         Worked as a senior developer and created dynamic reusable components, integrated calendly, messaging and project management features.
        </p>
      </>
    ),
  },
];
