import React from 'react';
import {ColorThemeToggle} from "../../features/color-theme/ui/color-theme-toggle/color-theme-toggle";
import {headerStyle} from "./header.style";
import {Typography} from "../shared/typography/typography";

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
