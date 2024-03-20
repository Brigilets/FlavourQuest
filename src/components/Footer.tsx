import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  return (
    <>
      <footer data-testid="footer" className="footer">
        FlavourQuest by <span>Brigita Sabutyte</span>
        <a target="_blank" rel="noreferrer" href="https://github.com/Brigilets">
          <FontAwesomeIcon
            className="anchor-icon"
            icon={faGithub}
            color="rgb(219, 213, 213)"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/brigita-sabutyt%C4%97-junior-web-dev/"
        >
          <FontAwesomeIcon
            className="anchor-icon"
            icon={faLinkedin}
            color="rgb(219, 213, 213)"
          />
        </a>
      </footer>
    </>
  );
};

export default Footer;
