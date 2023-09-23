import { css } from "@emotion/native";

export const styles = {
    header: css`
        flex: 1;
        padding: 26px;
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
        right: 7px;
        top: 10px;
    `,
    messageNumber: css`
        font-size: 6px;
        font-family: "Inter";
        line-height: 7px;
        font-weight: 600;
        color: #fff;
    `,
};
