import { View, Text, Image } from "react-native"; // 기본 Image 컴포넌트 사용
import React from "react";
import { IUserStories } from "@/interfaces";

const UserStory = ({ profileImage, name }: IUserStories) => {
    console.log("sdsds?", profileImage);
    return (
        <View>
            <Image source={profileImage} />
            <Text>{name}</Text>
        </View>
    );
};

export default UserStory;
