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
  TTheme, notAvailableFontColorStyle
} from "../styles";

type TTypographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'p';
type TFontColorType = 'main' | 'active' | 'not_available';

const styles: Record<TTypographyType, string> = {
  h1: h1Style,
  h2: h2Style,
  h3: h3Style,
  h4: h4Style,
  p: pStyle
}

const fontColorStyles: Record<TFontColorType, (theme: TTheme) => string> = {
  main: mainFontColorStyle,
  active: activeFontColorStyle,
  not_available: notAvailableFontColorStyle
}

type TTypographyProps = {
 children: React.ReactNode | JSX.Element;
 type: TTypographyType;
 fontColorType: TFontColorType;
};

export const Typography = ({
  children,
  type,
  fontColorType
}: TTypographyProps): JSX.Element => {
 return (
  <p className={cx(
    styles[type],
    fontColorStyles[fontColorType](darkTheme),
    css({margin: 0})
  )}>{children}</p>
 );
};
