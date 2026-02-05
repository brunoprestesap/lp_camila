"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BtnAction from "@/components/BtnAction";

const cards = [
  {
    name: "Jackelyne Mendes",
    text: "O instituto Amparo é o local onde encontramos acolhimento e assistência em um único lugar, o tratamento com a EMT foi imprescindível para melhorar meu quadro clínico em apenas 03 meses de acompanhamento, sem falar no atendimento totalmente personalizado e individualizado que a Dra Camila Neiva tem com todos os seus pacientes. Indico a clínica de olhos fechados ♥️",
  },
  {
    name: "Gelmires Queiroz",
    text: "Iniciei meu tratamento de ansiedade com Estimulação Magnética transcraniana (EMT) e resposta tem sido de excelente. Consegui controlar os sintomas sem a necessidade de medicamentos e isso por si só já é um ganho a saúde do paciente. Sem dúvida recomendo. Agradeço a Dra Camila Neiva e a toda equipe do instituto Amparo.",
  },
  {
    name: "Lucas Ribeiro",
    text: "Me senti acolhido e compreendido desde a primeira consulta. Sua capacidade profissional, mas também me ouvir com atenção e empatia foi fundamental para o meu progresso. Ótimo atendimento e excelente profissional.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

const PessoasDizem = () => {
  return (
    <section className="px-5 padding-y">
      <div className="max-container">
        <motion.div
          className="flex flex-col items-center text-text-primary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="title font-bold text-center">
            O que as pessoas dizem sobre mim
          </h1>
        </motion.div>

        <div className="flex flex-wrap justify-evenly mt-20 gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.name}
              className="md:w-[300px] flex flex-col items-center text-center"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              <h3 className="text-hero-text font-bold mb-6">{card.name}</h3>
              <p>{card.text}</p>
              <span className="relative w-[150px] h-[70px]">
                <Image
                  src="/assets/stars.png"
                  alt="stars"
                  layout="fill"
                  className="object-contain object-center"
                />
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <BtnAction
            styles="mt-10 lg:ml-auto rounded-full bg-background-primary border-none text-text-section-mobile md:text-text-section"
            caption="100+ AVALIAÇÕES NO GOOGLE"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PessoasDizem;
