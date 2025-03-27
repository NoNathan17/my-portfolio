"use client"

import Link from "next/link";
import { FaGithub, FaLinkedin, FaRegFileAlt, FaArrowDown } from "react-icons/fa";
import { motion } from "motion/react";
import Typed from "typed.js";
import React, { useEffect, useRef } from "react";



export default function Landing() {
  const typedRef = useRef(null);

  useEffect(() => {
		const typed = new Typed(typedRef.current, {
			strings: ["hi! i'm nathan &#x1F604;"],
			typeSpeed: 100,
			startDelay: 600,
			showCursor: false,
		});
		return () => {
            typed.destroy();
        };
	}, []);

  return (
    <div id="/" className="flex flex-col h-screen">
      <div className="flex flex-col lg:flex-row mx-auto items-center justify-center w-full lg:w-5/6 h-full lg:h-3/4 gap-10 lg:gap-24">
        <div className="flex flex-col gap-4 lg:gap-5 w-11/12 lg:w-2/5 text-center lg:text-left">
          {/* intro stuff */}
            <p className="text-3xl md:text-4xl lg:text-7xl font-bold lg:min-h-[4.5rem]">
              <span ref={typedRef}/>
            </p>
            <motion.div 
              className="flex flex-col gap-2 lg:gap-5"
              initial={{ opacity: 0, x: -50, }}
              whileInView={{ opacity: 1, x: 0, }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              viewport={{once: true }}>
              <p className="text-sm md:text-lg lg:text-xl font-semibold"> full-stack dev | software engineering | CS @ UCI</p>
              <p className="text-sm md:text-lg lg:text-2xl font-light"> I&apos;m a self-motivated software developer passionate about creating and contributing to meaningful solutions.
              Always eager to learn and gain hands-on experience. &#x1F680;</p>

            {/* links */}
            <ul className="flex gap-4 lg:gap-7 justify-start text-3xl sm:text-4xl lg:text-5xl mx-auto lg:mx-0">
              <Link href="https://github.com/NoNathan17" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-7 lg:w-10 h-7 lg:h-10 transform hover:scale-110 transition duration-300"/>
              </Link>
              <Link href="https://linkedin.com/in/nathan-ong17" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-7 lg:w-10 h-7 lg:h-10 transform hover:scale-110 transition duration-300"/>
              </Link>
              <Link href="https://drive.google.com/file/d/1KpuuGPcz9wo03Zo70ziHRnwWvi419djy/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FaRegFileAlt className="w-7 lg:w-10 h-7 lg:h-10 transform hover:scale-110 transition duration-300"/>
              </Link>
            </ul>
            </motion.div>
        </div>

        {/* profile picture */}
        <motion.img
          src="/pfp.png"
          alt="profile pic"
          className="invisible lg:visible max-w-1/4 max-h-1/2 h-auto object-contain rounded-lg transition-transform duration-500 hover:rotate-x-12 hover:rotate-y-12"
          initial={{ opacity: 0  }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 4.0, ease: "easeOut" }}
          viewport={{ once: true }}
        />      
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{duration: 4.0, ease: "easeOut"}}
        viewport={{ once: true}}>
        <Link href="#about">
          <FaArrowDown className="invisible lg:visible w-5 md:w-12 h-5 md:h-12 justify-self-center animate-bounce"/>
        </Link>
      </motion.div>
    </div>
  );
}
