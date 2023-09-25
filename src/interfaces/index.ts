import { ImageSourcePropType } from "react-native";

export interface ITitle {
    title: string;
}
export interface IUserStories {
    name: string;
    id?: number;
    profileImage: ImageSourcePropType;
}
