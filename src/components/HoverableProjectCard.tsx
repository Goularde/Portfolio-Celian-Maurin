import { PencilSquareIcon } from "@heroicons/react/24/solid";
import placeholder from "../images/project-placeholder.svg";
import { ProjectCardType } from "../types/ProjectCardType";
import { Link } from "wouter";

const HoverableProjectCard = ({ project }: ProjectCardType) => {
  return (
    <div
      className={`
      group relative flex flex-col gap-2 transition shadow-neumorphic-out text-slate-600 bg-slate-900 p-5 rounded-md w-11/12 md:w-1/3 lg:w-1/5`}
      id={project.title}
    >
      <div className="group-hover:blur-sm flex justify-center duration-300">
        <img
          defaultValue="titre du projet"
          src={project.imagePath ? project.imagePath : placeholder}
          className="max-h-64 object-contain lg:max-h-24 "
        />
      </div>
      <h2 className="text-lg group-hover:blur-sm duration-300">
        {project.title}
      </h2>
      <p className="text-sm group-hover:blur-sm duration-300">
        {project.description}
      </p>
      {/* <p >{project.description}</p> */}
      <div className="flex gap-1.5 flex-wrap group-hover:blur-sm mt-0.5 duration-300">
        {project.tags.map((tag, index) => {
          const color = `#${tag.color}`;
          return (
            <div
              key={index}
              className={`flex h-4 gap-1  hover:scale-105 transition-all text-[0.60rem] leading-[0.3rem] rounded-xl p-1 border cursor-pointer`}
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

      <Link href={`/dashboard/edit/${project._id}`}>
        <div className="rounded-md opacity-0 hover:cursor-pointer hover:opacity-100 bg-slate-800/40 duration-300 absolute gap-4 inset-0 z-10 flex justify-center items-center text-4xl font-semibold">
          Editer
          <PencilSquareIcon className="w-10" />
        </div>
      </Link>
    </div>
  );
};
export default HoverableProjectCard;
