import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";


export default function Footer() {  
    return (
    <footer id="contact" className="relative flex flex-col text-center py-4 text-base lg:text-lg lg mx-auto gap-2">
    	&copy; 2025 Nathan Ong. let&apos;s connect!
        <ul className="flex gap-4 justify-center my-auto">
            <li>
            <Link href="https://linkedin.com/in/nathan-ong17" target="_blank" title="mail logo">
                <FaLinkedin className="w-6 md:w-8 h-6 md:h-8 transform hover:scale-110 transition duration-300"/>
            </Link>
            </li>
            <li>
            <Link href="https://github.com/NoNathan17" target="_blank" title="github logo">
                <FaGithub className="w-6 md:w-8 h-6 md:h-8 transform hover:scale-110 transition duration-300"/>
            </Link>
            </li>
            <li>
            <Link href="mailto:nathanong.cs@gmail.com" target="_blank" title="linkedin logo">
                <FiMail className="w-6 md:w-8 h-6 md:h-8 transform hover:scale-110 transition duration-300"/>
            </Link>
            </li>
        </ul>
        <div className="invisible lg:visible absolute flex right-5 bottom-3 text-base italic gap-1">
            View Source Code 
                <Link href="https://github.com/NoNathan17/my-portfolio" target="_blank" title="View Source Code" className="hover:underline">
                    Here
                </Link>
        </div>
	</footer>
    );
}


