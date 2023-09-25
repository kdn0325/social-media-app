import { View, Text } from "react-native"; // 기본 Image 컴포넌트 사용
import React from "react";
import { IUserPosts, IUserStories } from "@/interfaces";
import { styles } from "./styles";
import UserProfileImage from "../UserProfileImage/UserProfileImage";

const UserPost = ({
    firstName,
    postImage,
    profileImage,
    lastName,
    location,
    likes,
    comments,
    bookmarks,
}: IUserPosts) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <UserProfileImage profileImage={profileImage} />
            <View style={{ justifyContent: "center" }}>
                <Text>
                    {firstName} {lastName}
                </Text>
                {location && <Text>{location}</Text>}
            </View>
        </View>
    );
};

export default UserPost;
