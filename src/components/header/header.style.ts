import {css, cx} from "@emotion/css";
import {darkTheme, h2Style, TTheme} from "../../styles";

export const headerStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

export const serviceNameStyle = (theme: TTheme) => cx(
  h2Style,
  css({
    color: theme.mainFont,
  })
);
