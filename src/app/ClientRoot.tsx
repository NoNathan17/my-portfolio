'use client';

import { motion, useScroll } from "motion/react"
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        className="fixed top-0 left-0 right-0 h-[7px] z-[9999] origin-left"
        style={{ scaleX: scrollYProgress,
            background: "linear-gradient(to right, #1bbdf5, #005bea)", // blue gradient
            boxShadow: "0 0 12px rgba(27, 189, 245, 0.6)", // blue glow
            borderRadius: "4px",
            transformOrigin: "left", }}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
