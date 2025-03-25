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
        className="fixed top-0 left-0 right-0 h-[8px] bg-blue-200 z-[9999]"
        style={{ scaleX: scrollYProgress, originX: 0 }}
      />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
