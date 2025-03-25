"use client"

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Navbar() {  
    const [showNavbar, setNavbar] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY; // returns a px value telling how far user has scrolled

            if (currentScroll < lastScroll) {
                setNavbar(true); // scrolling up
            } else {
                setNavbar(false); // scrolling down
            }

            setLastScroll(currentScroll); // scrolling
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
        }, [lastScroll]);
    return (
        <nav className={`fixed w-full p-6 md:py-12 md:px-28 text-xl font-stretch-semi-expanded z-50 transition-opacity duration-300 ${
            showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeOut" }}>
            <div className="flex items-center justify-end gap-7">
                <Link href="#/" className="duration-300 transition ease-in-out hover:text-blue-300">
                    home
                </Link>
                <Link href="#about" className="duration-300 transition ease-in-out hover:text-red-300">
                    about
                </Link>
                <Link href="#experience" className="duration-300 transition ease-in-out hover:text-green-300">
                    experience
                </Link>
                <Link href="#projects" className="duration-300 transition ease-in-out hover:text-orange-300">
                    projects
                </Link>
                <Link href="#contact" className="duration-300 transition ease-in-out hover:text-yellow-300">
                    contact
                </Link>
            </div>
        </motion.div>
        </nav>
    );
}


