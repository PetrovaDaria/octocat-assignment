import {css, cx} from "@emotion/css";
import {baseBlockStyle, TTheme} from "../../styles";

export const accountInfoStyle = (theme: TTheme) => css({
  borderRadius: '10px',
  background: theme.mainBackground,
  padding: '15px 20px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr'
})

export const accountInfoItemStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
})
