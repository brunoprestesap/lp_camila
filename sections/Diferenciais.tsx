"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Diferenciais = () => {
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
          className="relative w-full h-[500px] md:w-[450px] md:h-[650px] mt-5"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/assets/diferenciais.webp"
            alt="diferenciais"
            layout="fill"
            className="object-cover object-center md:object-bottom md:rounded-t-full rounded-xl"
          />
        </motion.div>

        <div className="lg:w-7/12 space-y-6">
          <motion.h1
            className="title font-bold tracking-wide"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            Diferenciais
          </motion.h1>

          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
            <span className="bg-text-secondary paragraph font-bold p-2 rounded-lg">
              ATENDIMENTO HUMANIZADO
            </span>
            <p className="paragraph text-justify mt-3">
              Fazemos questão de uma escuta atenta e humanizada. Prezamos pelo
              cuidado e humanização nos atendimentos por meio de um atendimento
              acolhedor. Atuamos com base na ética, empatia e respeito pela vida,
              com objetivo de melhorar cada vez mais sua qualidade de vida.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
            <span className="bg-text-secondary paragraph font-bold p-2 rounded-lg">
              ACOLHIMENTO FAMILIAR
            </span>
            <p className="paragraph text-justify mt-3">
              Um diferencial que marca nosso atendimento é o espaço concedido aos
              familiares. O propósito da melhora integral do paciente inclui
              disponibilidade, acesso ao familiar para esclarecimento de dúvidas e
              participação no tratamento, respeitando as individualidades da
              pessoa e seguindo o sigilo médico.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
            <span className="bg-text-secondary paragraph font-bold p-2 rounded-lg">
              HORA MARCADA
            </span>
            <p className="paragraph text-justify mt-3">
              As consultas são realizadas por hora marcada, seja na modalidade
              de atendimento presencial ou por telemedicina. Em cada encontro, a
              pessoa tem seu espaço garantido para relatar suas dificuldades,
              sofrimento e angústias, respeitando seu sigilo.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Diferenciais;
