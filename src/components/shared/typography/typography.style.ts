import {css, cx} from "@emotion/css";
import {CSSObject} from "@emotion/css/create-instance";
import {mainFontColorCssObject, TTheme} from "../../../styles";
import {TFontColorType, TTypographyType} from "./types";

export const h1Style = css({
  fontFamily: 'Space Mono Bold',
  fontSize: '26px',
  lineHeight: '38px'
});

export const h2Style = css({
  fontFamily: 'Space Mono Bold',
  fontSize: '22px',
  lineHeight: '33px'
});

export const h3CssObject: CSSObject = {
  fontFamily: 'Space Mono Reg',
  fontSize: '16px',
  lineHeight: '24px',
}

export const h3Style = css(h3CssObject);

export const h4Style = css({
  fontFamily: 'Space Mono Reg',
  fontSize: '13px',
  lineHeight: '20px'
});

export const pStyle = css({
  fontFamily: 'Space Mono Reg',
  fontSize: '15px',
  lineHeight: '25px'
});

export const mainFontColorStyle = (theme: TTheme) => css(mainFontColorCssObject(theme))

export const activeFontColorStyle = (theme: TTheme) => css({
  color: theme.active
})

export const notAvailableFontColorStyle = (theme: TTheme) => css({
  color: theme.notAvailable
})

export const btnTextFontColorStyle = (theme: TTheme) => css({
  color: theme.btnText
})

export const paragraphStyles: Record<TTypographyType, string> = {
  h1: h1Style,
  h2: h2Style,
  h3: h3Style,
  h4: h4Style,
  p: pStyle
}

export const fontColorStyles: Record<TFontColorType, (theme: TTheme) => string> = {
  main: mainFontColorStyle,
  active: activeFontColorStyle,
  not_available: notAvailableFontColorStyle,
  btn_text: btnTextFontColorStyle
}

export const typographyStyle = (theme: TTheme, type: TTypographyType, fontColorType: TFontColorType) => cx(
  paragraphStyles[type],
  fontColorStyles[fontColorType](theme),
  css({margin: 0, whiteSpace: 'pre-wrap'})
)
