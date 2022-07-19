import React from 'react';
import {userAvatarStyle} from "./user-avatar.style";
import {selectGithubUserState} from "../../features/github-user/github-user.slice";
import {useAppSelector} from "../../store";

type TUserAvatarProps = {

};

export const UserAvatar = ({}: TUserAvatarProps): JSX.Element => {
 const {user} = useAppSelector(selectGithubUserState);

 return (
  <img className={userAvatarStyle} src={user?.avatar_url}/>
 );
};
