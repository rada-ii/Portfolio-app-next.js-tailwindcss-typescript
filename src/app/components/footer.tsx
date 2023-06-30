import React from "react";
import Envelope from "../icons/envelope";
import Linkedin from "../icons/linkedin";
import Github from "../icons/github";

type FooterProp = {
  contactMeLinks: string[];
};

const Footer = ({ contactMeLinks }: FooterProp) => {
  return (
    <footer className="shadow-footer fixed bottom-0 mt-12 w-full py-4">
      <div className="flex items-center justify-center gap-3 px-6 ">
        <a href={contactMeLinks[0]} aria-label="Linkedin">
          <Linkedin className="contact " />
        </a>

        <a href={contactMeLinks[1]} aria-label="Email">
          <Envelope className="contact" />
        </a>

        <a href={contactMeLinks[2]} aria-label="Github">
          <Github className="contact " />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
