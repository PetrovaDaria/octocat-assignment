import React from 'react';
import {mainInfoStyle} from "./main-info.style";
import {Typography} from "../typography";
import {CellMargin} from "../cell-margin";
import {useSelector} from "react-redux";
import {selectGithubUserState} from "../../features/github-user/github-user.slice";
import {parseDate} from "../../dates";

type TUserInfoProps = {

};

export const MainInfo = ({}: TUserInfoProps): JSX.Element => {
  const {user} = useSelector(selectGithubUserState);

 return (
  <div className={mainInfoStyle}>
    <div>
      <CellMargin margin={'0 0 5px'}>
        <Typography type={'h1'} fontColorType={'main'}>
          {user?.name ? user.name : user?.login}
        </Typography>
      </CellMargin>
      <CellMargin margin={'0 0 15px'}>
        {/*TODO: make link*/}
        <Typography type={'h3'} fontColorType={'active'}>
          @{user?.login}
        </Typography>
      </CellMargin>
      <Typography type={'h3'} fontColorType={'main'}>
        {user?.bio ? user.bio : 'This profile has no bio'}
      </Typography>
    </div>
    <div>
      <Typography type={'h3'} fontColorType={'main'}>
        {user?.created_at ? `Joined ${parseDate(user?.created_at)}` : ''}
      </Typography>
    </div>
  </div>
 );
};
