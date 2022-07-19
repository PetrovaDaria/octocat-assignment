import React from 'react';
// import IconMoon from '../../assets/icon-moon.svg?component';
// import IconSun from '../../assets/icon-sun.svg?component';
import IconMoon from '../../../../assets/icons/icon-moon.svg';
import IconSun from '../../../../assets/icons/icon-sun.svg';
import { colorThemeToggleStyle } from './color-theme-toggle.style';
import {Typography} from "../../../../components/shared/typography/typography";
import {ColorTheme, selectColorTheme, switchTheme} from '../../color-theme.slice';
import {useAppDispatch, useAppSelector} from "../../../../store";

type TColorThemeToggleProps = {

};

export const ColorThemeToggle = ({}: TColorThemeToggleProps): JSX.Element => {
  const {name} = useAppSelector(selectColorTheme);
  const dispatch = useAppDispatch();

 return (
  <div className={colorThemeToggleStyle} onClick={() => dispatch(switchTheme())}>
    <Typography type={'h4'} fontColorType={'main'}>
      {name === ColorTheme.LIGHT && 'DARK'}
      {name === ColorTheme.DARK && 'LIGHT'}
    </Typography>
    {name === ColorTheme.LIGHT && <img src={IconMoon}/>}
    {name === ColorTheme.DARK && <img src={IconSun}/>}
  </div>
 );
};
