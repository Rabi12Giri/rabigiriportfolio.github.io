import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import SimpleImageSlider from "react-simple-image-slider";
import { DialogButton, SlickButton } from "./SharedUI/Buttons/Buttons";

const ProjectCard = ({ project }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const sliderImages = project.details.images.map((image) => ({ url: image }));
  return (
    <div className="cursor-pointer dark:text-white relative group w-80 md:w-96 h-56 rounded-lg shadow-lg overflow-hidden 719px:w-[21rem] 865px:w-[21rem]">
      {console.log("project", project.image)}
      {/* Front Content */}
      <div className="absolute inset-0 flex justify-center items-center text-white transition-opacity duration-500 ease-in-out group-hover:opacity-50">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Back Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-3 items-center bg-[rgba(0,0,0,0.4)] text-white transform transition duration-500 ease-in-out translate-y-full group-hover:translate-y-0 group-hover:opacity-100 opacity-0">
        <p className=" text-center">{project.description}</p>
        <p className="mb-4">{project.jobType}</p>
        <SlickButton onClick={handleOpen}>Learn More</SlickButton>
      </div>
      <Dialog
        open={open}
        handler={handleOpen}
        className="overflow-y-scroll h-[90vh]"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader className="flex justify-between">
          {project.title}
          <div className="p-1 rounded-full bg-red-500 cursor-pointer">
            <IoClose onClick={handleOpen} className="text-white" />
          </div>
        </DialogHeader>
        <DialogBody className="py-0">
          <p className="mb-4">Tech stack: {project.techStack}</p>{" "}
          <div className="w-full bg-[#333333] pr-5 overflow-hidden relative mb-4">
            <SimpleImageSlider
              images={sliderImages}
              width="100%"
              height="300px"
              showBullets={true}
              showNavs={true}
            />
          </div>
          <p>{project.details.content}</p>
        </DialogBody>
        <DialogFooter className="flex gap-4 ">
          <DialogButton
            className=""
            onClick={() => window.open(project.github, "_blank")}
          >
            <FaGithub />
            Code
          </DialogButton>
          <DialogButton
            className=""
            onClick={() => window.open(project.linkTo, "_blank")}
          >
            <FaLink />
            View Site
          </DialogButton>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default ProjectCard;
