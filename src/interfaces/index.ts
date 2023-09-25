import { ImageSourcePropType } from "react-native";

export interface ITitle {
    title: string;
}
export interface IUserStories {
    name: string;
    id?: number;
    profileImage: ImageSourcePropType;
}
export interface IUserPosts {
    id?: number;
    firstName: string;
    lastName: string;
    location: string;
    profileImage: ImageSourcePropType;
    postImage: ImageSourcePropType;
    likes: number;
    comments: number;
    bookmarks: number;
}
