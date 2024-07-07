import React from "react";
import {
  PrimaryHeading,
  SecondaryHeading,
} from "../components/SharedUI/Heading";
import ExperienceCard from "../components/ExperienceCard";
import EducationCard from "../components/EducationCard";
import { GiGraduateCap } from "react-icons/gi";

const Experience = () => {
  return (
    <div
      className="bg-white dark:bg-black dark:text-white text-black h-fit lg:h-[70vh] mt-12 lg:mt-0"
      id="experience"
    >
      <PrimaryHeading>Experience</PrimaryHeading>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12  w-[90%] md:w-[80%] mx-auto mt-8">
        <div className="w-full">
          <SecondaryHeading>My Education</SecondaryHeading>
          <EducationCard />
        </div>

        <div className="w-full">
          <SecondaryHeading>My Experience</SecondaryHeading>

          <ExperienceCard />
        </div>
      </div>
    </div>
  );
};

export default Experience;
