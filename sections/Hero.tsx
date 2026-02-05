"use client";

import { motion } from "framer-motion";
import BtnAction from "@/components/BtnAction";

const HERO_TITLE_PREFIX = "Dra.";
const HERO_TITLE_NAME = "Camila Neiva";
const HERO_SUBTITLE = "Psiquiatra em Macapá - AP";
const HERO_TAGLINE =
  "Não se trata de uma consulta, é o primeiro passo da sua jornada de transformação.";
const HERO_CTA_CAPTION = "Agende sua consulta";
const HERO_CTA_HREF = "#agendar";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const Hero = () => {
  const sectionClasses =
    "w-full px-5 bg-background-primary text-text-primary relative bg-hero bg-cover bg-no-repeat bg-center";
  const titleClasses =
    "text-hero-mobile md:text-hero leading-none font-garet text-dark-brown tracking-wider";
  const subtitleWrapClasses = "py-4";
  const subtitleClasses =
    "text-subtitle-mobile md:text-subtitle leading-none font-garet";
  const taglineClasses =
    "text-hero-text-mobile md:text-hero-text w-full md:w-5/12 mx-auto md:mx-0";

  return (
    <section id="home" className={sectionClasses}>
      <motion.div
        className="flex flex-col justify-end py-6 md:py-16 w-full h-dvh max-container"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <div className="w-full md:w-4/6">
          <motion.h1
            className={`${titleClasses} mb-4 md:mb-16`}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            {HERO_TITLE_PREFIX}
            <br />
            Camila
            <br />
            Neiva
          </motion.h1>

          <motion.div
            className={subtitleWrapClasses}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <p className={subtitleClasses}>{HERO_SUBTITLE}</p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-end justify-between">
          <motion.p
            className={taglineClasses}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            {HERO_TAGLINE}
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
            <BtnAction
              href={HERO_CTA_HREF}
              styles="mt-5 text-xl md:text-2xl"
              caption={HERO_CTA_CAPTION}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
