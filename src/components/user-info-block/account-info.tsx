import React from 'react';
import {Typography} from "../typography";
import {accountInfoItemStyle, accountInfoStyle} from "./account-info.style";
import {darkTheme} from "../../styles";

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
 return (
  <div className={accountInfoStyle(darkTheme)}>
    <AccountInfoItem title={'Repos'} value={'8'}/>
   <AccountInfoItem title={'Followers'} value={'3938'}/>
   <AccountInfoItem title={'Following'} value={'9'}/>
  </div>
 );
};
