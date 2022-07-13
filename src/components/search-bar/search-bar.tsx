import React from 'react';
import IconSearch from '../../assets/icons/icon-search.svg?component';
import {darkTheme} from "../../styles";
import {buttonStyle, inputStyle, searchBarStyle} from "./search-bar.style";
import {Typography} from "../typography";

type TSearchBarProps = {

};
export const SearchBar = ({}: TSearchBarProps): JSX.Element => {
 return (
  <div className={searchBarStyle(darkTheme)}>
    <IconSearch/>
    <input type={'text'} placeholder={'Search GitHub username...'} className={inputStyle(darkTheme)}/>
    <div className={buttonStyle(darkTheme)}>
      <Typography type={'h3'} fontColorType={'main'}>
        Search
      </Typography>
    </div>
  </div>
 );
};
