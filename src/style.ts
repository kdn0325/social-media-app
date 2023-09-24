import { getFontFamily } from "@assets/helper/herper";
import { css } from "@emotion/native";

export const styles = {
    header: css`
        flex: 1;
        margin-left: 27px;
        margin-right: 17px;
        margin-top: 30px;
        flex-direction: row;
        justify-content: space-between;
    `,
    messageIco: css`
        background-color: #f9fafb;
        padding: 12px;
        border-radius: 100px;
    `,
    messageNumberContainer: css`
        width: 10px;
        height: 10px;
        background-color: #f35bac;
        border-radius: 10px;
        flex: 1;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 10px;
        top: 12px;
    `,
    messageNumber: css`
        font-size: 6px;
        font-family: ${getFontFamily("Inter", "600")};
        line-height: 7px;
        color: #fff;
    `,
    userStoryContainer: css`
        margin-top: 20px;
        margin-left: 28px;
        margin-right: 28px;
    `,
};
