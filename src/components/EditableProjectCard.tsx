import { useForm, SubmitHandler } from "react-hook-form";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import placeholder from "/images/project-placeholder.svg?url";
import axios from "axios";
import { ProjectType } from "../types/ProjectType";

type ProjectInfosForm = {
  imagePath: FileList;
  title: string;
  description: string;
};
type EditableProjectCardType = {
  projectId: string;
};

const EditableProjectCard = ({ projectId }: EditableProjectCardType) => {
  const [project, setProject] = useState<ProjectType>();
  const [imgSrc, setImgSrc] = useState(placeholder);

  const getProject = (projectId: string) => {
    axios
      .get(`http://localhost:5000/projects/${projectId}`)
      .then(function (response) {
        // console.log(response.data);
        setProject(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateProject = (projectId: string, data: ProjectInfosForm) => {
    const reqConfig = {
      method: "put",
      url: `http://localhost:5000/projects/${projectId}`,
      data: data,
    };
    axios(reqConfig)
      .then(function (response) {
        setProject(response.data);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm<ProjectInfosForm>();

  const onSubmit: SubmitHandler<ProjectInfosForm> = (data) => {
    console.log(data);
    updateProject(projectId, data);
  };

  useEffect(() => {
    getProject(projectId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (project) {
      setValue("title", project.title);
      setValue("description", project.description);
      if (project.imagePath) {
        setImgSrc(`/${project.imagePath}`);
      }
    }
  }, [project, setValue]);

  return (
    <div
      className={`
      relative flex flex-col gap-2 transition  shadow-neumorphic-out text-slate-600 bg-slate-900 p-5 rounded-md w-11/12 md:w-1/3 lg:w-1/5`}
      id={project?.title}
    >
      <form>
        <div className="group-hover:blur-sm flex justify-center">
          <label htmlFor="imgInp" className="hover:cursor-pointer">
            <input
              accept="image/*"
              type="file"
              id="imgInp"
              className="hidden"
              onChange={(e) => {
                if (e.target.files) {
                  // setValue("imagePath", e.target.files);
                  setImgSrc(URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
            <img
              defaultValue="titre du projet"
              src={imgSrc}
              className="max-h-64 object-contain lg:max-h-24 "
            />
          </label>
        </div>
        <input
          className="text-lg group-hover:blur-sm focus:outline outline-white outline-1 w-full rounded mt-2 cursor-pointer"
          type="text"
          {...register("title")}
        />
        {/* <h2 >{project.title}</h2> */}
        <textarea
          className="text-sm group-hover:blur-sm focus:outline outline-white outline-1 rounded w-full mt-2 cursor-pointer"
          // value={project.description}
          rows={4}
          {...register("description")}
        />
        {/* <p >{project.description}</p> */}
        <div className="flex gap-1.5 flex-wrap group-hover:blur-sm mt-0.5">
          {project?.tags.map((tag, index) => {
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
          <CheckIcon
            className="w-5 cursor-pointer"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </div>
  );
};
export default EditableProjectCard;
