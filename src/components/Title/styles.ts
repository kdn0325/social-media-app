import { css } from "@emotion/native";
import { getFontFamily } from "@assets/helper/herper";

export const styles = {
    title: css`
        font-family: ${getFontFamily("Inter", 600)};
        font-size: 24px;
        line-height: 29px;
    `,
};
