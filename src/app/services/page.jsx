"use client";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { services } from "@/constants";
import Section from "@/components/Section";

const ServicesPage = () => {
    return (
        <Section>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                {services.map((service, index) => {
                    return (
                        <div
                            key={index}
                            className="flex flex-1 flex-col justify-center gap-6 group"
                        >
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                    {service.num}
                                </div>
                                <a
                                    target="_blank"
                                    href={service.href}
                                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                >
                                    <BsArrowDownRight className="text-primary text-3xl" />
                                </a>
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 overflow-hidden text-ellipsis whitespace-nowrap">
                                {service.title}
                            </h2>
                            <p className="text-white/60">
                                {service.description}
                            </p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
};

export default ServicesPage;

