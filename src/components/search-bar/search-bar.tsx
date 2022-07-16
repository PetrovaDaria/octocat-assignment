import React, {useCallback, useMemo, useState} from 'react';
import IconSearch from '../../assets/icons/icon-search.svg?component';
import {darkTheme} from "../../styles";
import {buttonStyle, inputStyle, searchBarStyle} from "./search-bar.style";
import {Typography} from "../typography";
import {useDispatch, useSelector} from "react-redux";
import {selectColorTheme} from "../../features/color-theme/color-theme.slice";
import {fetchGithubUser} from "../../features/github-user/github-user.slice";
import {RootState, TAppDispatch} from "../../store";

type TSearchBarProps = {

};
export const SearchBar = ({}: TSearchBarProps): JSX.Element => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch<TAppDispatch>();
  const {theme} = useSelector(selectColorTheme);
  const githubUserStatus = useSelector((state: RootState) => state.githubUser.status);

  const isLoading = useMemo(() => {
    return githubUserStatus === 'loading';
  }, [githubUserStatus]);

  const onClickBtn = useCallback(() => {
    if (!isLoading) {
      console.log('req in search');
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
