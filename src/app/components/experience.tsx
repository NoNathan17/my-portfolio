"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";

interface ExperienceItemProps {
    logo: string;
    altText: string;
    title: string;
    dates: string;
    company: string;
    description: React.ReactNode;
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
                <div className="flex flex-col gap-1 w-3/4">
                    <p className="text-md lg:text-2xl font-stretch-semi-expanded">{title}</p>
                    <p className="text-xs italic lg:hidden" >{dates}</p>
                    <p className="text-xs lg:text-lg text-gray-500 italic mb-2">{company}</p>
                    <p className="text-xs lg:text-lg font-thin mb-2">{description}</p>
                </div>
                <p className="ml-auto hidden lg:inline-flex lg:text-xl">{dates}</p>
        </motion.div>
    );
};

export default function Experience() {
    const experiences = [
        {
            logo: "/ecp.png",
            altText: "ECP Logo",
            title: "Software Engineering Intern",
            company: "Ethan Conrad Properties Inc.",
            dates: "Jun. 2025 - Sep. 2025",
            description: "Launched an internal property management platform for one of Northern California's largest real estate companies, streamlining CRUD operations for 180 properties and 200+ employees.",
            link: "https://ethanconradprop.com/",
        },
        {
            logo: "/ctc.jpeg",
            altText: "CTC Logo",
            title: "Full-Stack Developer",
            company: "Commit the Change",
            dates: "Oct. 2025 - Present",
            description: (
                <>
                    Creating a full-stack appointment management dashboard for{" "}
                    <Link href="https://www.clchc.org/" target="_blank" className="hover:underline">
                        Celebrating Life Community Health Center
                    </Link>
                    , ensuring high-quality medical service for the 22K+ underserved patients.
                </>
            ),
            link: "https://ctc-uci.com/",
        },
        {
            logo: "/hack.png",
            altText: "Hack Logo",
            title: "Software Developer",
            company: "Hack @ UCI",
            dates: "Apr. 2025 - Present",
            description: (
                <>
                    Building and maintaining the{" "}
                    <Link
                        href="https://irvinehacks.com/"
                        target="_blank"
                        className="hover:underline"
                    >
                        IrvineHacks
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="https://zothacks.com/"
                        target="_blank"
                        className="hover:underline"
                    >
                        ZotHacks
                    </Link>{" "}
                    websites, supporting 1,000+ annual applicants across UCI&apos;s premier hackathons.
                </>
            ),
            
            link: "https://hack.ics.uci.edu/",
        },
        {
            logo: "/caretech.jpeg",
            altText: "CareTech logo",
            title: "Software Developer",
            company: "CareTech @ UCI",
            dates: "Oct. 2024 - Present",
            description: "Developing AI-powered healthcare technology using computer vision and machine learning for early detection of health issues and personalized preventive care.  ",
            link: "https://caretechuci.vercel.app",
        },
        {
            logo: "/petmap.png",
            altText: "PetMap Logo",
            title: "Software Engineering Intern",
            company: "PetMap",
            dates: "Mar. 2025 - Sep. 2025",
            description: "Worked with a team of engineers to develop a social platform for the pet community, with features supporting mental wellness for college students.",
            link: "",
        },
        
    ]
    return (
        <div id="experience" className="flex min-h-screen">
            <div className="flex flex-col m-auto w-11/12 md:w-2/3 gap-7 lg:gap-10 mt-10 ">
                <motion.div
                    initial={{opacity: 0, skewX: 10}}
                    whileInView={{opacity: 1, skewX: 0}}
                    transition={{duration: 1.0, ease: 'easeOut'}}
                    viewport={{once: true, amount: 0.2}}>
                    <div className="flex flex-col gap-3">
                        <h1 className="font-stretch-semi-expanded text-3xl md:text-4xl lg:text-5xl text-center lg:text-left">my experience</h1>
                        <p className="italic text-xs md:text-sm lg:text-base text-center lg:text-left"> i&apos;m extremely grateful for the places i&apos;ve worked at so far! <br></br> from building for healthcare, working with hackathons, or contributing to exciting startups</p>
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
