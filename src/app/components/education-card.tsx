import Image from "next/image";
import { ReactNode } from "react";

interface EducationCardProps {
  children: ReactNode;
  uninversityName: string;
  degree: string;
  duration: string;
  logo: string;
}

const EducationCard = ({
  children,
  degree,
  duration,
  logo,
  uninversityName,
}: EducationCardProps) => {
  return (
    <div className="flex gap-3">
      <div className="size-14 overflow-hidden rounded-full border-2 flex items-center justify-center object-cover">
        <Image
          src={logo}
          alt={uninversityName}
          width={130}
          height={40}
          priority
          className="size-full object-cover"
          objectFit="contain"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-3">
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
