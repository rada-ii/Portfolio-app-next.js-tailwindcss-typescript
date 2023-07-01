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
    <header className="mx-10 mb-2">
      <div className="lg:nav mt-8 flex flex-row-reverse items-center justify-between px-1 sm:px-6">
        <nav className="flex flex-row gap-1 self-end text-center sm:gap-6">
          {pages.map((page) => {
            return (
              <Link
                aria-label={page.label}
                key={page.id}
                href={page.link}
                className="min-w-100 font-display animate-flyInLeft rounded-full bg-indigo-400 px-6 py-2 font-bold tracking-wide hover:bg-white hover:text-indigo-400 sm:bg-none"
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
        <a href="/cv/cv.pdf" target="_blank" rel="noopener noreferrer">
          <button className="min-w-100 font-display animate-flyInRight rounded-full bg-indigo-400 px-6 py-2 font-bold text-black opacity-100 hover:bg-white hover:text-indigo-400 sm:bg-none">
            Download CV
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
