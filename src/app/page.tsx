import Link from "next/link";
import Header from "./components/header";
import SpotifySection from "./components/spotify";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Education from "./components/education";
import Experience from "./components/experience";
import Github from "./components/github";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col pt-14 scroll-smooth">
      <Header />
      <div className="pt-24">
        <h3 className="text-xl font-semibold">About</h3>
        <p className="text-sm text-gray-400">
          Software Engineer at Solytics Partners with 2.5+ years of experience
          building scalable, high-performance web applications using React,
          Next.js, and TypeScript. I specialize in architecting reusable
          component systems, managing complex state with Redux and React Query,
          and developing form-heavy, data-driven platforms with strong type
          safety and validation. I have led frontend development for e-commerce
          and CRM products, focusing on performance optimization, accessibility,
          and clean architecture. Passionate about writing maintainable code,
          improving developer experience, and delivering seamless user
          interfaces, I thrive in Agile teams building production-grade
          applications that scale reliably and efficiently.
        </p>
      </div>

      <div className="flex items-center gap-6 justify-center text-gray-500 pt-24">
        <Link href={"#experience"}>
          <p className="hover:text-white origin-center transition-all duration-200">
            Experience
          </p>
        </Link>
        <p>/</p>
        <Link href={"#education"}>
          <p className="hover:text-white origin-center transition-all duration-200">
            Education
          </p>
        </Link>
        <p>/</p>
        <Link href={"#projects"}>
          <p className="hover:text-white origin-center transition-all duration-200">
            Projects
          </p>
        </Link>
        <p>/</p>
        <Link href={"#skills"}>
          <p className="hover:text-white origin-center transition-all duration-200">
            Skills
          </p>
        </Link>
        <p>/</p>
        <Link href={"#github-stats"}>
          <p className="hover:text-white origin-center transition-all duration-200">
            Github
          </p>
        </Link>
        <p>/</p>
        <Link href={"#contact"}>
          <p className="hover:text-white origin-center transition-all duration-200">
            Contact
          </p>
        </Link>
      </div>

      <Experience />

      <Education />
      <Projects />

      <Skills />

      <Github />

      <SpotifySection />

      <Contact />
    </div>
  );
}
