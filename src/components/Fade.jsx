import React from "react";
import { easeInOut, motion } from "framer-motion";

const stairAnimation = {
    animateTop: {
        top: ["0%", "20%"],
        opacity: [1, 0],
    },
    animateBottom: {
        bottom: ["0%", "20%"],
        opacity: [1, 0],
    },
    animateLeft: {
        left: ["0%", "20%"],
        opacity: [1, 0],
    },
    animateRight: {
        right: ["0%", "20%"],
        opacity: [1, 0],
    },
};

function getRandomAnimation() {
    const num = Math.floor(Math.random() * 4) + 1;
    switch (num) {
        case 1:
            return "animateTop";
        case 2:
            return "animateBottom";
        case 3:
            return "animateLeft";
        case 4:
            return "animateRight";
        default:
            return "animateTop";
    }
}

const Fade = () => {
    return (
        <div className="flex h-full w-full flex-wrap gap-0">
            {[...Array(50)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    animate={getRandomAnimation()}
                    transition={{
                        duration: 0.4,
                        ease: easeInOut,
                        delay: Math.random() * 0.6 + 0.2,
                    }}
                    className="lg:w-[10%] w-[20%] h-[10%] lg:h-[20%] bg-white relative"
                />
            ))}
        </div>
    );
};

export default Fade;

