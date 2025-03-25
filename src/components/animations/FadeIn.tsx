
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
  direction?: "up" | "right" | "none";
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  duration = 0.5,
  delay = 0,
  className,
  direction = "up",
}) => {
  const getAnimation = () => {
    switch (direction) {
      case "up":
        return "animate-fade-in";
      case "right":
        return "animate-fade-in-right";
      case "none":
        return "animate-scale-in";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <div
      className={cn(getAnimation(), className)}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
