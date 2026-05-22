"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 1500 }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    );

    useEffect(() => {
      if (childrenArray.length === 0) return;

      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % (childrenArray.length + 1));
      }, delay);

      return () => clearInterval(interval);
    }, [childrenArray.length, delay]);

    const showChildren = useMemo(() => {
      // Return a slice of children to animate in
      const activeCount = index === 0 ? 1 : index;
      return childrenArray.slice(0, activeCount);
    }, [index, childrenArray]);

    return (
      <div className={`flex flex-col gap-3 w-full ${className}`}>
        <AnimatePresence initial={false}>
          {showChildren.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key || ""}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0.85, opacity: 0, y: 15 },
    animate: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0.85, opacity: 0, y: -15 },
    transition: { type: "spring" as const, stiffness: 280, damping: 25 },
  };

  return (
    <motion.div {...animations} className="w-full">
      {children}
    </motion.div>
  );
}
