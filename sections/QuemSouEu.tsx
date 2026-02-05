"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BtnAction from "@/components/BtnAction";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const QuemSouEu = () => {
  return (
    <section className="bg-background-quarternary px-5 padding-y font-garet">
      <div className="max-container">
        <motion.div
          className="flex justify-between flex-col-reverse lg:flex-row items-center gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            className="relative w-full h-[500px] md:w-[450px] md:h-[650px] mt-5"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/quem_sou_eu.webp"
              alt="quem_sou_eu"
              layout="fill"
              className="object-cover object-center rounded-tl-[200px] rounded-br-[200px] rounded-tr-[100px] rounded-bl-[100px]"
            />
          </motion.div>

          <div className="lg:w-7/12 space-y-6">
            <motion.h1
              className="title font-bold mb-4 md:mb-20"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              Quem sou eu
            </motion.h1>

            <motion.p
              className="big-text text-justify mt-3"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              Tenho 39 anos, sou goiana de coração, médica formada pela
              Universidade Federal do Amapá. Cursei pós-graduação em Psiquiatria
              pelo Albert Einstein do RJ e Psiquiatria Intervencionista pelo
              HC-USP. Além disso, fiz Enfermagem e Mestrado pela UNICAMP.
              Trabalho desde 2019 ajudando pessoas a encontrar equilíbrio e
              tranquilidade emocional. Prezo pelo atendimento responsável e
              humanizado e será uma grande satisfação atender você e poder te
              ajudar também.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <BtnAction
                styles="mt-10 lg:ml-auto text-xl md:text-2xl"
                caption="Agende sua consulta"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuemSouEu;
