import React from "react";
import { IUserStories } from "@/interfaces";
import { StoryContainer, StoryName } from "./styles";
import UserProfileImage from "../UserProfileImage/UserProfileImage";

const UserStory = ({ profileImage, name }: IUserStories) => {
    return (
        <StoryContainer>
            <UserProfileImage
                profileImage={profileImage}
                imageDimensions={65}
            />
            <StoryName>{name}</StoryName>
        </StoryContainer>
    );
};

export default UserStory;
