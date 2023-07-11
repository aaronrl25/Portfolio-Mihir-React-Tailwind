import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/aaronrl25"
              target="_blank"
              rel="noopener noreferrer">
              <SiGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="mailto:rl.aaron4@gmail.com">
              <SiGmail />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/aaron-david-ram%C3%ADrez-lezama-694012b6/"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
