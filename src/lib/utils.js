import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const  delayAnimation = {
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
    }

export { delayAnimation }
