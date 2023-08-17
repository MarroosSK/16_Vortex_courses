import { ReactNode } from "react";

//context
export interface ChildTypes {
  children: ReactNode;
}

export interface LoginType {
  username: string;
  password: string;
}

export interface UserType {
  id: string;
  username: string;
  email: string;
  password: string;
  name: string;
  coverPicture: string;
  profilePicture: string;
  city: string;
  website: string;
}

export interface PostType {
  id: string;
  name: string;
  userId: string;
  user: UserType;
  profilePicture: string;
  desc: string;
  img: string;
  createdAt: Date;
}

export interface StoriesType {
  id: number;
  name: string;
  img: string;
}

export interface CommentsType {
  id: number;
  desc: string;
  name: string;
  user: UserType;
  profilePicture: string;
}
