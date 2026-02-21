import EducationCard from "./ui/education-card";

const Education = () => {
  return (
    <div id="education" className="pt-24">
      <h3 className="text-xl font-semibold mb-2">Education</h3>
      <div className="flex flex-col gap-3">
        <EducationCard
          uninversityName="Indian Institute of Technology, Patna"
          duration="Jan 2026 - Present"
          degree="Master of Computer Applications"
          logo="/iitp.svg"
        >
          <></>
        </EducationCard>
        <EducationCard
          uninversityName="Savitribai Phule Pune University"
          duration="Apr 2020 - Mar 2023"
          degree="Bachelor of Computer Applications"
          logo="/sppu.svg"
        >
          <ul className="text-sm list-disc ml-4">
            <li>GPA 7.4</li>
          </ul>
        </EducationCard>
      </div>
    </div>
  );
};

export default Education;
