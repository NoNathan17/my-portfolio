interface ExperienceItemProps {
    logo: string;
    altText: string;
    title: string;
    dates: string;
    company: string;
    description: string[];
    link: string;
}


export default function Experience() {
    const ExperienceItem: React.FC<ExperienceItemProps> = ({ logo, altText, title, dates, company, description, link }) => {
        return (
            <div className="flex flex-col">
                <div className="w-full flex font-semibold">
                    <a href={link} target="_blank" className="mb-3 mr-3">
                        <img 
                            src={logo} 
                            alt={altText} 
                            className="rounded-full max-w-12 max-h-12 hover:scale-105 transform duration-300" 
                        />
                    </a>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm lg:text-2xl">{title}</p>
                        <p className="text-md italic lg:hidden">{dates}</p>
                        <p className="text-xs lg:text-lg text-gray-500 italic mb-2">{company}</p>
                        <ul className="list-disc text-md font-thin">
                            {description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                    <p className="ml-auto hidden lg:inline-flex lg:text-xl">{dates}</p>
                </div>
            </div>
        );
    };
    return (
        <div id="experience" className="flex min-h-screen">
            <div className="flex flex-col m-auto w-2/3 h-3/5 gap-15">
                <h1 className="font-semibold text-5xl">my experience</h1>
                <div className="flex flex-col gap-5">

                    <ExperienceItem 
                        logo="/klic.png"
                        altText="KlicAI Logo"
                        title="Backend Developer"
                        company="KlicAI"
                        dates="Dec. 2024 - Present"
                        description={[
                            'Implemented secure RESTful APIs with Node.js and Express.js to support an innovative dating application',
                            'Managed database schemas with MongoDB, optimizing storage for user profiles, match data, and rewards',
                            'Integrated a token-based reward system and personalized user suggestions for a seamless backend architecture',
                        ]}
                        link="https://klic-ai.com"/>

                    <ExperienceItem 
                        logo="/caretech.jpeg"
                        altText="CareTech Logo"
                        title="Software Developer"
                        company="CareTech @ UCI Tech Committee"
                        dates="Oct. 2024 - Present"
                        description={[
                            'Worked in a team of 8 to develop an automated computer vision system to help patients diagnose melanoma',
                            'Applied image preprocessing techniques with OpenCV to improve the accuracy of skin lesion detection',
                            'Developed the CareTech website, utilizing React, Tailwind CSS, and TypeScript for the frontend design'
                        ]}
                        link="https://caretechuci.vercel.app"/>

                    <ExperienceItem 
                        logo="/UCI.png"
                        altText="UCI Logo"
                        title="Python Programming Learning Assistant"
                        dates="Jan. 2025 - Mar. 2025"
                        company="Donald Bren School of Information & Computer Sciences"
                        description={[
                            'Selected as one of 12 Learning Assistants for UCI\'s foundational Object-Oriented Python Programming course',
                            'Facilitated triweekly lab sections for 45+ students, providing guidance through difficult programming concepts',
                            'Conducted one-hour long weekly office hours, addressing unique questions and challenges for 180 students',
                        ]}
                        link="https://ics.uci.edu/"/>           

                    <ExperienceItem 
                        logo="codingmind.png"
                        altText="Coding Mind Academy Logo"
                        title="Coding Instructor"
                        company="Coding Mind Academy"
                        dates="Oct. 2024 - Mar. 2025"
                        description={[
                            'Educated K-12 students on Python, Scratch, and Roblox Studio, enhancing their computer science skills',
                            'Worked with students through engaging lectures and coding exercises, fostering problem-solving and creativity',
                            'Shaped lesson plans for diverse student needs, exercising patience and creating an inclusive classroom environment'
                        ]}
                        link="https://codingmind.com/"/>
                </div>
            </div>
        </div>
    );
}