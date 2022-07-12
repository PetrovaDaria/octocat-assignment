import React from 'react';
import {layoutStyle} from "./layout.style";
import {darkTheme} from "../../styles";

type TLayoutProps = {
 children: React.ReactNode | JSX.Element;
};

export const Layout = ({children}: TLayoutProps): JSX.Element => {
 return (
  <div className={layoutStyle(darkTheme)}>
   {children}
  </div>
 );
};
