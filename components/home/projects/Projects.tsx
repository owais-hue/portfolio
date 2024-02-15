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
  {
    title: "The Prophet's Path",
    imgSrc: "/project-imgs/The_Prophet's_path.jpg",
    code: "https://www.github.com",
    projectLink: "https://youtu.be/gWvvT17o35g",
    tech: ["Flutter", "Node.js", "Sytled Components","Yolo","Tensor Flow"],
    description:
      "The Prophet’s Path” is a machine-learning hybrid mobile app that will detect your mood via camera categorize it and then show you the numbers of Sunna Dua’s which will help you in that mood with more features like Qibla Direction, Tasbeeh Counter, Search by topic and Kid's videos",
    modalContent: (
      <>
        <p>
         Worked as a senior developer and created dynamic reusable components, integrated calendly, messaging and project management features.
        </p>
      </>
    ),
  },
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
    title: "Meal App",
    imgSrc: "/project-imgs/Meal_App.png",
    code: "https://github.com/imtayyabzaman/Meal-App",
    projectLink: "https://github.com/imtayyabzaman/Meal-App",
    tech: ["Flutter", "Dart"],
    description:
      "A simple app where you can select your favorite meals and see their recipe and ingredients and also filter out meals according to their category.",
    modalContent: (
      <>
     
      </>
    ),
  },
];
