import {css, cx} from "@emotion/css";
import {baseBlockStyle,mainFontColorCssObject, TTheme} from "../../styles";
import {h3CssObject} from "../shared/typography/typography.style";

export const searchBarStyle = (theme: TTheme) => cx(
  baseBlockStyle(theme),
  css({
    padding: '15px 10px 15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  })
)

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

export const buttonStyle = (theme: TTheme, disabled: boolean) => css({
  padding: '10px 15px',
  borderRadius: '10px',
  display: 'inline-block',
  background: disabled ? theme.disabledBtn : theme.active,
  cursor: disabled ? 'default' : 'pointer',
  ':hover': {
    background: theme.hoveredBtn
  }
});
