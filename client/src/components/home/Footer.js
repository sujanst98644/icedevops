import React from "react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { ImInstagram } from "react-icons/im";
import { MdOutlinePhone } from "react-icons/md";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="text-black bg-[#F5F7FA]">
      <div className="max-w-[1140px] mx-auto px-6 py-10 space-y-5">

        {/* Brand */}
        <div className="text-center">
          <h3 className="text-[#3A86FF] tracking-wide">
            ICE-CREAM FACTORY
          </h3>
        </div>

        {/* Navigation / Social */}
        <ul className="flex justify-center gap-8 text-sm">
          {[
            { label: "Home", icon: <FaXTwitter /> },
            { label: "About", icon: <FaFacebookF /> },
            { label: "Services", icon: <TfiYoutube /> },
            { label: "Contact", icon: <ImInstagram /> },
          ].map(({ label, icon }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-2"
            >
              <span>{label}</span>
              <div className="w-9 h-9 rounded-full bg-white text-[#283646] flex items-center justify-center">
                {icon}
              </div>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="h-px bg-[#76AEFF]/50 w-full" />

        <div className="flex justify-between gap-4 text-sm">
          <span>© 2026 Studio. All rights reserved.</span>

          <span className="flex items-center gap-2">
            <GrLocation /> Kathmandu, Nepaltar-2, Tarkeshwor
          </span>

          <span className="flex items-center gap-2">
            <GoMail /> ourstudio@hello.com
          </span>

          <span className="flex items-center gap-2">
            <MdOutlinePhone /> +977 567890000
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
