import React from "react";
import { Copyright, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex items-center justify-between py-8">
      <p className="flex items-center gap-1">
        <Copyright />
        2026 Pranav Pokale
      </p>

      <div className="flex items-center gap-3 text-gray-400">
        <Link
          href={"https://github.com/merlin9900"}
          className="hover:text-white hover:scale-105 transition-all duration-300"
          target="_blank"
        >
          <Github />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/pranavpokale"}
          className="hover:text-white hover:scale-105 transition-all duration-300"
          target="_blank"
        >
          <Linkedin />
        </Link>

        <Mail />
      </div>
    </div>
  );
};

export default Footer;
