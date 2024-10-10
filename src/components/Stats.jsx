"use client";
import React from "react";
import CountUp from "react-countup";
import { stats } from "@/constants";

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-4 md:gap-6 max-w-[90vw] md:max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex gap-6 items-start md:items-center md:justify-center xl:justify-start group"
                            >
                                <div className="text-2xl min-w-[20%] md:min-w-none md:text-4xl xl:text-6xl flex gap-1 justify-center items-center font-extrabold">
                                    <CountUp
                                        end={item.num}
                                        duration={4}
                                        delay={2}
                                    />
                                    <span className="text-xl md:text-3xl xl:text-5xl font-bold">
                                        +
                                    </span>
                                </div>
                                <p
                                    className={`${
                                        item.text.length < 15
                                            ? "max-w-[100px]"
                                            : "max-w-[150px]"
                                    } leading-snug text-white/80 text-wrap`}
                                >
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;

