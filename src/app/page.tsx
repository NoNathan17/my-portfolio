import Link from "next/link";
import { FaGithub, FaLinkedin, FaRegFileAlt } from "react-icons/fa";


export default function Home() {
  return (
    <div className="flex h-screen">
      <div className="flex flex-row mx-auto items-center justify-center w-5/6 h-3/4 gap-32">
        <div className="flex flex-col gap-5 w-2/5">
          {/* intro stuff */}
            <p className="text-7xl font-bold">hi! i'm nathan &#x1F604;</p>
            <p className="text-xl font-normal"> full-stack dev | software engineer | CS @ UCI</p>
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
              <Link href="https://drive.google.com/file/d/1hrQCF9BI1LqbGClV4TOg6mQUktWvwqNf/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <FaRegFileAlt className="w-5 md:w-10 h-5 md:h-10 transform hover:scale-110 transition duration-300"/>
              </Link>
            </ul>
        </div>

        {/* profile picture */}
        <img src="/pfp.jpg" alt="profile pic" className="max-w-1/4 h-auto object-contain rounded-lg"/>
      </div>
      </div>
  );
}
