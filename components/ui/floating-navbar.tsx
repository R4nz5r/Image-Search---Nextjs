"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: React.ReactNode }[];
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true); // visible by default
  const [lastScroll, setLastScroll] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < 50) {
        // Always show navbar near top
        setVisible(true);
      } else {
        if (current > lastScroll) {
          // scrolling down
          setVisible(false);
        } else {
          // scrolling up
          setVisible(true);
        }
      }
      setLastScroll(current);
    }
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit fixed top-10 inset-x-0 mx-auto rounded-full bg-indigo-500 shadow-lg z-50 px-8 py-3  items-center justify-center space-x-4",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={idx}
              href={navItem.link}
              className={cn(
                "flex items-center space-x-1 text-white hover:text-gray-200"
              )}
            >
              {navItem.icon && (
                <span className="block sm:hidden">{navItem.icon}</span>
              )}
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
