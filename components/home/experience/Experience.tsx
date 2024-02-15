import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "SAFE-RH",
    position: "Flutter Developer",
    time: "Dec 2022 - Jan 2024",
    location: "Islamabad, Pakistan",
    description:
      "My job responsibilities are requirement analysis, API integration, design, development evaluation and maintenance of mobile application for maternal health care system under Erums+ SAFE-RH project at Comsats University Islamabad, Wah campus",
    tech: [
      "Flutter",
      "Dart",
      "Git",
      "TFS Azure",
      "Figma",
      "Rest API's",
      "Third Party API's"
    ],
  },
  {
    title: "Fivver",
    position: "Full Stack Flutter Developer",
    time: "Aug 2022 – Present",
    location: "Islamabad, Pakistan",
    description:
      "Developed and maintained cross-platform mobile applications using Flutter framework for iOS and Android platforms. Integrated Firebase services to enhance app functionality, including Firestore for real-time database management and Firebase Worked closely with clients to understand their requirements and provide technical support throughout the development lifecycle",
      tech: [
        "Flutter",
        "Dart",
        "Git",
        "TFS Azure",
        "Figma",
        "Rest API's",
        "Third Party API's",
        "Node.js"
      ],
  },
  
];
