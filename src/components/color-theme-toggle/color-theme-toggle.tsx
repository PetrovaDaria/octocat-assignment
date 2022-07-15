import React from 'react';
import IconMoon from '../../assets/icon-moon.svg?component';
import IconSun from '../../assets/icon-sun.svg?component';
import { colorThemeToggleStyle } from './color-theme-toggle.style';
import {Typography} from "../typography";
import {useDispatch, useSelector} from "react-redux";
import {ColorTheme, selectColorTheme, switchTheme} from '../../features/color-theme/color-theme.slice';
import {RootState} from "../../store";

type TColorThemeToggleProps = {

};

export const ColorThemeToggle = ({}: TColorThemeToggleProps): JSX.Element => {
  const {name} = useSelector(selectColorTheme);
  const dispatch = useDispatch();

 return (
  <div className={colorThemeToggleStyle} onClick={() => dispatch(switchTheme())}>
    <Typography type={'h4'} fontColorType={'main'}>
      {name === ColorTheme.LIGHT && 'DARK'}
      {name === ColorTheme.DARK && 'LIGHT'}
    </Typography>
    {name === ColorTheme.LIGHT && <IconMoon/>}
    {name === ColorTheme.DARK && <IconSun/>}
  </div>
 );
};
