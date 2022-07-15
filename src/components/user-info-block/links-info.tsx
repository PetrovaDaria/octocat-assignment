import React from 'react';
import {linkInfoItemStyle, linksInfoStyle} from "./links-info.style";
import IconLocation from '../../assets/icons/icon-location.svg?component';
import IconTwitter from '../../assets/icons/icon-twitter.svg?component';
import IconWebsite from '../../assets/icons/icon-website.svg?component';
import IconCompany from '../../assets/icons/icon-company.svg?component';
import {Typography} from "../typography";
import {css} from "@emotion/css";
import {baseIconStyle, darkTheme} from "../../styles";

type TLinkInfoItemProps = {
  icon: React.ReactNode;
  text?: string;
  link?: string;
}

export const LinkInfoItem = ({icon, text, link}: TLinkInfoItemProps): JSX.Element => {
  return (
    <div className={linkInfoItemStyle}>
      {icon}
      <Typography type={'h3'} fontColorType={'main'}>
        {text ? text : 'Not available'}
      </Typography>
    </div>
  );
}

type TLinksInfoProps = {

};

export const LinksInfo = ({}: TLinksInfoProps): JSX.Element => {
 return (
  <div className={linksInfoStyle}>
    <LinkInfoItem icon={<IconLocation className={baseIconStyle(darkTheme)}/>} text={'San Francisco'}/>
    <LinkInfoItem icon={<IconTwitter/>}/>
  </div>
 );
};
