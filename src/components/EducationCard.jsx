import React from "react";

const EducationCard = () => {
  const educationData = [
    {
      id: 1,
      date: "2021 - 2024",
      name: "Bsc (Hons) Computing",
      collegeName: "Islington College",
      universityName: "London Metropolitan University",
      location: "Kathmandu, Nepal",
    },
    {
      id: 2,
      date: "2019 - 2021",
      name: "SLC (NEB)",
      collegeName: "Trinity International College",
      universityName: "",
      location: "Kathmandu, Nepal",
    },
  ];

  return (
    <div className="dark:bg-black space-y-5  w-full dark:text-white text-black bg-white">
      {educationData.map((education) => (
        <div className="notification mt-5" key={education.id}>
          <div className="notiglow"></div>
          <div className="notiborderglow"></div>
          <div className="notititle flex justify-between">
            <p> {education.date}</p>
            <p>{education.location}</p>
          </div>
          <div className="notibody text-xl mb-2">{education.collegeName}</div>
          <div className="notibody">{education.universityName}</div>
        </div>
      ))}
    </div>
  );
};

export default EducationCard;
