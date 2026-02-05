"use client";

import { motion } from "framer-motion";

const items = [
  "Ansiedade",
  "Autismo",
  "Depressão",
  "Compulsão alimentar",
  "Insônia",
  "TDAH",
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const PossoAjudar = () => {
  return (
    <section className="bg-background-secondary px-5 font-ttwellingtons padding-y font-bold">
      <div className="max-container flex flex-col items-center">
        <motion.h1
          className="title text-text-secondary text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          Em que posso te ajudar
        </motion.h1>

        <motion.div
          className="text-hero-text flex flex-col items-center bg-text-secondary py-5 px-12 rounded-lg mt-6 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
        >
          {items.map((label) => (
            <motion.h2 key={label} variants={item}>
              {label}
            </motion.h2>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PossoAjudar;
