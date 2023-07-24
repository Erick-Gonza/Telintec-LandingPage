"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, x: -5 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, y: -20, x: 5 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
