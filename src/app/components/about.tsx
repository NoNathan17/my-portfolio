"use client"

import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import { CiMapPin } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosBriefcase } from "react-icons/io";
import { motion } from "motion/react";

export function AboutMe() {
    return (
        <div id="about" className="flex h-screen bg-gradient-to-br from-gray-700 to-blue-900">
            {/* blurb section */}
            <div className="flex flex-col m-auto w-11/12 lg:w-2/5 h-5/6 lg:h-3/5 gap-5 lg:gap-10">
            <motion.div
                initial={{ opacity: 0, x: -100}}
                whileInView={{ opacity: 1, x: 0}}
                transition={{duration: 1.0, ease: "easeOut"}}
                viewport={{ once: true, amount: 0.2 }}>
                <h1 className="font-semibold text-3xl lg:text-5xl text-center lg:text-left">first, a little about me</h1>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}>

                <div className="flex flex-col text-center lg:text-left gap-3 lg:gap-5 text-sm lg:text-base">
                    <p>I was born and raised in Sacramento, CA (the capital!) However, for college I decided to migrate about 9 hours south to pursue a computer science degree at UCI, which is where I currently am now. (insert anteater emoji)</p>
                    <p>College was a bit daunting at first, but now in my second year, I’ve found myself exactly where I want to be. I’ve come to appreciate all facets of computer science, it’s just fascinating how a couple lines of code can turn nothing into something... </p>
                    <p>I’m constantly learning and always looking for opportunities to apply myself. SO if anyone comes across this and is looking for someone ready to contribute, feel free to reach out!</p>

                    {/* TLDR */}
                    <div className="flex flex-col gap-3">
                        <p className="mt-3">TLDR:</p>
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{
                            alignItems: { xs: 'center', lg: 'flex-start' } 
                        }}>
                            <Button style={{ color: 'white', borderColor: 'white', textTransform: 'none' }} variant="outlined" startIcon={<CiMapPin />}
                                sx={{
                                    fontSize: { xs: '0.75rem', sm: '1rem' }, 
                                    width: { xs: '58%', sm: 'auto' } 
                                }}>
                                Sacramento, CA
                            </Button>
                            <Button style={{ color: 'white', borderColor: 'white', textTransform: 'none' }} variant="outlined" startIcon={<FaGraduationCap />}
                                sx={{
                                    fontSize: { xs: '0.75rem', sm: '1rem' }, 
                                    width: { xs: '58%', sm: 'auto' } 
                                }}>
                                UC Irvine
                            </Button>
                            <Button style={{ color: 'white', borderColor: 'white', textTransform: 'none' }} variant="outlined" startIcon={<IoIosBriefcase />}
                                sx={{
                                    fontSize: { xs: '0.75rem', sm: '1rem' }, 
                                    width: { xs: '58%', sm: 'auto' } 
                                }}>
                                Seeking Internships (plz)
                            </Button>
                        </Stack>
                    </div>
                </div>
            </motion.div>
            </div>
        </div>
    );
}

// interface InterestProps {
//     title: string;
//     description: string;
//     image: string;
// }

// export function Interests() {
//     const Interest: React.FC<InterestProps> = ({ title, description, image}) => {
//         return (
//                 <div className="flex flex-col gap-5 border h-full w-1/3 m-auto text-center rounded-lg py-5 px-3">
//                     <img src={ image } alt="interest" className="max-w-3/4 mx-auto rounded-lg" />
//                     <p className="text-center"> { description }</p>
//                 </div>
//         );
//     };
//     return (
//         <div className="flex h-screen">
//             <div className="flex flex-col m-auto w-3/5 h-3/5 gap-10">
//                 <h1 className="font-medium text-4xl">outside of coding, my interests lie in...</h1>
//                 <div className="flex gap-10"> 
//                     <Interest
//                         title="Sports"
//                         description="Although I've never been much of an athlete, I've been a huge Giants, 49ers, and Warriors fan since I was little. Ask me anything about any of these teams!"
//                         image="/pfp.jpg"/>
//                     <Interest
//                         title="Music"
//                         description="I'll pretty much listen to anything (except country), but my favorite genres are rap, r&b, and k-pop. Current favo"
//                         image="/pfp.jpg"/>
//                     <Interest
//                         title="Photography"
//                         description="blah blah"
//                         image="/pfp.jpg"/>
//                 </div>
//             </div>
//         </div>
//     )
// }
