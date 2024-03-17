import { Tags } from "./TagsType";
import { ImageType } from "./ThumbnailInfoType";

export type ProjectCardType = {
  project: {
    title: string;
    description: string;
    tags: Tags[];
    image: ImageType[]
    _id: string;
  };
};
