"use client"

import Link from "next/link";

export default function Navbar() {  
    return (
        /* make navbar so that it comes back when ur scrolling up */
        <nav className="fixed w-full p-6 md:py-12 md:px-28 text-xl font-stretch-semi-expanded">
            <div className="flex items-center justify-end gap-7">
                <Link href="#/" className="duration-300 transition ease-in-out hover:text-blue-300">
                    home
                </Link>
                <Link href="#about" className="duration-300 transition ease-in-out hover:text-blue-300">
                    about
                </Link>
                <Link href="#experience" className="duration-300 transition ease-in-out hover:text-blue-300">
                    experience
                </Link>
                <Link href="#projects" className="duration-300 transition ease-in-out hover:text-blue-300">
                    projects
                </Link>
                <Link href="#contact" className="duration-300 transition ease-in-out hover:text-blue-300">
                    contact
                </Link>
            </div>
        </nav>
    );
}


