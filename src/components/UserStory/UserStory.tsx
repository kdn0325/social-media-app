import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native-svg";
import { IUserStories } from "@/interfaces";

interface UserStoryProps {
    profileImage: string; // profileImage의 타입을 명시적으로 지정
    name: string;
}

const UserStory = ({ profileImage, name }: UserStoryProps) => {
    console.log("profileImage?", profileImage);
    return (
        <View>
            <Image source={{ uri: profileImage }} />
            <Text>{name}</Text>
        </View>
    );
};

export default UserStory;
