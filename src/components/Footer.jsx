import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-5 lg:mt-0 flex flex-col lg:flex-row justify-between items-center px-12 text-center dark:bg-black relative bg-white dark:text-white">
      <div>
        <ul className="wrapper ">
          <a href="">
            <li className="icon linkedin dark:bg-black">
              <span className="tooltip">LinkedIn</span>
              <FaLinkedin className="text-xl" />
            </li>
          </a>
          <a href="">
            <li className="icon github dark:bg-black">
              <span className="tooltip">GitHub</span>
              <FaGithub className="text-xl" />
            </li>
          </a>
          <a href="">
            <li className="icon instagram dark:bg-black">
              <span className="tooltip">Instagram</span>
              <FaInstagram className="text-xl" />
            </li>
          </a>

          <a href="mailto:giri.rabi.2004@gmail.com">
            <li className="icon mail dark:bg-black">
              <span className="tooltip">Mail</span>
              <FaEnvelope className="text-xl" />
            </li>
          </a>
        </ul>
      </div>
      <p>&copy; 2024 All Rights Reserved by Rabi Giri</p>
      <div className="flex flex-col items-center lg:items-start space-y-2 mt-3 ">
        <p className="text-sm">giri.rabi.2004@gmail.com</p>
        <p className="text-sm">+977 9841868833</p>
      </div>
    </div>
  );
};

export default Footer;
