import React from 'react';
import {
  typographyStyle,
} from './typography.style';
import {selectColorTheme} from "../../../features/color-theme/color-theme.slice";
import {useAppSelector} from "../../../store";
import {TFontColorType, TTypographyType} from "./types";

export type TTypographyProps = {
 children: React.ReactNode | JSX.Element;
 type: TTypographyType;
 fontColorType: TFontColorType;
 ariaLabel?: string;
};

export const Typography = ({
  children,
  type,
  fontColorType,
  ariaLabel
}: TTypographyProps): JSX.Element => {
  const {theme} = useAppSelector(selectColorTheme);

 return (
  <span className={typographyStyle(theme, type, fontColorType)} aria-label={ariaLabel}>
    {children}
  </span>
 );
};
