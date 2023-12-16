import { useRef, useState } from "react";
import { motion } from "framer-motion";
interface FramerMagneticProps {
  children: React.ReactNode;
}

export default function FramerMagnetic({ children }: FramerMagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const currentRef = ref.current;
    if (currentRef) {
      const { height, width, left, top } = currentRef.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX, y: middleY });
    }
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 35, damping: 10, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}