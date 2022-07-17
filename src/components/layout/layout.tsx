import React from 'react';
import {layoutStyle} from "./layout.style";
import {selectColorTheme} from "../../features/color-theme/color-theme.slice";
import {useAppSelector} from "../../store";

type TLayoutProps = {
 children: React.ReactNode | JSX.Element;
};

export const Layout = ({children}: TLayoutProps): JSX.Element => {
 const {theme} = useAppSelector(selectColorTheme);

 return (
  <div className={layoutStyle(theme)}>
   {children}
  </div>
 );
};
