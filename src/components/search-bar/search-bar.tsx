import React from 'react';
import IconSearch from '../../assets/icons/icon-search.svg?component';
import {darkTheme} from "../../styles";
import {buttonStyle, inputStyle, searchBarStyle} from "./search-bar.style";
import {Typography} from "../typography";
import {useSelector} from "react-redux";
import {selectColorTheme} from "../../features/color-theme/color-theme.slice";

type TSearchBarProps = {

};
export const SearchBar = ({}: TSearchBarProps): JSX.Element => {
  const {theme} = useSelector(selectColorTheme);

 return (
  <div className={searchBarStyle(theme)}>
    <IconSearch/>
    <input type={'text'} placeholder={'Search GitHub username...'} className={inputStyle(theme)}/>
    <div className={buttonStyle(theme)}>
      <Typography type={'h3'} fontColorType={'main'}>
        Search
      </Typography>
    </div>
  </div>
 );
};
