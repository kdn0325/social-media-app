import { getFontFamily } from "@/assets/helper/herper";
import styled from "@emotion/native";

export const UserPostContainer = styled.View`
    margin-top: 35px;
    border-bottom-width: 1px;
    padding-bottom: 35px;
    border-bottom-color: #eff2f6;
`;
export const UserProfilePostContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const UserContainer = styled.View`
    flex-direction: row;
`;
export const UserTextContainer = styled.View`
    justify-content: center;
    margin-left: 10px;
`;
export const Username = styled.Text`
    color: #000;
    font-family: ${getFontFamily("Inter", 600)};
    font-size: 16px;
`;
export const Userlocation = styled.Text`
    color: #79896f;
    font-family: ${getFontFamily("Inter", 400)};
    font-size: 12px;
    margin-top: 5px;
`;
export const UserPostImage = styled.View`
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;
export const UserPostStat = styled.View`
    margin-left: 10px;
    flex-direction: row;
`;
export const UserPostbutton = styled.View`
    flex-direction: row;
`;
export const UserPostbuttonRight = styled.View`
    flex-direction: row;
    margin-left: 27px;
`;
export const UserPostStatText = styled.Text`
    margin-left: 3px;
    color: #79869f;
`;
