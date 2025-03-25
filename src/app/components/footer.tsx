import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


export default function Footer() {  
    return (
    <footer id="contact" className="flex flex-col text-center py-4 text-xs lg:text-lg lg mx-auto gap-2">
    	&copy; 2025 Nathan Ong. let's connect!
        <ul className="flex gap-4 justify-center my-auto">
            <li>
            <Link href="https://linkedin.com/in/nathan-ong17" target="_blank" title="mail logo">
                <FaLinkedin className="w-5 md:w-8 h-5 md:h-8 transform hover:scale-110 transition duration-300"/>
            </Link>
            </li>
            <li>
            <Link href="https://github.com/NoNathan17" target="_blank" title="github logo">
                <FaGithub className="w-5 md:w-8 h-5 md:h-8 transform hover:scale-110 transition duration-300"/>
            </Link>
            </li>
            <li>
            <Link href="mailto:nathanong.cs@gmail.com" target="_blank" title="linkedin logo">
                <FiMail className="w-5 md:w-8 h-5 md:h-8 transform hover:scale-110 transition duration-300"/>
            </Link>
            </li>
        </ul>
	</footer>
    );
}


