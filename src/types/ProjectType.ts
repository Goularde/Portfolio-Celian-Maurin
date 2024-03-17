import { ImageType } from "./ThumbnailInfoType";

export type ProjectType = {
  image: ImageType[];
  title: string;
  description: string;
  tags: { color: string; title: string }[];
  _id: string;
};
