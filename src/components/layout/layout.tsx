import React from 'react';
import {layoutStyle} from "./layout.style";
import {darkTheme} from "../../styles";
import {useSelector} from "react-redux";
import {selectColorTheme} from "../../features/color-theme/color-theme.slice";

type TLayoutProps = {
 children: React.ReactNode | JSX.Element;
};

export const Layout = ({children}: TLayoutProps): JSX.Element => {
 const {theme} = useSelector(selectColorTheme);

 return (
  <div className={layoutStyle(theme)}>
   {children}
  </div>
 );
};
