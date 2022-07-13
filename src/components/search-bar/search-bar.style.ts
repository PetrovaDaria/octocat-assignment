import {css, cx} from "@emotion/css";
import {darkTheme, h3CssObject, h3Style, mainFontColorCssObject, TTheme} from "../../styles";

export const searchBarStyle = (theme: TTheme) => css({
  padding: '15px 10px 15px 20px',
  borderRadius: '10px',
  background: theme.blockBackground,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const inputStyle = (theme: TTheme) => css({
  appearance: 'none',
  border: 'none',
  background: theme.blockBackground,
  width: '70%',
  outline: 'none',
  ...h3CssObject,
  ...mainFontColorCssObject(theme),
  '::placeholder': {
    ...h3CssObject,
    ...mainFontColorCssObject(theme)
  }
});

const style = cx(
  inputStyle(darkTheme),
)

export const buttonStyle = (theme: TTheme) => css({
  padding: '10px 15px',
  borderRadius: '10px',
  display: 'inline-block',
  background: theme.activeBtn
});
