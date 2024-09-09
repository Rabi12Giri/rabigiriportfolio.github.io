import React from "react";
import { aboutMeData } from "../constants/info";

const MyWorksChart = () => {
  return (
    <div className="relative z-10 mt-16 lg:mt-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-12 lg:gap-y-0  pb-12 ">
      <div className="flex items-center gap-3">
        <h1 className="text-5xl font-semibold text-primaryRed ">
          {aboutMeData.experience}
        </h1>
        <p className="text-base">
          Years of <br /> Experience
        </p>
      </div>

      <div className="flex items-center gap-3">
        <h1 className="text-5xl font-semibold text-primaryRed">
          {aboutMeData.happyClients}+
        </h1>
        <p className="text-base">
          Happy <br />
          Clients
        </p>
      </div>

      <div className="flex items-center gap-3">
        <h1 className="text-5xl font-semibold text-primaryRed">
          {aboutMeData.projectCompleted}+
        </h1>
        <p className="text-base">
          Project <br /> Completed
        </p>
      </div>
    </div>
  );
};

export default MyWorksChart;
