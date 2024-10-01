"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { links } from "@/constants";

const Nav = () => {
  const pathName = usePathname();
  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathName && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
