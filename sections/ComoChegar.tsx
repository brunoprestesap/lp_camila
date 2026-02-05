"use client";

import { motion } from "framer-motion";

const ComoChegar = () => {
  return (
    <section className="font-garet px-5 padding-y">
      <div className="max-container flex flex-col items-center">
        <motion.h1
          className="title tracking-wide font-bold self-center lg:self-start text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          COMO CHEGAR
        </motion.h1>

        <motion.div
          className="w-full h-fit mt-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.271017480774!2d-51.0633039!3d0.0305182!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d61e10bcf1b86ed%3A0x6f027f4a0e7e4563!2sPsiquiatra%20em%20Macap%C3%A1%20-%20Dra.%20Camila%20Neiva!5e0!3m2!1sen!2sbr!4v1732805444017!5m2!1sen!2sbr"
            loading="lazy"
            className="w-full h-[400px] md:h-[700px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ComoChegar;
