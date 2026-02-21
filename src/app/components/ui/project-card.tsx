"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardPropps {
  name: string;
  url: string;
  desription: string;
  techStack: string[];
  githubUrl: string;
}

const ProjectCard = ({
  name,
  url,
  desription,
  techStack,
  githubUrl,
}: ProjectCardPropps) => {
  return (
    // <Link href={url}>
    <div
      onClick={() => window.open(url, "_blank")}
      className="flex flex-col gap-1.5 group "
    >
      <div className="flex items-end justify-between">
        <h4 className="text-lg flex items-center gap-2 group-hover:underline underline-offset-2 font-semibold">
          {name}{" "}
          <ArrowUpRight className="size-4 text-accent/30 transition-all group-hover:text-accent duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:scale-110" />
        </h4>
        <Link
          href={githubUrl}
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          className="hover:text-accent hover:scale-110 transition-all duration-200"
        >
          <Github />
        </Link>
      </div>
      <p className="text-gray-400 text-sm group-hover:text-white transition-all duration-200">
        {desription}
      </p>
      <div className="text-accent flex flex-wrap items-center gap-3">
        {techStack.map((tech) => (
          <span className="text-sm" key={tech}>
            {`#${tech}`}
          </span>
        ))}
      </div>
    </div>
    // </Link>
  );
};

export default ProjectCard;
