import React from 'react';
import IconMoon from '../../assets/icon-moon.svg?component';
import IconSun from '../../assets/icon-sun.svg?component';
import { colorThemeToggleStyle } from './color-theme-toggle.style';
import {Typography} from "../typography";

export enum ColorTheme {
  LIGHT = 'light',
  DARK = 'dark'
}

type TColorThemeToggleProps = {
  currentColorTheme: ColorTheme;
};

export const ColorThemeToggle = ({currentColorTheme}: TColorThemeToggleProps): JSX.Element => {
 return (
  <div className={colorThemeToggleStyle} onClick={() => {/*смена темы*/}}>
    <Typography type={'h4'} fontColorType={'main'}>
      {currentColorTheme === ColorTheme.LIGHT && 'DARK'}
      {currentColorTheme === ColorTheme.DARK && 'LIGHT'}
    </Typography>
    {currentColorTheme === ColorTheme.LIGHT && <IconMoon/>}
    {currentColorTheme === ColorTheme.DARK && <IconSun/>}
  </div>
 );
};
