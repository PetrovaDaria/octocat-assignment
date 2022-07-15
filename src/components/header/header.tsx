import React from 'react';
import {ColorThemeToggle} from "../color-theme-toggle/color-theme-toggle";
import {headerStyle, serviceNameStyle} from "./header.style";
import {Typography} from "../typography";

type THeaderProps = {

};
export const Header = ({}: THeaderProps): JSX.Element => {
 return (
  <div className={headerStyle}>
    <Typography type={'h2'} fontColorType={'main'}>
      devfinder
    </Typography>
    <ColorThemeToggle/>
  </div>
 );
};
