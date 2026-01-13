"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

/* ---------------- Skeleton Components ---------------- */

const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  const variantsSecond = {
    initial: { x: 0 },
    animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-black/[0.2] dark:bg-dot-white/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex items-center space-x-2 rounded-full border p-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex items-center space-x-2 rounded-full border p-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  const variants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 0.3 } },
    hover: { width: ["0%", "100%"], transition: { duration: 2 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          variants={variants}
          className="h-4 rounded-full bg-neutral-200 dark:bg-neutral-800 max-w-svw"
        />
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  return (
    <motion.div
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 6, repeat: Infinity }}
      className="flex flex-1 rounded-lg"
      style={{
        background:
          "linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab)",
        backgroundSize: "400% 400%",
      }}
    />
  );
};

const SkeletonFour = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-1 items-center justify-center bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <p className="text-sm text-neutral-500 text-center">
        AI continuously evaluates patient risk and urgency.
      </p>
    </motion.div>
  );
};

const SkeletonFive = () => {
  return (
    <motion.div
      whileHover={{ x: 10 }}
      className="flex flex-1 items-center justify-center bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <p className="text-sm text-neutral-500">Voice → Medical Summary</p>
    </motion.div>
  );
};

/* ---------------- Medical AI Content ---------------- */

const items = [
  {
    title: "AI Medical Voice Assistant",
    description: (
      <span className="text-sm">
        A conversational AI voice agent that listens to patients and responds
        with medical intelligence.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Smart Symptom Collection",
    description: (
      <span className="text-sm">
        Collect patient symptoms automatically through natural voice
        conversations.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Clinical Context Understanding",
    description: (
      <span className="text-sm">
        AI understands medical history and asks intelligent follow-up questions.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Risk & Priority Analysis",
    description: (
      <span className="text-sm">
        Detect emergencies and prioritize patients based on voice data.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Medical Voice Reports",
    description: (
      <span className="text-sm">
        Generate accurate voice-to-text summaries for doctors and clinics.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
