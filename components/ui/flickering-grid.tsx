"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "#6B7280",
  className,
  maxOpacity = 0.3,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width / (squareSize + gridGap));
      const rows = Math.ceil(canvas.height / (squareSize + gridGap));

      for (let x = 0; x < cols; x += 1) {
        for (let y = 0; y < rows; y += 1) {
          if (Math.random() < flickerChance) {
            ctx.fillStyle = `${color}${Math.floor(maxOpacity * 255)
              .toString(16)
              .padStart(2, "0")}`;
            ctx.fillRect(
              x * (squareSize + gridGap),
              y * (squareSize + gridGap),
              squareSize,
              squareSize
            );
          }
        }
      }
    };

    const interval = setInterval(draw, 120);
    return () => {
      clearInterval(interval);
      ro.disconnect();
    };
  }, [squareSize, gridGap, flickerChance, color, maxOpacity]);

  return (
    <div className={cn("h-full w-full", className)} {...props}>
      <canvas ref={canvasRef} className="pointer-events-none w-full h-full" />
    </div>
  );
};
