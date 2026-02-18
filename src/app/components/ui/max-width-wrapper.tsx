import React from "react";

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-180 min-h-screen flex flex-col mx-auto font-sans">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
