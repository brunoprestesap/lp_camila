"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

const AcompPsiquico = () => {
  return (
    <section className="bg-background-secondary text-text-secondary px-5 padding-y font-garet">
      <div className="max-container">
        <motion.div
          className="flex justify-between flex-col-reverse lg:flex-row items-center gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div
            className="relative w-full h-[450px] md:w-[450px] md:h-[550px] mt-5"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/acomp_psiquico.webp"
              alt="acomp_psiquico"
              layout="fill"
              className="object-cover object-center rounded-3xl scale-x-[-1]"
            />
          </motion.div>

          <div className="lg:w-7/12 space-y-6">
            <motion.p
              className="big-text text-justify"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              O acompanhamento psiquiátrico é uma das ferramentas do tratamento
              do sofrimento mental.
            </motion.p>

            <motion.p
              className="big-text text-justify"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              Assim como o corpo, nossa mente também precisa de atenção.
            </motion.p>

            <motion.p
              className="big-text text-justify"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              Agende sua consulta e juntos encontraremos o melhor plano de
              cuidados para você.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcompPsiquico;
