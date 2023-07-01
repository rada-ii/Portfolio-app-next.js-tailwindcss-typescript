import cv from "../cv/cv.pdf";
import React from "react";
import Link from "next/link";

import { pages } from "./data/data";
interface Page {
  id: number;
  label: string;
  link: string;
}

interface HeaderProps {
  pages: Page[];
}

const Header: React.FC<HeaderProps> = ({ pages }) => {
  return (
    <header className="mx-10">
      <div className="lg: mt-8 flex flex-row-reverse items-center justify-between px-1 sm:px-6 ">
        <nav className="flex flex-row gap-1 self-end text-right sm:gap-6">
          {pages.map((page) => {
            return (
              <Link
                aria-label={page.label}
                key={page.id}
                href={page.link}
                className="min-w-100 font-display animate-flyInLeft rounded-3xl bg-indigo-400 px-6 py-2 font-bold tracking-wide hover:bg-white hover:text-indigo-400 sm:bg-none"
              >
                {page.label}
              </Link>
            );
          })}
        </nav>
        <a href={cv} download="your_cv.pdf">
          <button className="min-w-100 font-display animate-flyInRight rounded-full bg-indigo-400 px-6 py-2 font-bold text-black opacity-100 hover:bg-white hover:text-indigo-400 sm:bg-none">
            Download CV
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
