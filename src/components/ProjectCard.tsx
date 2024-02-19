// import projectPlaceholder from "../assets/project-placeholder.svg";
import placeholder from "../images/project-placeholder.svg";

type tags = {
  color: string;
  title: string;
};
type ProjectCardPropsype = {
  project: {
    imagePath: string;
    title: string;
    description: string;
    tags: tags[];
  };
};

const ProjectCard = ({ project }: ProjectCardPropsype) => {
  console.log(project);

  return (
    <div className="flex flex-col gap-2 transition hover:shadow-neumorphic-in shadow-neumorphic-out text-slate-600 bg-slate-900 p-5 w-11/12 rounded-md md:w-1/3 lg:w-1/5">
      <div>
        <img
          defaultValue="titre du projet"
          src={
            project.imagePath
              ? `${window.location.origin}/${project.imagePath}`
              : placeholder
          }
          alt=""
        />
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
