import { Image } from "react-native";
import React from "react";
import { IUserPosts } from "@/interfaces";
import {
    UserContainer,
    UserPostContainer,
    UserPostImage,
    UserPostStat,
    UserPostStatText,
    UserPostbutton,
    UserPostbuttonRight,
    UserProfilePostContainer,
    UserTextContainer,
    Userlocation,
    Username,
} from "./styles";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import {
    faBookmark,
    faHeart,
    faMessage,
} from "@fortawesome/free-regular-svg-icons";

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
        <UserPostContainer>
            <UserProfilePostContainer>
                <UserContainer>
                    <UserProfileImage
                        profileImage={profileImage}
                        imageDimensions={48}
                    />
                    <UserTextContainer>
                        <Username>
                            {firstName} {lastName}
                        </Username>
                        {location && <Userlocation>{location}</Userlocation>}
                    </UserTextContainer>
                </UserContainer>
                <FontAwesomeIcon icon={faEllipsisH} size={24} />
            </UserProfilePostContainer>
            <UserPostImage>
                <Image source={postImage} />
            </UserPostImage>
            <UserPostStat>
                <UserPostbutton>
                    <FontAwesomeIcon icon={faHeart} />
                    <UserPostStatText>{likes}</UserPostStatText>
                </UserPostbutton>
                <UserPostbuttonRight>
                    <FontAwesomeIcon icon={faMessage} />
                    <UserPostStatText>{comments}</UserPostStatText>
                </UserPostbuttonRight>
                <UserPostbuttonRight>
                    <FontAwesomeIcon icon={faBookmark} />
                    <UserPostStatText>{bookmarks}</UserPostStatText>
                </UserPostbuttonRight>
            </UserPostStat>
        </UserPostContainer>
    );
};

export default UserPost;
