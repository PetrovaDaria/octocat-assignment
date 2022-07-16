import React from 'react';
import {userAvatarStyle} from "./user-avatar.style";
import {useSelector} from "react-redux";
import {selectGithubUserState} from "../../features/github-user/github-user.slice";

// add prop of image url
type TUserAvatarProps = {

};

export const UserAvatar = ({}: TUserAvatarProps): JSX.Element => {
 const {user} = useSelector(selectGithubUserState);

 return (
  <img className={userAvatarStyle} src={user?.avatar_url}/>
 );
};
