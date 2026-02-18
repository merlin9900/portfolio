interface ExperienceCardProps {
  orgName: string;
  role: string;
  duration: string;
}

const ExperienceCard = ({ duration, orgName, role }: ExperienceCardProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="size-14 rounded-full border-2"></div>
        <div className="text-sm">
          <p className="font-semibold">{orgName}</p>
          <p className="font-thin">{role}</p>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400">{duration}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
