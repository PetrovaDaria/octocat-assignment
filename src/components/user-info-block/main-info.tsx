import React from 'react';
import {mainInfoStyle} from "./main-info.style";
import {Typography} from "../typography";
import {CellMargin} from "../cell-margin";

type TUserInfoProps = {

};

export const MainInfo = ({}: TUserInfoProps): JSX.Element => {
 return (
  <div className={mainInfoStyle}>
    <div>
      <CellMargin margin={'0 0 5px'}>
        <Typography type={'h1'} fontColorType={'main'}>
          The Octocat
        </Typography>
      </CellMargin>
      <CellMargin margin={'0 0 15px'}>
        {/*make link*/}
        <Typography type={'h3'} fontColorType={'active'}>
          @octocat
        </Typography>
      </CellMargin>
      <Typography type={'h3'} fontColorType={'main'}>
        This profile has no bio
      </Typography>
    </div>
    <div>
      <Typography type={'h3'} fontColorType={'main'}>Joined 25 Jan 2011</Typography>
    </div>
  </div>
 );
};
