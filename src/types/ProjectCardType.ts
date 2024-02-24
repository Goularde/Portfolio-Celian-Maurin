import { Tags } from "./TagsType";

export type ProjectCardType = {
  project: {
    imagePath: string;
    title: string;
    description: string;
    tags: Tags[];
    _id: string;
  };
};
