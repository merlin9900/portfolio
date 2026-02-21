import ExperienceCard from "./ui/experience-card";

const Experience = () => {
  return (
    <div id="experience" className="pt-24">
      <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
      <div className="flex flex-col gap-3">
        <ExperienceCard
          orgName="Solytics Partners"
          duration="Feb 2026 - Present"
          role="Software Engineer"
          logo="/sp.svg"
        />
        <ExperienceCard
          orgName="Olatech Solutions"
          duration="Jul 2025 - Feb 2026"
          role="Frontend Developer"
          logo="/ots.svg"
        />
        <ExperienceCard
          orgName="Rajavi Technologies"
          duration="May 2023 - Jul 2025"
          role="Frontend Developer"
          logo="/rajavi.svg"
        />
      </div>
    </div>
  );
};

export default Experience;
