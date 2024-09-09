import React from "react";

const ExperienceCard = () => {
  const experienceData = [
    {
      id: 1,
      date: "2023/07/24 - 2023/10/20",
      fieldName: "ReactJS Intern",
      primaryCompanyName: "Protozoa Host Pvt. Ltd.",
      secondaryCompanyName: "London Metropolitan University",
      location: "Kathmandu, Nepal",
    },
    // {
    //   id: 2,
    //   date: "2019 - 2021",
    //   name: "SLC (NEB)",
    //   collegeName: "Trinity International College",
    //   universityName: "",
    //   location: "Kathmandu, Nepal",
    // },
  ];

  return (
    <div className="dark:bg-black space-y-5  w-full dark:text-white text-black bg-white">
      {experienceData.map((education) => (
        <div className="notification mt-5" key={education.id}>
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle flex justify-between">
            <p> {education.date}</p>
            <p>{education.location}</p>
          </div>
          <div className="notibody text-xl mb-2">{education.fieldName}</div>
          <div className="notibody">{education.primaryCompanyName}</div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
