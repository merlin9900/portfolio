import Image from "next/image";

interface ExperienceCardProps {
  orgName: string;
  role: string;
  duration: string;
  logo: string;
}

const ExperienceCard = ({
  duration,
  orgName,
  role,
  logo,
}: ExperienceCardProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src={logo}
            alt={orgName}
            width={50}
            height={50}
            priority
            className="object-contain"
          />
        </div>
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
