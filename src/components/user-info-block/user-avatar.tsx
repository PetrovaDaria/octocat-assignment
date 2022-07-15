import React from 'react';
import {userAvatarStyle} from "./user-avatar.style";

// add prop of image url
type TUserAvatarProps = {

};

export const UserAvatar = ({}: TUserAvatarProps): JSX.Element => {
 return (
  <img className={userAvatarStyle} src={'https://avatars.githubusercontent.com/u/583231?v=4'}/>
 );
};
