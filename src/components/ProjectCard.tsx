// import projectPlaceholder from "../assets/project-placeholder.svg";
import { useEffect, useState } from "react";
import placeholder from "../images/project-placeholder.svg";
import { ImageType } from "../types/ThumbnailInfoType";

type tags = {
  color: string;
  title: string;
};
type ProjectCardPropsype = {
  project: {
    title: string;
    description: string;
    tags: tags[];
    image: ImageType[];
  };
};

const ProjectCard = ({ project }: ProjectCardPropsype) => {
  const [imgSrc, setImgSrc] = useState(placeholder);

  useEffect(() => {
    if (project.image[0]) {
      setImgSrc(`http://localhost:5000/${project.image[0].path}`);
    }
  }, []);

  return (
    <div className="flex flex-col gap-2 transition hover:shadow-neumorphic-in shadow-neumorphic-out text-slate-600 bg-slate-900 p-5 w-11/12 rounded-md md:w-1/3 lg:w-1/5">
      <div>
        <img defaultValue="titre du projet" src={imgSrc} alt="" />
      </div>
      <h2 className="text-lg">{project.title}</h2>
      <p className="text-sm">{project.description}</p>
      <div className="flex  gap-1.5 flex-wrap">
        {project.tags.map((tag, index) => {
          const color = `#${tag.color}`;
          return (
            <div
              key={index}
              className={`flex h-4 gap-1  hover:scale-105 transition-all text-blue-500 text-[0.60rem] leading-[0.3rem] rounded-xl p-1 border`}
              style={{
                borderColor: color,
                boxShadow: `0px 0px 13px -5px ${color}`,
              }}
            >
              <>
                <svg fill={color} viewBox="0 0 10 10">
                  <circle cx="5" cy="5" r="5" />
                </svg>
                <span key={index} style={{ color: color }}>
                  {tag.title}
                </span>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProjectCard;
