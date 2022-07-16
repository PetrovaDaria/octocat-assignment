import React from 'react';
import {css, cx} from '@emotion/css';
import {
  darkTheme,
  h1Style,
  h2Style,
  h3Style,
  h4Style,
  mainFontColorStyle,
  pStyle,
  activeFontColorStyle,
  TTheme, notAvailableFontColorStyle, btnTextFontColorStyle
} from "../styles";
import {useSelector} from "react-redux";
import {selectColorTheme} from "../features/color-theme/color-theme.slice";

export type TTypographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'p';
export type TFontColorType = 'main' | 'active' | 'not_available' | 'btn_text';

const paragraphStyles: Record<TTypographyType, string> = {
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

export type TTypographyProps = {
 children: React.ReactNode | JSX.Element;
 type: TTypographyType;
 fontColorType: TFontColorType;
};

export const typographyStyle = (theme: TTheme, type: TTypographyType, fontColorType: TFontColorType) => cx(
  paragraphStyles[type],
  fontColorStyles[fontColorType](theme),
  css({margin: 0, whiteSpace: 'pre-wrap'})
)

export const Typography = ({
  children,
  type,
  fontColorType
}: TTypographyProps): JSX.Element => {
  const {theme} = useSelector(selectColorTheme);

 return (
  <span className={typographyStyle(theme, type, fontColorType)}>
    {children}
  </span>
 );
};
