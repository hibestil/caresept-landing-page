"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WorkflowAnimation = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { id: 1, label: "Start", x: 50, y: 50 },
    { id: 2, label: "Process", x: 200, y: 50 },
    { id: 3, label: "Decision", x: 350, y: 50 },
    { id: 4, label: "End", x: 500, y: 50 },
  ];

  const connections = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
  ];

  return (
    <div className="w-full h-full bg-background/50 backdrop-blur-sm p-4">
      <svg className="w-full h-full">
        {connections.map((conn, index) => {
          const from = nodes.find((n) => n.id === conn.from);
          const to = nodes.find((n) => n.id === conn.to);
          if (!from || !to) return null;

          return (
            <motion.path
              key={`${from.id}-${to.id}`}
              d={`M ${from.x + 60} ${from.y + 30} L ${to.x} ${to.y + 30}`}
              stroke={step >= index ? "hsl(var(--primary))" : "hsl(var(--muted))"}
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: step >= index ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            />
          );
        })}

        {nodes.map((node, index) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: step >= index ? 1 : 0.5,
              scale: step >= index ? 1 : 0.8
            }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <rect
              x={node.x}
              y={node.y}
              width="120"
              height="60"
              rx="8"
              fill={step >= index ? "hsl(var(--primary))" : "hsl(var(--muted))"}
              className="shadow-lg"
            />
            <text
              x={node.x + 60}
              y={node.y + 35}
              textAnchor="middle"
              fill="white"
              className="text-sm font-medium"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default WorkflowAnimation;