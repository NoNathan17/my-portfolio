"use client"

import { Button } from "@mui/material";
import Link from "next/link";
import { motion } from "motion/react";

interface ProjectCardProps {
    title: string;
    caption: string;
    description: string;
    image: string;
    techstack: string[]
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps & { index: number } > = ({ title, caption, description, image, techstack, link, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className={`flex flex-col ${isEven ? 'mb-10' : 'mt-10'} border rounded-lg font-semibold p-5 gap-4 hover:scale-105 duration-300 text-center`}
            variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            drag dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }} dragElastic={0.2}>

            <div className="relative group mx-auto">
                <img src={image} alt={title} className="rounded-lg mx-auto transition duration-300 group-hover:brightness-50"/>
                <Link 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center text-white font-thin text-xl opacity-0 group-hover:opacity-100 transition duration-300">
                Click to visit! 
                </Link>
            </div>
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold">{title}</h1>
                <Button style={{ color: 'white', borderColor: 'white', textTransform: 'none' }} className="self-center" variant="outlined">{caption}</Button>
            </div>
            <p className="text-md font-light">{description}</p>
            <div className="flex gap-8">
                <div className="flex gap-3 mx-auto">
                    {techstack.map((src, index) => (
                        <img key={index} src={src} className="max-w-8 max-h-8 object-contain hover:scale-110 duration-300"/>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default function Projects() {
    const projects = [{
            title: "RetiNova 👁️",
            caption: "🏆 1st Place Finish @ IrvineHacks 2025",
            description: "With medical error being a growing concern, my teammates and I developed an AI-powered platform that gives users in-depth eye diagnosis for cataracts and uveitis, putting the power in the patient's hands. Awarded 1st place for our efforts! ",
            image: "retinova.jpg",
            techstack: ['react.png', 'typescript.webp', 'next.svg', 'tailwind.png', 'material.png', 'opencv.png'],
            link: "https://devpost.com/software/retinova"
        },
        {
            title: "This Portfolio!",
            caption: "🎨 Great Frontend Practice",
            description: "My Personal Portfolio to showcase my current experience, projects, interests. Built and designed from scratch (still working on my design skills 😅). I'm always looking to improve, so if you have any feedback, please let me know :)",
            image: "portfolio.png",
            techstack: ['figma.png', 'react.png', 'typescript.webp', 'next.svg', 'tailwind.png', 'framer.svg'],
            link: "https://devpost.com/software/retinova"
        },
        {
            title: "FantasyEdge 🏈",
            caption: "😿 Did Not Win My League This Year",
            description: "As an avid fantasy football player, over summer 2024 I wanted to create an app that would help me and others with the upcoming season. Used Django to create a full-stack website that helps users manage their teams.",
            image: "fantasyedge.png",
            techstack: ['django.svg', 'python.png', 'javascript.png', 'postgres.png', 'html.webp', 'css.png'],
            link: "https://fantasy-edge.vercel.app"
        },
        {
            title: "Nutri 🏋️‍♂️",
            caption: "🍇 Submission @ WebJam 2024",
            description: "Worked with two friends and developed a web application that provides personalized fitness feedback, including workouts, meal plans, and calorie goals. Didn't win anything, but learned a lot for our next opportunity...  ",
            image: "nutri.png",
            techstack: ['django.svg', 'react.png', 'tailwind.png', 'typescript.webp', 'python.png'],
            link: "https://github.com/NoNathan17/nutri"
        },
        {
            title: "TwinTunes 🎶",
            caption: "🤓 Built over Winter Break 2024",
            description: "Made this project because my sister complained there wasn't an easy way to identify duplicate songs within spotify playlists. Used Spotify's API to retrieve playlists and some Python logic for finding duplicates. Now there is an easy way...   ",
            image: "twintunes.png",
            techstack: ['flask.svg', 'python.png', 'html.webp', 'css.png', 'spotify.png'],
            link: "https://github.com/NoNathan17/TwinTunes"
        },
        {
            title: "Duck Hunt 🦆",
            caption: "🦖 Submission @ LA Hacks 2024",
            description: "This project hold a special place in my heart as it was both my first hackathon and personal project. My teammate and I both loved traveling, so we decided to make a website that takes in a location and displays the top 7 attractions in that city.",
            image: "duckhunt.png",
            techstack: ['javascript.png', 'bootstrap.svg', 'html.webp', 'css.png'],
            link: "https://nonathan17.github.io/DuckHunt/"
        },
    ];
    return (
        <div id="projects" className="flex min-h-screen">
            <div className="flex flex-col m-auto w-2/3 h-3/5 gap-10 my-20">
            <motion.div
                    initial={{opacity: 0, skewX: -10}}
                    whileInView={{opacity: 1, skewX: 0}}
                    transition={{duration: 1.0, ease: 'easeOut'}}
                    viewport={{ once: true, amount: 0.5 }}>
                <div className="flex flex-col gap-3">
                    <h1 className="font-stretch-semi-expanded text-5xl">featured projects</h1>
                    <p className="italic"> here are some of the projects i’ve worked on! <br></br>i enjoy making projects that solve everyday problems or about things i am passionate about.</p>
                </div>
            </motion.div>
            <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: {},
                        visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                        },
                    }}
                    viewport={{once: true, amount: 0.2 }}>

            <div className="grid grid-cols-1 md:grid-cols-2 space-x-5">
                {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            caption={project.caption}
                            description={project.description}
                            image={project.image}
                            techstack={project.techstack}
                            link={project.link}
                            index={index}/>
                        ))}
                </div>
            </motion.div>
            </div>
        </div>
    );
}