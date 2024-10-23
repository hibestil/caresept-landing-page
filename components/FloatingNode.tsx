"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const FloatingNodes = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createNode = () => {
      const node = document.createElement("div");
      node.className = "absolute w-2 h-2 bg-primary/20 rounded-full";
      
      const size = Math.random() * 10 + 5;
      node.style.width = `${size}px`;
      node.style.height = `${size}px`;
      
      const startX = Math.random() * container.offsetWidth;
      const startY = container.offsetHeight + 10;
      
      node.style.left = `${startX}px`;
      node.style.top = `${startY}px`;
      
      const duration = Math.random() * 3000 + 2000;
      const endX = startX + (Math.random() * 200 - 100);
      const endY = -10;
      
      container.appendChild(node);
      
      const animation = node.animate(
        [
          { transform: `translate(0, 0)` },
          { transform: `translate(${endX - startX}px, ${endY - startY}px)` }
        ],
        {
          duration,
          easing: "linear"
        }
      );
      
      animation.onfinish = () => {
        node.remove();
      };
    };

    const interval = setInterval(createNode, 200);

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
};