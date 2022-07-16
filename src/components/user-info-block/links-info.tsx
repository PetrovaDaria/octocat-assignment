import React, {useMemo} from 'react';
import {linkInfoItemStyle, linksInfoStyle} from "./links-info.style";
import IconLocation from '../../assets/icons/icon-location.svg?component';
import IconTwitter from '../../assets/icons/icon-twitter.svg?component';
import IconWebsite from '../../assets/icons/icon-website.svg?component';
import IconCompany from '../../assets/icons/icon-company.svg?component';
import {TFontColorType, Typography} from "../typography";
import {baseIconStyle, iconStyle} from "../../styles";
import {Link} from "../link";
import {useSelector} from "react-redux";
import {selectGithubUserState} from "../../features/github-user/github-user.slice";
import {selectColorTheme} from "../../features/color-theme/color-theme.slice";
import {TextWithLinks} from "../text-with-links";

type TLinkInfoItemProps = {
  icon: React.ReactNode;
  text?: string;
  link?: string;
}

export const LinkInfoItem = ({icon, text, link}: TLinkInfoItemProps): JSX.Element => {
  const formattedText = text ? text : 'Not available';
  const fontColorType: TFontColorType = text ? 'main' : 'not_available';

  return (
    <div className={linkInfoItemStyle}>
      {icon}
      {link ?
        <Link
          href={link}
          text={formattedText}
          type={'h3'}
          fontColorType={fontColorType}
        /> :
        <Typography type={'h3'} fontColorType={fontColorType}>
          {formattedText}
        </Typography>
      }
    </div>
  );
}

type TLinkInfoItemProps2 = {
  icon: React.ReactNode;
  text: string;
}

const LinkInfoItem2 = ({icon, text}: TLinkInfoItemProps2) => {
  return (
    <div className={linkInfoItemStyle}>
      {icon}
      <TextWithLinks text={text} fontColorType={'main'} type={'h3'}/>
    </div>
  );
};

type TLinksInfoProps = {

};

export const LinksInfo = ({}: TLinksInfoProps): JSX.Element => {
  const {theme} = useSelector(selectColorTheme);
  const {user} = useSelector(selectGithubUserState);

  const twitterText = user?.twitter_username && `@${user.twitter_username}`;
  const twitterLink = user?.twitter_username && `https://twitter.com/${user.twitter_username}`;

  const iconCompany = useMemo(() => {
    return <IconCompany className={iconStyle(theme, Boolean(user?.company))}/>;
  }, [theme, user]);

 return (
  <div className={linksInfoStyle}>
    <LinkInfoItem icon={<IconLocation className={iconStyle(theme, Boolean(user?.location))}/>} text={user?.location}/>
    <LinkInfoItem icon={<IconTwitter className={iconStyle(theme, Boolean(twitterText))}/>} text={twitterText} link={twitterLink}/>
    <LinkInfoItem icon={<IconWebsite className={iconStyle(theme, Boolean(user?.blog))}/>} text={user?.blog} link={user?.blog}/>
    {user?.company ?
      <LinkInfoItem2 icon={iconCompany} text={user?.company}/> :
      <LinkInfoItem icon={iconCompany}/>
    }
  </div>
 );
};
