"use client"

import Link from "next/link";
import { FaGithub, FaLinkedin, FaRegFileAlt } from "react-icons/fa";
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
    <div id="/" className="flex h-screen">
      <div className="flex flex-row mx-auto items-center justify-center w-5/6 h-3/4 gap-32">
        <div className="flex flex-col gap-5 w-2/5">
          {/* intro stuff */}
            <p className="text-7xl font-bold min-h-[4.5rem]">
              <span ref={typedRef}/>
            </p>
            <motion.div 
              className="flex flex-col gap-5"
              initial={{ opacity: 0, x: -50, }}
              whileInView={{ opacity: 1, x: 0, }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              viewport={{once: true }}>
              <p className="text-xl font-normal"> full-stack dev | software engineering | CS @ UCI</p>
              <p className="text-2xl font-extralight"> I'm a self-motivated software developer passionate <br></br> about creating and contributing to meaningful solutions.
              Always eager to learn and gain hands-on experience. &#x1F680;</p>

            {/* links */}
            <ul className="flex gap-7 justify-start text-3xl sm:text-4xl lg:text-5xl">
              <Link href="https://github.com/NoNathan17" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-5 md:w-10 h-5 md:h-10 transform hover:scale-110 transition duration-300"/>
              </Link>
              <Link href="https://linkedin.com/in/nathan-ong17" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-5 md:w-10 h-5 md:h-10 transform hover:scale-110 transition duration-300"/>
              </Link>
              <Link href="https://drive.google.com/file/d/1KpuuGPcz9wo03Zo70ziHRnwWvi419djy/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FaRegFileAlt className="w-5 md:w-10 h-5 md:h-10 transform hover:scale-110 transition duration-300"/>
              </Link>
            </ul>
            </motion.div>
        </div>

        {/* profile picture */}
        <motion.img
          src="/pfp.jpg"
          alt="profile pic"
          className="max-w-1/4 max-h-1/2 h-auto object-contain rounded-lg transition-transform duration-500 hover:rotate-x-12 hover:rotate-y-12"
          initial={{ opacity: 0  }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 4.0, ease: "easeOut" }}
          viewport={{ once: true }}
        />      
      </div>
    </div>
  );
}
