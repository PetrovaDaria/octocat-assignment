import React from 'react';
import {userInfoBlockStyle} from "./user-info-block.style";
import {darkTheme} from "../../styles";
import {UserAvatar} from "./user-avatar";
import {MainInfo} from "./main-info";
import {AccountInfo} from "./account-info";
import { Gaps } from '../gaps';
import {LinksInfo} from "./links-info";

type TUserInfoProps = {

};
export const UserInfoBlock = ({}: TUserInfoProps): JSX.Element => {
 return (
  <div className={userInfoBlockStyle(darkTheme)}>
    <UserAvatar/>
    <Gaps gapHeight={'30px'}>
      <MainInfo/>
      <AccountInfo/>
      <LinksInfo/>
    </Gaps>
  </div>
 );
};
