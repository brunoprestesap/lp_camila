"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const OndeAtendo = () => {
  return (
    <section className="px-5 font-garet relative lg:bg-atendo bg-contain bg-no-repeat bg-right padding-y bg-slate-50">
      <div className="max-container">
        <motion.div
          className="flex justify-between flex-col lg:flex-row gap-10 items-center lg:items-start"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="text-center lg:text-left xl:w-7/12 mt-12 lg:max-w-xl text-text-primary">
            <motion.h1
              className="title font-bold leading-none text-text-quaternary tracking-wide"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              Onde eu atendo
            </motion.h1>

            <div className="flex flex-col gap-10 mt-10">
              <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                <p className="paragraph font-extrabold">INSTITUTO AMPARO</p>
                <p className="paragraph">Av. Ataíde Teive, 1217,</p>
                <p className="paragraph">Sala 3, 1° andar</p>
                <p className="paragraph">Macapá - AP</p>
              </motion.div>

              <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                <p className="paragraph font-extrabold">E-MAIL</p>
                <p className="paragraph">gestao@institutoamparo.com</p>
              </motion.div>

              <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                <p className="paragraph font-extrabold">TELEFONE</p>
                <p className="paragraph">(96) 99135-4590</p>
              </motion.div>

              <motion.div variants={fadeInUp} transition={{ duration: 0.5 }}>
                <p className="paragraph font-extrabold">REDES SOCIAIS</p>
                <p className="paragraph">@camilaneiva.dra</p>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="relative d-block lg:hidden w-full h-[450px] md:w-[450px] md:h-[650px]"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/onde_atendo.webp"
              alt="acomp_psiquico"
              layout="fill"
              className="object-cover object-center"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OndeAtendo;
