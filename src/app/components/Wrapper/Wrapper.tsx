"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0, x: 0, y: -100 }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, delay: 0.25 },
        }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
