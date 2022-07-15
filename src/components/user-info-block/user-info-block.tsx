import React from 'react';
import {userInfoBlockStyle} from "./user-info-block.style";
import {darkTheme} from "../../styles";
import {UserAvatar} from "./user-avatar";
import {MainInfo} from "./main-info";
import {AccountInfo} from "./account-info";
import { Gaps } from '../gaps';
import {LinksInfo} from "./links-info";
import {useSelector} from "react-redux";
import {selectColorTheme} from "../../features/color-theme/color-theme.slice";

type TUserInfoProps = {

};
export const UserInfoBlock = ({}: TUserInfoProps): JSX.Element => {
  const {theme} = useSelector(selectColorTheme);

 return (
  <div className={userInfoBlockStyle(theme)}>
    <UserAvatar/>
    <Gaps gapHeight={'30px'}>
      <MainInfo/>
      <AccountInfo/>
      <LinksInfo/>
    </Gaps>
  </div>
 );
};