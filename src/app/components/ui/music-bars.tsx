"use client";

import { motion } from "motion/react";

export function MusicBars() {
  const bars = [0, 1, 2, 3];

  return (
    <div className="flex items-end gap-[3px] h-4">
      {bars.map((bar) => (
        <motion.div
          key={bar}
          className="w-[3px] bg-green-400 rounded-full"
          animate={{
            height: ["4px", "14px", "6px", "16px", "5px"],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bar * 0.15,
          }}
        />
      ))}
    </div>
  );
}
