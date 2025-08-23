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
            logo: "/ecp.png",
            altText: "ECP Logo",
            title: "Information Technology Intern",
            company: "Ethan Conrad Properties Inc.",
            dates: "Jun. 2025 - Present",
            description: [
                'Built a prop. management platform with FastAPI, PostgreSQL, and React, streamlining tasks for 200+ users',
                'Designed SQL schemas and CRUD endpoints for property data, enforcing data security with Azure OAuth',
                'Migrated legacy data systems to the cloud using DigitalOcean, enhancing system scalability and saving $21k/yr',
                'Automated IT inventory management using webhook-based workflows with n8n, reducing lookup time by 100%'
            ],
            link: "https://ethanconradprop.com/",
        },
        {
            logo: "/hack.png",
            altText: "Hack Logo",
            title: "Web Developer",
            company: "Hack @ UCI",
            dates: "Apr. 2025 - Present",
            description: [
                'Developed the IrvineHacks site using React, Next.js, MongoDB, and FastAPI, serivng 800+ applicants',
                'Adapted a scalable backend with UCI’s SSO and RESTful APIs to manage auth and application processes',
                'Integrated a dynamic content system using Sanity, enabling real-time updates to event info without redeployment',
                'Wrote unit tests with MagicMock and Pytest for API endpoints, reducing bugs and improving code reliability'
            ],
            link: "https://hack.ics.uci.edu/",
        },
        {
            logo: "/petmap.png",
            altText: "PetMap Logo",
            title: "Software Engineering Intern",
            company: "PetMap",
            dates: "Mar. 2025 - Present",
            description: [
                'Worked in an Agile team of 6 to build a dog-network platform, driving progress through sprints and code review',
                'Integrated Google Sign-in via Firebase Auth and Admin SDK, securing feature access to verified users only',
                'Led end-to-end development of profile management workflows with RHF + Zod, assisting 55+ active users'
            ],
            link: "",
        },
        {
            logo: "/caretech.jpeg",
            altText: "CareTech logo",
            title: "Software Developer",
            company: "CareTech @ UCI Tech Committee",
            dates: "Oct. 2024 - Present",
            description: [
                'Collaborated with a team of 8 in developing an automated computer vision system for early melanoma diagnosis',
                'Enhanced 25,000+ skin images with OpenCV, applied hair removal, noise reduction, and contrast enhancement',
                'Trained a custom CNN in TensorFlow Keras, achieved 82% accuracy with normalization and optimization callbacks'
            ],
            link: "https://caretechuci.vercel.app",
        },
        
    ]
    return (
        <div id="experience" className="flex min-h-screen">
            <div className="flex flex-col m-auto w-11/12 md:w-2/3 gap-7 lg:gap-10 mt-10">
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
