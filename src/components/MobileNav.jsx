"use client";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/constants";

const MobileNav = () => {
    const pathName = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href={"/"}>
                        <h1 className="text-4xl font-semibold">
                            <SheetClose>
                                Manish<span className="text-accent">.</span>
                            </SheetClose>
                        </h1>
                    </Link>
                </div>
                {/* nav-item */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <Link
                                href={link.path}
                                key={index}
                                className={`${
                                    link.path === pathName &&
                                    "text-accent border-b-2 border-accent"
                                } text-xl capitalize hover:text-accent transition-all`}
                            >
                                <SheetClose>{link.name}</SheetClose>
                            </Link>
                            // </SheetClose>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;

