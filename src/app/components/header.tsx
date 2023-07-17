// import cv from "../cv/cv.pdf";
import React from "react";
import Link from "next/link";

// import { pages, data } from "./data/data";
type HeaderProps = {
  pages: {
    id: number;
    label: string;
    link: string;
  }[];
};

export const Header = ({ pages }: HeaderProps) => {
  return (
    <header className="head mb-  mx-32 md:mb-2">
      <div className="nav mt-8 flex flex-row-reverse items-center justify-between px-1 sm:px-6">
        <nav className="flex flex-row gap-3 self-end text-center sm:gap-6">
          {pages.map((page) => {
            return (
              <Link
                aria-label={page.label}
                key={page.id}
                href={page.link}
                className="min-w-100 font-display animate-flyInLeft rounded-full bg-indigo-400 px-5 py-2 font-bold tracking-wide text-black hover:bg-white hover:text-indigo-400 sm:bg-none lg:px-6"
              >
                {page.label}
              </Link>
            );
          })}
        </nav>
        {/* <a
          href="/cv/cv.pdf"
         
          target="_blank"
          rel="noopener noreferrer"
        >
          Download FIle
        </a> */}
        {/* <a href={cv} download="your_cv.pdf"> */}
        <a href="/cv/CV.pdf" target="_blank" rel="noopener noreferrer">
          <button className="min-w-100 font-display animate-flyInRight m-0   rounded-full bg-indigo-400 px-6 py-2 font-bold text-black opacity-100 hover:bg-white hover:text-indigo-400">
            Download CV
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
