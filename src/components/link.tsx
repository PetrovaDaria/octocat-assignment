import React from 'react';
import {TFontColorType, TTypographyProps, TTypographyType, typographyStyle} from "./typography";
import {css, cx} from "@emotion/css";
import {TTheme} from "../styles";
import {selectColorTheme} from "../features/color-theme/color-theme.slice";
import {useAppSelector} from "../store";

type TLinkProps = {
  href: string;
  text: string;
  ariaLabel?: string;
} & Omit<TTypographyProps, 'children'>;

const linkStyle = (theme: TTheme, type: TTypographyType, fontColorType: TFontColorType) => cx(
  typographyStyle(theme, type, fontColorType),
  css({
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  })
)

export const Link = ({type, fontColorType, href, text, ariaLabel}: TLinkProps): JSX.Element => {
  const {theme} = useAppSelector(selectColorTheme);

 return (
   <a className={linkStyle(theme, type, fontColorType)} href={href} target={'_blank'} aria-label={ariaLabel}>
     {text}
   </a>
 );
};
