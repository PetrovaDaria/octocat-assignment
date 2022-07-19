import {css, cx} from "@emotion/css";
import {CSSObject} from "@emotion/css/create-instance";

type TCommonTheme = {
  disabledBtn: string;
  notAvailable: string;
  btnText: string;
  active: string;
  hoveredBtn: string;
}

export type TTheme = {
  mainBackground: string;
  blockBackground: string;
  mainFont: string;
  icon: string;
} & TCommonTheme;

const notAvailableColor = '#697c9a'

const commonTheme: TCommonTheme = {
  disabledBtn: "#66b3ff",
  notAvailable: notAvailableColor,
  btnText: "#ffffff",
  active: "#0079ff",
  hoveredBtn: "#66b3ff"
}

export const lightTheme: TTheme = {
  ...commonTheme,
  blockBackground: "#fefefe",
  mainFont: "#2b3442",
  mainBackground: "#f6f8ff",
  icon: "#4b6a9b"
};

export const darkTheme: TTheme = {
  ...commonTheme,
  blockBackground: "#1e2a47",
  mainFont: "#ffffff",
  mainBackground: "#141d2f",
  icon: '#ffffff'
};

export const mainFontColorCssObject: (theme: TTheme) => CSSObject = (theme: TTheme) => {
  return {
    color: theme.mainFont
  }
}

export const baseBlockStyle = (theme: TTheme) => css({
  background: theme.blockBackground,
  borderRadius: '10px'
});

export const baseIconStyle = (theme: TTheme) => css({
  path: {
    fill: theme.icon
  }
});

export const notAvailableIconStyle = css({
  path: {
    fill: notAvailableColor
  }
});

export const iconStyle = (theme: TTheme, isAvailable: boolean) => cx(
  baseIconStyle(theme),
  !isAvailable && notAvailableIconStyle
)




