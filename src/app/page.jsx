"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Avatar from "@/components/Avatar";
import Stats from "@/components/Stats";

const HomePage = () => {
    const handleResumeDownload = () => {
        window.open(
            "https://drive.google.com/file/d/1nf7aB2l8a-bcEvg7mL-LpPBtE8nBD7xa/view?usp=drive_link",
            "_blank",
        );
    };
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-2">
                    {/* text */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">
                            Fullstack Developer(Web/Mobile)
                        </span>
                        <h1 className="h1 mb-6">
                            Hello I'm <br />{" "}
                            <span className="text-accent">
                                Manish Rao Kolte
                            </span>
                        </h1>
                        <p className="mb-6">
                            I excel at crafting elegant digital experiences and
                            I am proficient in various programming languages and
                            technologies.
                        </p>
                        {/* button and socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2"
                                onClick={handleResumeDownload}
                            >
                                <span> Download CV </span>
                                <FiDownload className="text-xl" />
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>
                    {/* avatar */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Avatar />
                    </div>
                </div>
            </div>
            <Stats />
        </section>
    );
};

export default HomePage;

