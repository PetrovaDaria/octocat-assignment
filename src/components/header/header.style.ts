import {css, cx} from "@emotion/css";
import {darkTheme, h2Style} from "../../styles";

export const headerStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

export const serviceNameStyle = cx(
  h2Style,
  css({
    color: darkTheme.mainFont,
  })
);
