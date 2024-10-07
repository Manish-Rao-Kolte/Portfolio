"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import SliderButtons from "@/components/SliderButtons";
import Section from "@/components/Section";

const projects = [
    {
        num: "01",
        category: "mobile Development",
        title: "Doc8click",
        description:
            "A react native app for users to get doctor consultation online on mobile devices.",
        stack: ["React Native", "Node.js", "Express.js", "MongoDB"],
        image: "/assets/work/Doc8click.jpg",
        live: "https://drive.google.com/file/d/1ppapziKvWUgT1oobWYBl2aVnt6I6Kvw2/view?usp=drive_link",
        github: "https://github.com/Manish-Rao-Kolte/android-Doc8click",
    },
    {
        num: "02",
        category: "Web Development",
        title: "SPS School",
        description:
            "The website showcases various aspects of the school, including the history of the school and achievements of students, a gallery of events, and an and an introduction to our esteemed teachers.",
        stack: ["React.js", "Tailwind CSS", "GSAP"],
        image: "/assets/work/SPS.png",
        live: "https://springdale-public-school-v1.netlify.app/",
        github: "https://github.com/Manish-Rao-Kolte/sps-madrocket",
    },
    {
        num: "03",
        category: "Web Development",
        title: "Memo Talk",
        description:
            "A real time chat application where users can create friends and chat with each other.",
        stack: ["React.js", "Node.js", "Tailwind CSS", "Express.js", "MongoDb"],
        image: "/assets/work/memo-talk.png",
        live: "https://memo-talk.netlify.app/",
        github: "https://github.com/Manish-Rao-Kolte/memotalk-client",
    },
];

const WorkPage = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };
    return (
        <Section>
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                            {project?.num}
                        </div>

                        {/* category */}
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize text-pretty">
                            {project?.category} project
                        </h2>

                        {/* description */}
                        <p className="text-white/60 text-pretty">
                            {project?.description}
                        </p>

                        {/* stack */}
                        <ul className="flex gap-4 flex-wrap">
                            {project?.stack.map((stack, index) => (
                                <li
                                    key={index}
                                    className={`text-xl text-accent py-1 rounded-lg`}
                                >
                                    {stack}
                                    {index !== project?.stack.length - 1 && (
                                        <span className="text-white/60">,</span>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* border */}
                        <div className="border border-white/20"></div>

                        {/* buttons */}
                        <div className="flex items-center gap-4">
                            {/* live project button */}
                            <a target="_blank" href={project?.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </a>

                            {/* github project button */}
                            <a target="_blank" href={project?.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index} className="w-full">
                                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    {/* overlay */}
                                    <div></div>
                                    {/* image */}
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={project?.image}
                                            fill
                                            className="object-cover"
                                            alt={project?.title}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <SliderButtons
                            containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                            btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                        />
                    </Swiper>
                </div>
            </div>
        </Section>
    );
};

export default WorkPage;

