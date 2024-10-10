"use client";
import React from "react";
import {
    FaHtml5,
    FaCss3,
    FaReact,
    FaJs,
    FaNodeJs,
    FaUserGraduate,
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { RiFolderUserFill } from "react-icons/ri";
import { FaRankingStar, FaBootstrap } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import {
    SiTailwindcss,
    SiNextdotjs,
    SiExpress,
    SiMongodb,
} from "react-icons/si";
import { about, experience, education } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import Section from "@/components/Section";

const skills = {
    title: "My skills",
    description:
        "I am skilled in a wide range of technologies. Here are some of the technologies I am proficient in.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <TbBrandReactNative />,
            name: "react native",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind css",
        },
        {
            icon: <SiMongodb />,
            name: "mongodb",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <SiExpress />,
            name: "express.js",
        },
        {
            icon: <FaBootstrap />,
            name: "bootstrap",
        },
    ],
};

const ResumePage = () => {
    return (
        <Section>
            <Tabs
                defaultValue="experience"
                className="flex flex-col xl:flex-row gap-[60px]"
            >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger
                        value="experience"
                        className="flex items-center justify-center group"
                    >
                        <div className="flex items-center justify-start gap-2 w-[40%]">
                            <LuCalendarClock className=" text-2xl text-accent group-aria-selected:text-primary" />
                            <span>Experience</span>
                        </div>
                    </TabsTrigger>
                    <TabsTrigger
                        value="education"
                        className="flex items-center justify-center gap-2 group"
                    >
                        <div className="flex items-center justify-start gap-2 w-[40%]">
                            <FaUserGraduate className=" text-2xl text-accent group-aria-selected:text-primary" />
                            <span>Education</span>
                        </div>
                    </TabsTrigger>
                    <TabsTrigger
                        value="skills"
                        className="flex items-center justify-center gap-2 group"
                    >
                        <div className="flex items-center justify-start gap-2 w-[40%]">
                            <FaRankingStar className=" text-2xl text-accent group-aria-selected:text-primary" />
                            <span>Skills</span>
                        </div>
                    </TabsTrigger>
                    <TabsTrigger
                        value="about"
                        className="flex items-center justify-center gap-2 group"
                    >
                        <div className="flex items-center justify-start gap-2 w-[40%]">
                            <RiFolderUserFill className=" text-2xl text-accent group-aria-selected:text-primary" />
                            <span>About Me</span>
                        </div>
                    </TabsTrigger>
                </TabsList>
                <div className="min-h-[70vh] w-full">
                    {/* experience tab */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">
                                {experience.title}
                            </h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {experience.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                                            >
                                                <span className="text-accent">
                                                    {item.duration}
                                                </span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                                                    {item.position}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">
                                                        {item.company}
                                                    </p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* education tab */}
                    <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">
                                {education.title}
                            </h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {education.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                                            >
                                                <span className="text-accent">
                                                    {item.duration}
                                                </span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left overflow-hidden text-ellipsis whitespace-nowrap">
                                                    {item.degree}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">
                                                        {item.institution}
                                                    </p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* skills tab */}
                    <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {skills.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {skills.description}
                                </p>
                            </div>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider
                                                    delayDuration={100}
                                                >
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                            <p className="text-center lg:hidden capitalize text-accent">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="text-center capitalize">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* about tab */}
                    <TabsContent
                        value="about"
                        className="w-full text-center xl:text-left"
                    >
                        <div className="flex flex-col gap-[30px] ">
                            <h3 className="text-4xl font-bold">
                                {about.title}
                            </h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-pretty">
                                {about.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-6 mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex pl-4 md:pl-0 md:justify-center items-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">
                                                    {item.fieldName}
                                                </span>
                                                <span className="text-xl">
                                                    {item.fieldValue}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </Section>
    );
};

export default ResumePage;

