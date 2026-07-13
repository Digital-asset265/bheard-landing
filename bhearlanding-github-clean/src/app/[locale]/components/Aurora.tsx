"use client";

import { motion } from "framer-motion";

export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-purple-500/25 blur-3xl"
        animate={{ x: [0, 60, -20, 0], y: [0, 30, 80, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-10 right-[-160px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/20 blur-3xl"
        animate={{ x: [0, -80, 30, 0], y: [0, 60, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-220px] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl"
        animate={{ y: [0, -40, 30, 0], x: [0, 30, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
