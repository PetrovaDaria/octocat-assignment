import React, {useCallback, useMemo, useState} from 'react';
import IconSearch from '../../assets/icons/icon-search.svg?component';
import {buttonStyle, inputStyle, searchBarStyle} from "./search-bar.style";
import {Typography} from "../typography";
import {selectColorTheme} from "../../features/color-theme/color-theme.slice";
import {fetchGithubUser} from "../../features/github-user/github-user.slice";
import {RootState, useAppDispatch, useAppSelector} from "../../store";

type TSearchBarProps = {

};
export const SearchBar = ({}: TSearchBarProps): JSX.Element => {
  const [value, setValue] = useState('');

  const dispatch = useAppDispatch();
  const {theme} = useAppSelector(selectColorTheme);
  const githubUserStatus = useAppSelector((state: RootState) => state.githubUser.status);

  const isLoading = useMemo(() => {
    return githubUserStatus === 'loading';
  }, [githubUserStatus]);

  const onClickBtn = useCallback(() => {
    if (!isLoading) {
      dispatch(fetchGithubUser(value))
    }
  }, [value, isLoading]);

 return (
  <div className={searchBarStyle(theme)}>
    <IconSearch/>
    <input
      type={'text'}
      placeholder={'Search GitHub username...'}
      className={inputStyle(theme)}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
    <div className={buttonStyle(theme, isLoading)} onClick={onClickBtn}>
      <Typography type={'h3'} fontColorType={'btn_text'}>
        Search
      </Typography>
    </div>
  </div>
 );
};
