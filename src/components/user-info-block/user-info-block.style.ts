import {css, cx} from "@emotion/css";
import {baseBlockStyle, TTheme} from "../../styles";

export const userInfoBlockStyle = (theme: TTheme) => cx(
  baseBlockStyle(theme),
  css({
    padding: '25px',
    display: 'grid',
    gridTemplateColumns: '3fr 7fr',
    gap: '20px'
  })
);
