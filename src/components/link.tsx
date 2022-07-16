import React from 'react';
import {fontColorStyles, TFontColorType, TTypographyProps, TTypographyType, Typography, typographyStyle} from "./typography";
import {css, cx} from "@emotion/css";
import {TTheme} from "../styles";
import {useSelector} from "react-redux";
import {selectColorTheme} from "../features/color-theme/color-theme.slice";

type TLinkProps = {
  href: string;
  text: string;
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
// css({
//   textDecoration: 'none',
//   cursor: 'pointer',
//   color: 'inherit',
//   textDecorationColor: 'inherit',
//   ':hover': {
//     textDecoration: 'underline'
//   }
// });

export const Link = ({type, fontColorType, href, text}: TLinkProps): JSX.Element => {
  const {theme} = useSelector(selectColorTheme);

 return (
   <a className={linkStyle(theme, type, fontColorType)} href={href} target={'_blank'}>
     {text}
   </a>
 );
};
