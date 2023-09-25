import {
    Image,
    StyleProp,
    ImageStyle,
    ImageSourcePropType,
    View,
} from "react-native"; // 기본 Image 컴포넌트 사용
import React from "react";
import { styles } from "./styles";

interface UserProfileImageProps {
    profileImage: ImageSourcePropType; // 적절한 타입으로 변경
}

const UserProfileImage = ({ profileImage }: UserProfileImageProps) => {
    return (
        <View style={styles.storyImageContainer}>
            <Image
                style={styles.storyImage as StyleProp<ImageStyle>}
                source={profileImage}
            />
        </View>
    );
};

export default UserProfileImage;
