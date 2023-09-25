import { View, Text } from "react-native"; // 기본 Image 컴포넌트 사용
import React from "react";
import { IUserStories } from "@/interfaces";
import { styles } from "./styles";
import UserProfileImage from "../UserProfileImage/UserProfileImage";

const UserStory = ({ profileImage, name }: IUserStories) => {
    return (
        <View style={styles.storyContainer}>
            <UserProfileImage profileImage={profileImage} />
            <Text style={styles.storyName}>{name}</Text>
        </View>
    );
};

export default UserStory;
