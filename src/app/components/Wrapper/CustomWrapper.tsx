"use client";

import { motion } from "framer-motion";

export default function CustomWrapper({
  children,
  position,
  delay,
}: {
  children: React.ReactNode;
  position: number;
  delay: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, x: position }}
      animate={{ opacity: 1, x: 0, transition: { delay } }}
      exit={{ opacity: 0, x: position }}
    >
      {children}
    </motion.section>
  );
}
