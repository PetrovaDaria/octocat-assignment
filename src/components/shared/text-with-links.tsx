import React, {useMemo} from 'react';
import {TTypographyProps, Typography} from "./typography";
import {Link} from "./link";

type TLinkInfoItemPart = {
  text: string;
  link?: string;
}

type TTextWithLinksProps = {
  text: string;
  ariaLabel?: string;
} & Omit<TTypographyProps, 'children'>;

export const TextWithLinks = ({text, type, fontColorType, ariaLabel}: TTextWithLinksProps): JSX.Element => {
  const elements = useMemo((): TLinkInfoItemPart[] => {
    const arr = Array.from(text.matchAll(/@.+?(?= |$)|.+?(?=@|$)/gm));
    return arr.map((part) => {
      const el = part[0];
      const link = el.startsWith('@') ? `https://github.com/${el.substring(1)}` : undefined;
      return {
        text: el || '',
        link
      }});
  }, [text]);

 return (
   <p style={{margin: '0px'}} aria-label={ariaLabel}>
     {elements.map((el) => {
       const key = [el.text, el.link].join('-');
       return el.link ?
         <Link
           key={key}
           href={el.link}
           text={el.text}
           type={type}
           fontColorType={fontColorType}
         /> :
         <Typography type={type} fontColorType={fontColorType} key={key}>
           {el.text}
         </Typography>
     })}
   </p>
 );
};
