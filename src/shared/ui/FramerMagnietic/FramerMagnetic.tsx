import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface FramerMagneticProps {
  children: React.ReactNode;
}

export default function FramerMagnetic({ children }: FramerMagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });

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
    setPosition({ x: 50, y: 50 });
  };

  const { x, y } = position;
  return (
    <motion.div
      ref={ref}
      style={{
        position: "absolute",
        borderRadius: "50%",
        height: "426px",
        width: "426px",
      }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 100,
        mass: 5,
      }}
    >
      {children}
    </motion.div>
  );
}
