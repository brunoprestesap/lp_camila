"use client";

import { motion } from "framer-motion";

interface BtnProps {
  caption: string;
  styles: string;
  href?: string;
  target?: string;
  rel?: string;
}

const baseButtonClasses =
  "border border-text-primary px-4 py-2 md:px-8 md:py-4 rounded-2xl";

const BtnAction = ({ caption, styles, href, target, rel }: BtnProps) => {
  const combinedClasses = `${styles} ${baseButtonClasses}`.trim();
  const content = (
    <p className="text-center font-garet text-primary">{caption}</p>
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 },
  };

  return (
    <div className="flex justify-center items-center">
      {href ? (
        <motion.a
          href={href}
          target={target}
          rel={rel}
          className={combinedClasses}
          {...motionProps}
        >
          {content}
        </motion.a>
      ) : (
        <motion.div className={combinedClasses} {...motionProps}>
          {content}
        </motion.div>
      )}
    </div>
  );
};

export default BtnAction;
