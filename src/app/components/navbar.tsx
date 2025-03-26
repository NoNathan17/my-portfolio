"use client"

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {  
    const [showNavbar, setNavbar] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

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
        <nav className={`fixed w-full p-6 md:py-12 md:px-20 text-xl font-stretch-semi-expanded z-50 transition-opacity duration-300 ${
            showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}>
        <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeOut" }}>
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="block">Nathan</span>
                    <span className="block ml-11">Ong</span>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)} 
                            className="text-white z-9999">
                            {menuOpen ? (
                                <IoMdClose className="invisible lg:visible h-10 w-10" />
                            ) : (
                                <GiHamburgerMenu className="h-8 w-8" /> 
                            )}
                        </button>
                    </div>

                {/* desktop navbar */}
                <div className="hidden lg:flex gap-7">
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
            </div>

                {/* hamburger navbar */}
                <div className={`lg:hidden fixed inset-0 bg-gradient-to-br from-gray-900 to-blue-900  ${menuOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-1000 ease-in-out`}>
                    <div className="flex justify-between items-center p-6">
                        <div className="flex flex-col">
                            <span className="block">Nathan</span>
                            <span className="block ml-11">Ong</span>
                        </div>
                        <button onClick={() => setMenuOpen(false)} className="text-white text-2xl">
                            <IoMdClose className="h-10 w-10" />
                        </button>
                    </div>

                    <div className="flex flex-col items-center h-full">
                        <Link href="#/" className="block py-4 text-white text-2xl hover:text-blue-300">
                            home
                        </Link>
                        <Link href="#about" className="block py-4 text-white text-2xl hover:text-red-300">
                            about
                        </Link>
                        <Link href="#experience" className="block py-4 text-white text-2xl hover:text-green-300">
                            experience
                        </Link>
                        <Link href="#projects" className="block py-4 text-white text-2xl hover:text-orange-300">
                            projects
                        </Link>
                        <Link href="#contact" className="block py-4 text-white text-2xl hover:text-yellow-300">
                            contact
                        </Link>
                    </div>
                </div>
        </motion.div>
        </nav>
    );
}


