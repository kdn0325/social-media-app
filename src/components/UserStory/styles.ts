import { getFontFamily } from "@assets/helper/herper";
import styled from "@emotion/native";

export const StoryContainer = styled.View`
    margin-right: 20px;
`;
export const StoryName = styled.Text`
    font-family: ${getFontFamily("Inter", 500)};
    font-size: 14px;
    color: #022150;
    margin-top: 8px;
    text-align: center;
`;
