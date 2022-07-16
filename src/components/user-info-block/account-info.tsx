import React from 'react';
import {Typography} from "../typography";
import {accountInfoItemStyle, accountInfoStyle} from "./account-info.style";
import {useSelector} from "react-redux";
import {selectColorTheme} from "../../features/color-theme/color-theme.slice";
import {selectGithubUserState} from "../../features/github-user/github-user.slice";

type TAccountInfoItemProps = {
 title: string;
 value: string;
};

export const AccountInfoItem = ({title, value}: TAccountInfoItemProps): JSX.Element => {
 return (
   <div className={accountInfoItemStyle}>
    <Typography type={'h3'} fontColorType={'main'}>{title}</Typography>
    <Typography type={'h2'} fontColorType={'main'}>{value}</Typography>
   </div>
 );
};

type TAccountInfoProps = {

};

export const AccountInfo = ({}: TAccountInfoProps): JSX.Element => {
  const {theme} = useSelector(selectColorTheme);
  const {user} = useSelector(selectGithubUserState);

 return (
  <div className={accountInfoStyle(theme)}>
    <AccountInfoItem title={'Repos'} value={user?.public_repos? user.public_repos.toString() : '0'}/>
   <AccountInfoItem title={'Followers'} value={user?.followers? user.followers.toString() : '0'}/>
   <AccountInfoItem title={'Following'} value={user?.following? user.following.toString() : '0'}/>
  </div>
 );
};
