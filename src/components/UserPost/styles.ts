import { getFontFamily } from "@assets/helper/herper";
import { css } from "@emotion/native";

export const styles = {
    storyContainer: css`
        margin-right: 20px;
    `,
    storyName: css`
        font-family: ${getFontFamily("Inter", "500")};
        font-size: 14px;
        color: #022150;
        margin-top: 8px;
        text-align: center;
    `,
};
