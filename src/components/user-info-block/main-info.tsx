import React from 'react';
import {mainInfoStyle} from "./main-info.style";
import {Typography} from "../typography";
import {CellMargin} from "../cell-margin";
import {selectGithubUserState} from "../../features/github-user/github-user.slice";
import {parseDate} from "../../dates";
import {Link} from "../link";
import {TextWithLinks} from "../text-with-links";
import {useAppSelector} from "../../store";

type TUserInfoProps = {

};

export const MainInfo = ({}: TUserInfoProps): JSX.Element => {
  const {user} = useAppSelector(selectGithubUserState);

 return (
  <div className={mainInfoStyle}>
    <div>
      <CellMargin margin={'0 0 5px'}>
        <Typography type={'h1'} fontColorType={'main'} ariaLabel={'github-user-name'}>
          {user?.name ? user.name : user?.login}
        </Typography>
      </CellMargin>
      <CellMargin margin={'0 0 15px'}>
        <Link
          href={user?.html_url ? user.html_url : ''}
          text={user?.login ? `@${user.login}` : ''}
          type={'h3'}
          fontColorType={'active'}
          ariaLabel={'github-user-login'}
        />
      </CellMargin>
      {user?.bio ?
        <TextWithLinks
          text={user.bio.replace(/\s\s+/, ' ')}
          type={'h3'}
          fontColorType={'main'}
          ariaLabel={'github-user-bio'}
        /> :
        <Typography type={'h3'} fontColorType={'main'} ariaLabel={'github-user-bio'}>
          This profile has no bio
        </Typography>
      }
    </div>
    <div>
      <Typography type={'h3'} fontColorType={'main'} ariaLabel={'github-user-joined-date'}>
        {user?.created_at ? `Joined ${parseDate(user?.created_at)}` : ''}
      </Typography>
    </div>
  </div>
 );
};
