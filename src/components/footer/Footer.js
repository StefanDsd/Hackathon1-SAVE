import React from "react";
import "./Footer.css";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="Footer">
 <div>
 <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/StefanDsd/Hackathon1-SAVE"
                  className="github social inabout"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
      <div className="row">
      © $AV€, 2022. All rights reserved.
    </div>
    </div>
  );
}

export default Footer;
