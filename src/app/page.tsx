import Image from "next/image";
import ExperienceCard from "./components/experience-card";
import EducationCard from "./components/education-card";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-24 pt-14">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-6xl font-semibold">Hi, I'm Pranav</h1>
            <Image
              src="/hi.svg"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
          </div>
          <p className="max-w-lg">
            Software Engineer at Solytics Partners. I build web applications
            with a focus on performance and scalability.
          </p>
        </div>
        <div className="border-2 size-36 rounded-full"></div>
      </div>

      <div>
        <h3 className="text-xl font-semibold">About</h3>
        <p className="text-sm text-gray-400">
          I'm a Software Engineer with 2.5 years of experience, currently
          working in the Platform Engineering team at Humanforce. I specialise
          in building scalable systems, and solving platform-wide productivity
          and performance challenges across products like Humanforce HR, and
          Workforce Management - used by 600,000+ users. I hold a Bachelor's
          degree in Computer Applications from Pune University & I am pursuing
          Master's in Computer Applications from Indian Institute of Technology,
          Patna.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
        <div className="flex flex-col gap-2">
          <ExperienceCard
            orgName="Solytics Partners"
            duration="Feb 2026 - Present"
            role="Software Engineer"
          />
          <ExperienceCard
            orgName="Olatech Solutions"
            duration="Jul 2025 - Feb 2026"
            role="Frontend Developer"
          />
          <ExperienceCard
            orgName="Rajavi Technologies"
            duration="May 2023 - Jul 2025"
            role="Frontend Developer"
          />
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <div className="flex flex-col gap-3">
          <EducationCard
            uninversityName="Savitribai Phule Pune University"
            duration="Apr 2020 - Mar 2023"
            degree="Bachelor of Computer Applications"
          >
            <ul className="text-sm list-disc ml-4">
              <li>GPA 7.4</li>
            </ul>
          </EducationCard>
          <EducationCard
            uninversityName="Indian Institute of Technology, Patna"
            duration="Jan 2026 - Present"
            degree="Master of Computer Applications"
          >
            <></>
          </EducationCard>
        </div>
      </div>
    </div>
  );
}
