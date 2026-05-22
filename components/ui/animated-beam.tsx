"use client";

import React, { RefObject, useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam = React.memo(
  ({
    className,
    containerRef,
    fromRef,
    toRef,
    curvature = 0,
    reverse = false,
    pathColor = "gray",
    pathWidth = 2,
    pathOpacity = 0.2,
    gradientStartColor = "#ffaa40",
    gradientStopColor = "#9c40ff",
    delay = 0,
    duration = 2,
    startXOffset = 0,
    startYOffset = 0,
    endXOffset = 0,
    endYOffset = 0,
  }: AnimatedBeamProps) => {
    const id = useId();
    const [pathD, setPathD] = useState("");
    const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

    // Calculate coordinates and paths
    useEffect(() => {
      const updatePath = () => {
        if (!containerRef.current || !fromRef.current || !toRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const fromRect = fromRef.current.getBoundingClientRect();
        const toRect = toRef.current.getBoundingClientRect();

        // Calculate positions relative to the container
        const startX = fromRect.left - containerRect.left + fromRect.width / 2 + startXOffset;
        const startY = fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset;
        const endX = toRect.left - containerRect.left + toRect.width / 2 + endXOffset;
        const endY = toRect.top - containerRect.top + toRect.height / 2 + endYOffset;

        // Curve control point calculation
        // Q startX,startY controlX,controlY endX,endY
        const controlX = (startX + endX) / 2;
        const controlY = (startY + endY) / 2 - curvature;

        const d = `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`;
        setPathD(d);
        setSvgDimensions({
          width: containerRect.width,
          height: containerRect.height,
        });
      };

      // Set up resize observer on container and refs to update coordinates on layout change
      const resizeObserver = new ResizeObserver(() => {
        updatePath();
      });

      if (containerRef.current) resizeObserver.observe(containerRef.current);
      if (fromRef.current) resizeObserver.observe(fromRef.current);
      if (toRef.current) resizeObserver.observe(toRef.current);

      // Trigger initial calculation
      updatePath();

      // Fallback scroll/resize event listeners
      window.addEventListener("resize", updatePath);
      window.addEventListener("scroll", updatePath);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener("resize", updatePath);
        window.removeEventListener("scroll", updatePath);
      };
    }, [
      containerRef,
      fromRef,
      toRef,
      curvature,
      startXOffset,
      startYOffset,
      endXOffset,
      endYOffset,
    ]);

    const strokeDasharray = "10 20";

    return (
      <svg
        fill="none"
        width={svgDimensions.width}
        height={svgDimensions.height}
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "pointer-events-none absolute inset-0 z-0",
          className
        )}
      >
        {/* Background track path */}
        <path
          d={pathD}
          stroke={pathColor}
          strokeWidth={pathWidth}
          strokeOpacity={pathOpacity}
          strokeLinecap="round"
        />

        {/* Animated beam gradient path */}
        <path
          d={pathD}
          stroke={`url(#${id})`}
          strokeWidth={pathWidth}
          strokeLinecap="round"
          className="animate-beam"
          style={
            {
              "--beam-duration": `${duration}s`,
              "--beam-delay": `${delay}s`,
            } as React.CSSProperties
          }
        />

        <defs>
          <motion.linearGradient
            id={id}
            gradientUnits="userSpaceOnUse"
            initial={{
              x1: reverse ? "100%" : "0%",
              y1: "0%",
              x2: reverse ? "200%" : "-100%",
              y2: "0%",
            }}
            animate={{
              x1: reverse ? "-100%" : "100%",
              y1: "0%",
              x2: reverse ? "0%" : "200%",
              y2: "0%",
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <stop stopColor={gradientStartColor} stopOpacity="0" />
            <stop stopColor={gradientStartColor} stopOpacity="1" />
            <stop stopColor={gradientStopColor} stopOpacity="1" />
            <stop stopColor={gradientStopColor} stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
    );
  }
);

AnimatedBeam.displayName = "AnimatedBeam";
