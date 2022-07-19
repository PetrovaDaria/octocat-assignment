import React from 'react';
import {Typography} from "../typography";
import {accountInfoItemStyle, accountInfoStyle} from "./account-info.style";
import {selectColorTheme} from "../../features/color-theme/color-theme.slice";
import {selectGithubUserState} from "../../features/github-user/github-user.slice";
import {useAppSelector} from "../../store";

type TAccountInfoItemProps = {
 title: string;
 value: string;
 valueAriaLabel?: string;
};

export const AccountInfoItem = ({title, value, valueAriaLabel}: TAccountInfoItemProps): JSX.Element => {
 return (
   <div className={accountInfoItemStyle}>
    <Typography type={'h3'} fontColorType={'main'}>{title}</Typography>
    <Typography type={'h2'} fontColorType={'main'} ariaLabel={valueAriaLabel}>{value}</Typography>
   </div>
 );
};

type TAccountInfoProps = {

};

export const AccountInfo = ({}: TAccountInfoProps): JSX.Element => {
  const {theme} = useAppSelector(selectColorTheme);
  const {user} = useAppSelector(selectGithubUserState);

 return (
  <div className={accountInfoStyle(theme)}>
    <AccountInfoItem
      title={'Repos'}
      value={user?.public_repos? user.public_repos.toString() : '0'}
      valueAriaLabel={'repos-value'}/>
   <AccountInfoItem
     title={'Followers'}
     value={user?.followers? user.followers.toString() : '0'}
     valueAriaLabel={'followers-value'}
   />
   <AccountInfoItem
     title={'Following'}
     value={user?.following? user.following.toString() : '0'}
     valueAriaLabel={'following-value'}
   />
  </div>
 );
};
