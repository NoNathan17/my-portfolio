"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

interface ExperienceItemProps {
    logo: string;
    altText: string;
    title: string;
    dates: string;
    company: string;
    description: string[];
    link: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ logo, title, dates, company, description, link }) => {
    return (
        <motion.div
            className="flex font-semibold"
            variants={{
                hidden: { opacity: 0, rotateY: 90 },
                visible: { opacity: 1, rotateY: 0 },
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}>

                <Link href={link} target="_blank" className="mb-3 mr-3">
                    <Image src={logo} alt={title} width={48} height={48} className="rounded-full max-w-9 lg:max-w-12 max-h-9 lg:max-h-12 hover:scale-105 transform duration-300"/>
                </Link>
                <div className="flex flex-col gap-1">
                    <p className="text-md lg:text-2xl font-stretch-semi-expanded">{title}</p>
                    <p className="text-xs italic lg:hidden" >{dates}</p>
                    <p className="text-xs lg:text-lg text-gray-500 italic mb-2">{company}</p>
                    <ul className="list-disc text-xs lg:text-base font-thin">
                        {description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </div>
                <p className="ml-auto hidden lg:inline-flex lg:text-xl">{dates}</p>
        </motion.div>
    );
};

export default function Experience() {
    const experiences = [{
            logo: "/klic.png",
            altText: "KlicAI Logo",
            title: "Backend Developer Intern",
            company: "KlicAI",
            dates: "Dec. 2024 - Present",
            description: [
                'Implemented secure RESTful APIs with Node.js and Express.js to support an innovative dating application',
                'Managed database schemas with MongoDB, optimizing storage for user profiles, match data, and rewards',
                'Integrated a token-based reward system and personalized user suggestions for a seamless backend architecture'
            ],
            link: "https://klic-ai.com",
        },
        {
            logo: "/caretech.jpeg",
            altText: "CareTech logo",
            title: "Software Developer",
            company: "CareTech @ UCI Tech Committee",
            dates: "Oct. 2024 - Present",
            description: [
                'Worked in a team of 8 to develop an automated computer vision system to help patients diagnose melanoma',
                'Applied image preprocessing techniques with OpenCV to improve the accuracy of skin lesion detection',
                'Developed the CareTech website, utilizing React, Tailwind CSS, and TypeScript for the frontend design'
            ],
            link: "https://caretechuci.vercel.app",
        },
        {
            logo: "/UCI.png",
            altText: "UCI Logo",
            title: "Python Programming Learning Assistant",
            company: "Donald Bren School of Information & Computer Science",
            dates: "Jan. 2025 - Mar.2025",
            description: [
                'Selected as one of 12 Learning Assistants for UCI\'s foundational Object-Oriented Python Programming course',
                'Facilitated triweekly lab sections for 45+ students, providing guidance through difficult programming concepts',
                'Conducted one-hour long weekly office hours, addressing unique questions and challenges for 180 students',
            ],
            link: "https://ics.uci.edu/",
        },
        {
            logo: "/codingmind.png",
            altText: "Coding Mind Logo",
            title: "Coding Instructor",
            company: "Coding Mind Academy",
            dates: "Oct. 2024 - Mar. 2025",
            description: [
                'Educated K-12 students on Python, Scratch, and Roblox Studio, enhancing their computer science skills',
                'Worked with students through engaging lectures and coding exercises, fostering problem-solving and creativity',
                'Shaped lesson plans for diverse student needs, exercising patience and creating an inclusive classroom environment'
            ],
            link: "https://codingmind.com/",
        },
        
    ]
    return (
        <div id="experience" className="flex min-h-screen">
            <div className="flex flex-col m-auto w-11/12 md:w-2/3 gap-7 lg:gap-10 mt-10 lg:mt-auto">
                <motion.div
                    initial={{opacity: 0, skewX: 10}}
                    whileInView={{opacity: 1, skewX: 0}}
                    transition={{duration: 1.0, ease: 'easeOut'}}
                    viewport={{once: true, amount: 0.2}}>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-stretch-semi-expanded text-3xl md:text-4xl lg:text-5xl text-center lg:text-left">my experience</h1>
                        <p className="italic text-xs md:text-sm lg:text-base text-center lg:text-left"> i&apos;m extremely grateful for the places i&apos;ve worked at so far! <br></br> from teaching students, to working with AI, to contributing to exciting startups.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {},
                        visible: {
                        transition: {
                            staggerChildren: 0.4,
                        },
                        },
                    }}
                    viewport={{once: true, amount: 0.3 }}>

                <div className="flex flex-col gap-5">     
                    {experiences.map((experience, index) => (
                        <ExperienceItem
                            key={index}
                            logo={experience.logo}
                            altText={experience.altText}
                            title={experience.title}
                            company={experience.company}
                            dates={experience.dates}
                            description={experience.description}
                            link={experience.link}/>
                        ))}   
                </div>
                </motion.div>
            </div>
        </div>
    );
}