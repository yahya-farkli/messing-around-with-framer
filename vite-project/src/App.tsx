import "./styles.css";
import { motion } from "framer-motion";

export default function App() {
  return (
    <motion.div
      className="box"
      animate={{
        scale: [1, 1.5, 2, 1.5, 1],
        rotate: [0, 90, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    />
  );
}
