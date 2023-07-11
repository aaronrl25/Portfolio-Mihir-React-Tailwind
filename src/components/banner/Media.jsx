import React from "react";
import { FaLinkedinIn, FaReact, FaNodeJs } from "react-icons/fa";
import { SiWordpress, SiGithub, SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST WEB & Mobile STACK
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiWordpress />
          </span>

          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
