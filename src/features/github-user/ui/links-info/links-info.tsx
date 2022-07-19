import React, {useMemo} from 'react';
import {linkInfoItemStyle, linksInfoStyle} from "./links-info.style";
// import IconLocation from '../../assets/icons/icon-location.svg?component';
// import IconTwitter from '../../assets/icons/icon-twitter.svg?component';
// import IconWebsite from '../../assets/icons/icon-website.svg?component';
// import IconCompany from '../../assets/icons/icon-company.svg?component';
import IconLocation from '../../../../assets/icons/icon-location.svg';
import IconTwitter from '../../../../assets/icons/icon-twitter.svg';
import IconWebsite from '../../../../assets/icons/icon-website.svg';
import IconCompany from '../../../../assets/icons/icon-company.svg';
import {TFontColorType, Typography} from "../../../../components/shared/typography";
import {iconStyle} from "../../../../styles";
import {Link} from "../../../../components/shared";
import {selectGithubUserState} from "../../github-user.slice";
import {selectColorTheme} from "../../../color-theme/color-theme.slice";
import {TextWithLinks} from "../../../../components/shared";
import {useAppSelector} from "../../../../store";

type TLinkInfoItemProps = {
  icon: React.ReactNode;
  text?: string | null;
  link?: string | null;
  ariaLabel?: string;
}

export const SimpleLinkInfoItem = ({icon, text, link, ariaLabel}: TLinkInfoItemProps): JSX.Element => {
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
          ariaLabel={ariaLabel}
        /> :
        <Typography type={'h3'} fontColorType={fontColorType} ariaLabel={ariaLabel}>
          {formattedText}
        </Typography>
      }
    </div>
  );
}

type TLinkInfoItemProps2 = {
  icon: React.ReactNode;
  text: string;
  ariaLabel?: string;
}

const LinkInfoItem = ({icon, text, ariaLabel}: TLinkInfoItemProps2) => {
  return (
    <div className={linkInfoItemStyle} aria-label={ariaLabel}>
      {icon}
      <TextWithLinks text={text} fontColorType={'main'} type={'h3'}/>
    </div>
  );
};

type TLinksInfoProps = {

};

export const LinksInfo = ({}: TLinksInfoProps): JSX.Element => {
  const {theme} = useAppSelector(selectColorTheme);
  const {user} = useAppSelector(selectGithubUserState);

  const twitterText = user?.twitter_username && `@${user.twitter_username}`;
  const twitterLink = user?.twitter_username && `https://twitter.com/${user.twitter_username}`;

  const iconCompany = useMemo(() => {
    // return <IconCompany className={iconStyle(theme, Boolean(user?.company))}/>;
    return <img src={IconCompany}/>
  }, [theme, user]);

 return (
  <div className={linksInfoStyle}>
    <SimpleLinkInfoItem
      // icon={<IconLocation className={iconStyle(theme, Boolean(user?.location))}/>}
      icon={<img src={IconLocation}/>}
      text={user?.location}
      ariaLabel={'location-link'}
    />
    <SimpleLinkInfoItem
      // icon={<IconTwitter className={iconStyle(theme, Boolean(twitterText))}/>}
      icon={<img src={IconTwitter}/>}
      text={twitterText} link={twitterLink}
      ariaLabel={'twitter-link'}
    />
    <SimpleLinkInfoItem
      // icon={<IconWebsite className={iconStyle(theme, Boolean(user?.blog))}/>}
      icon={<img src={IconWebsite}/>}
      text={user?.blog} link={user?.blog}
      ariaLabel={'blog-link'}
    />
    {user?.company ?
      <LinkInfoItem icon={iconCompany} text={user?.company} ariaLabel={'company-link'}/> :
      <SimpleLinkInfoItem icon={iconCompany} ariaLabel={'company-link'}/>
    }
  </div>
 );
};
