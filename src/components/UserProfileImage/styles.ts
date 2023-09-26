import styled from "@emotion/native";

export const UserProfileImageContainer = styled.View<{ borderRadius: number }>`
    border-color: #f35bac;
    border-width: 1px;
    padding: 3px;
    border-radius: ${(props) =>
        props.borderRadius ? `${props.borderRadius}px` : "50px"};
`;

export const ProfileImage = styled.Image<{ width: number; height: number }>`
    width: ${(props) => (props.width ? `${props.width}px` : "50px")};
    height: ${(props) => (props.height ? `${props.height}px` : "50px")};
`;
