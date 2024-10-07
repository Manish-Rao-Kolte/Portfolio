"use client";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Fade from "./Fade";

const FadeTransition = () => {
    const pathName = usePathname();
    return (
        <AnimatePresence mode="wait">
            <div
                key={pathName}
                className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex"
            >
                <Fade />
            </div>
        </AnimatePresence>
    );
};

export default FadeTransition;

