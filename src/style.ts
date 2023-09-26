import { getFontFamily } from "@assets/helper/herper";
import styled from "@emotion/native";

export const Header = styled.View`
    margin-left: 27px;
    margin-right: 17px;
    margin-top: 30px;
    flex-direction: row;
    justify-content: space-between;
`;
export const MessageIcon = styled.TouchableOpacity`
    background-color: #f9fafb;
    padding: 12px;
    border-radius: 100px;
`;
export const MessageNumberContainer = styled.View`
    width: 10px;
    height: 10px;
    background-color: #f35bac;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 12px;
`;
export const MessageNumber = styled.Text`
    font-size: 6px;
    font-family: ${getFontFamily("Inter", 600)};
    line-height: 7px;
    color: #fff;
`;
export const UserStoryContainer = styled.View`
    margin-top: 20px;
    margin-left: 28px;
    margin-right: 28px;
`;
export const UserPostContainer = styled.View`
    margin-left: 24px;
    margin-right: 24px;
`;
