import { ImageSourcePropType } from "react-native"; // 기본 Image 컴포넌트 사용
import React from "react";
import { ProfileImage, UserProfileImageContainer } from "./styles";

interface UserProfileImageProps {
    profileImage: ImageSourcePropType;
    imageDimensions: number;
}

const UserProfileImage = ({
    profileImage,
    imageDimensions,
}: UserProfileImageProps) => {
    return (
        <UserProfileImageContainer borderRadius={imageDimensions}>
            <ProfileImage
                width={imageDimensions}
                height={imageDimensions}
                source={profileImage}
            />
        </UserProfileImageContainer>
    );
};

export default UserProfileImage;
