import React from 'react';
import {Typography} from "../typography";
import {accountInfoItemStyle, accountInfoStyle} from "./account-info.style";
import {darkTheme} from "../../styles";
import {useSelector} from "react-redux";
import {selectColorTheme} from "../../features/color-theme/color-theme.slice";

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

 return (
  <div className={accountInfoStyle(theme)}>
    <AccountInfoItem title={'Repos'} value={'8'}/>
   <AccountInfoItem title={'Followers'} value={'3938'}/>
   <AccountInfoItem title={'Following'} value={'9'}/>
  </div>
 );
};
