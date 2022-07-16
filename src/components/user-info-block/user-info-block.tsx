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
import {RootState} from "../../store";
import {Typography} from "../typography";

type TUserInfoProps = {

};
export const UserInfoBlock = ({}: TUserInfoProps): JSX.Element => {
  const {theme} = useSelector(selectColorTheme);
  const {user, status} = useSelector((state: RootState) => state.githubUser)

  if (status === 'loading') {
    return (
      <Typography type={'h3'} fontColorType={'main'}>
        Loading...
      </Typography>
    );
  }

  if (status === 'failed') {
    return (
      <Typography type={'h2'} fontColorType={'main'}>
        User was not found
      </Typography>
    );
  }

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
