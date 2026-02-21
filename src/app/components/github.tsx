"use client";

import { GitHubCalendar } from "react-github-calendar";

const Github = () => {
  return (
    <div id="github-stats" className="pt-24">
      <h3 className="text-xl font-semibold mb-2">Github Stats</h3>
      <div className="w-full max-w-full overflow-hidden">
        <GitHubCalendar
          style={{ width: "100%", maxWidth: "100%" }}
          username="merlin9900"
        />
      </div>
    </div>
  );
};

export default Github;
