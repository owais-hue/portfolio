import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Profile from "@/public/Awais_Fazal.jpg";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h3 className={styles.title}>
              Hi, I&apos;m Awais<span>.</span>
            </h3>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              I&apos;m a <span>Mobile App Developer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
            Software Engineer and Mobile App Developer, working on Flutter
and Dart for building highly responsive apps. Committed to continuous skill enhancement, adept at problem-solving, and possesses strong communication skills. Enthusiastic about leading high-performance teams and seeking opportunities to contribute to innovative organizations.
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="Awais Fazal | Frontend Developer"
            width={250}
            height={250}
          />
        </motion.div>
      </div>
      <DotGrid />
    </section>
  );
};
