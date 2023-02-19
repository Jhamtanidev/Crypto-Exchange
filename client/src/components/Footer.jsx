import React from "react";

import { SiLinkedin } from "react-icons/si";
import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
      </div>
    </div>
    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center mb-4">Come join us and hear for the unexpected miracle</p>
      <div className="flex flex-col items-center">
        <div className="flex flex-row justify-center items-center">
          <a href="https://www.linkedin.com/in/parmar-hitesh-7b081a227/" target="_blank" rel="noopener noreferrer" className="mr-3">
            <SiLinkedin fontSize={21} className="text-white linkedin-icon" />
          </a>
          <a href="https://www.linkedin.com/in/dev-jhamtani-591556218/" target="_blank" rel="noopener noreferrer" className="mr-3">
            <SiLinkedin fontSize={21} className="text-white linkedin-icon" />
          </a>
          <a href="https://www.linkedin.com/in/techking007/" target="_blank" rel="noopener noreferrer" className="mr-3">
            <SiLinkedin fontSize={21} className="text-white linkedin-icon" />
          </a>
          <a href="https://www.linkedin.com/in/shivang-parmar/" target="_blank" rel="noopener noreferrer">
            <SiLinkedin fontSize={21} className="text-white linkedin-icon" />
          </a>
        </div>
        <div className="py-2" />
      </div>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@metaversepg2023</p>
      <p className="text-white text-right text-xs">Made with ❤️ by MetaMens</p>
    </div>
  </div>
);

export default Footer;
