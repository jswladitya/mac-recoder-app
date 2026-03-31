"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const headings = React.useMemo<Heading[]>(() => {
    if (typeof document === "undefined") return [];
    const headingElements = document.querySelectorAll("h1, h2");
    const headingsArray: Heading[] = [];

    headingElements.forEach((element) => {
      if (element.id) {
        headingsArray.push({
          id: element.id,
          text: element.textContent || "",
          level: parseInt(element.tagName.charAt(1)),
        });
      }
    });

    return headingsArray;
  }, []);
  const [activeId, setActiveId] = useState<string>("");

  const handleClick = async (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActiveId(id);
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className={cn("space-y-2", className)}>
      <h4 className="text-sm font-semibold text-foreground mb-4">On this page</h4>
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => handleClick(heading.id)}
                className={cn(
                  "block w-full text-left text-sm transition-colors hover:text-foreground text-muted-foreground",
                  {
                    "text-primary font-medium underline underline-offset-4": activeId === heading.id,
                  }
                )}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
