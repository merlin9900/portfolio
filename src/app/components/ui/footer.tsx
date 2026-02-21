import React from "react";
import Link from "next/link";
import { cn } from "@/app/lib/utils";

const iconClass =
  "size-6 fill-zinc-400 group-hover:fill-white transition-all duration-300";

const Footer = () => {
  return (
    <div className="flex items-center border-t justify-between py-8 mt-24">
      <p className="flex items-center gap-1 text-zinc-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="size-4 fill-zinc-400"
        >
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20Zm0 2a8 8 0 110 16 8 8 0 010-16Zm0 3a1 1 0 011 1v4.382l3.447 1.724a1 1 0 11-.894 1.788l-4-2A1 1 0 0111 13V8a1 1 0 011-1Z" />
        </svg>
        2026 Pranav Pokale
      </p>

      <div className="flex items-center gap-4">
        {/* GitHub */}
        <Link
          href="https://github.com/merlin9900"
          target="_blank"
          className="group hover:scale-105 transition-all duration-300"
        >
          <svg
            viewBox="0 0 24 24"
            className={iconClass}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.99 3.23 9.23 7.71 10.73.56.1.76-.24.76-.53v-1.87c-3.14.68-3.8-1.34-3.8-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.17 1.73 1.17 1 .1.77 2.63 2.63 1.87.1-.73.39-1.23.71-1.52-2.51-.29-5.15-1.26-5.15-5.61 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.47.11-3.07 0 0 .95-.3 3.1 1.16a10.74 10.74 0 015.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.6.23 2.78.11 3.07.72.79 1.16 1.8 1.16 3.04 0 4.36-2.64 5.31-5.16 5.6.4.34.75 1 .75 2.02v2.99c0 .29.2.64.77.53 4.47-1.5 7.7-5.74 7.7-10.73C23.25 5.48 18.27.5 12 .5Z" />
          </svg>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/pranavpokale"
          target="_blank"
          className="group hover:scale-105 transition-all duration-300"
        >
          <svg viewBox="0 0 24 24" className={cn(iconClass, "h-6")}>
            <path d="M4.98 3.5C4.98 5 3.9 6.1 2.5 6.1S0 5 0 3.5 1.08.9 2.5.9s2.48 1.1 2.48 2.6ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.8c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.03-3 4.13V24h-4V8Z" />
          </svg>
        </Link>

        {/* Discord */}
        <Link
          href="https://discord.com/users/merlin99"
          target="_blank"
          className="group hover:scale-105 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 127.14 96.36"
            className={iconClass}
          >
            <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.91 97.68 97.68 0 0 0-29.08 0A72.37 72.37 0 0 0 45.67 0 105.89 105.89 0 0 0 19.39 8.09C2.79 33.65-1.38 58.57.7 83.14a105.73 105.73 0 0 0 32.17 16.24 77.7 77.7 0 0 0 6.89-11.17 68.42 68.42 0 0 1-10.84-5.18c.91-.67 1.8-1.36 2.66-2.08a75.57 75.57 0 0 0 63.73 0c.87.72 1.76 1.41 2.67 2.08a68.68 68.68 0 0 1-10.85 5.19 77.37 77.37 0 0 0 6.89 11.16A105.25 105.25 0 0 0 126.44 83c2.44-28.5-4.17-53.19-18.74-74.93ZM42.45 65.69c-6.27 0-11.44-5.75-11.44-12.82s5.05-12.83 11.44-12.83c6.44 0 11.53 5.8 11.44 12.83 0 7.07-5.05 12.82-11.44 12.82Zm42.24 0c-6.27 0-11.44-5.75-11.44-12.82s5.05-12.83 11.44-12.83c6.44 0 11.53 5.8 11.44 12.83 0 7.07-5.05 12.82-11.44 12.82Z" />
          </svg>
        </Link>

        {/* Mail */}
        <Link
          href="mailto:your-email@example.com"
          className="group hover:scale-105 transition-all duration-300"
        >
          <svg viewBox="0 0 24 24" className={iconClass}>
            <path d="M20 4H4a2 2 0 00-2 2v.01L12 13l10-6.99V6a2 2 0 00-2-2Zm0 4.24-7.4 5.18a2 2 0 01-2.2 0L3 8.24V18a2 2 0 002 2h14a2 2 0 002-2V8.24Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
