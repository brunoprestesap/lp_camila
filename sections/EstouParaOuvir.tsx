"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const EstouParaOuvir = () => {
  return (
    <section className="bg-background-primary px-5 padding-y font-garet">
      <motion.div
        className="max-container flex justify-between flex-col-reverse lg:flex-row items-center gap-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div
          className="relative w-full h-[400px] md:w-[400px] md:h-[450px] mt-5"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/estou_para_ouvir.webp"
            alt="diferenciais"
            layout="fill"
            className="object-cover object-center md:rounded-tl-[150px] scale-x-[-1]"
          />
        </motion.div>

        <div className="lg:w-6/12 space-y-6">
          <motion.p
            className="big-text text-justify mt-3"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            Estou aqui para ouvir suas preocupações e junto com você buscar
            maneiras de melhorar sua saúde mental e reencontrar sua paz e
            bem-estar.
          </motion.p>

          <motion.p
            className="big-text text-justify mt-3"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            Vamos juntos definir o melhor plano de tratamento para você, seja ele
            com terapia, mudanças no estilo de vida, medicamentos ou uma
            combinação deles.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default EstouParaOuvir;
