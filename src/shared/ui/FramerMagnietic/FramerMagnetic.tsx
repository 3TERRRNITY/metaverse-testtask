import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FramerMagneticProps } from "../../api/types";

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
      ref={ref}
      style={{
        position: "absolute",
        borderRadius: "50%",
        height: "526px",
        width: "526px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 500,
        mass: 5,
      }}
    >
      {children}
    </motion.div>
  );
}
