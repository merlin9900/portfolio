import React from "react";

interface SkillCardProps {
  children: React.ReactNode;
}

const SkillCard = ({ children }: SkillCardProps) => {
  return (
    <div className="p-2 size-16 rounded-lg bg-gray-400/10 flex items-center justify-center">
      {children}
    </div>
  );
};

export default SkillCard;
