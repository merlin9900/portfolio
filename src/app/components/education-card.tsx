import { ReactNode } from "react";

interface EducationCardProps {
  children: ReactNode;
  uninversityName: string;
  degree: string;
  duration: string;
}

const EducationCard = ({
  children,
  degree,
  duration,
  uninversityName,
}: EducationCardProps) => {
  return (
    <div className="flex gap-3">
      <div className="size-14 rounded-full border-2"></div>
      <div className="flex-1">
        <div className="flex justify-between  mb-3">
          <div className="flex gap-4 items-center">
            <div className="text-sm">
              <p className="font-semibold">{uninversityName}</p>
              <p className="font-thin">{degree}</p>
            </div>
          </div>
          <div className="mt-3">
            <p className="text-sm text-gray-400">{duration}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default EducationCard;
