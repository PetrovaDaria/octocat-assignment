import {css, cx} from "@emotion/css";
import {CSSObject} from "@emotion/css/create-instance";

type TCommonTheme = {
  disabledBtn: string;
  notAvailable: string;
}

export type TTheme = {
  mainBackground: string;
  blockBackground: string;
  mainFont: string;
  active: string;
  hoveredBtn: string;
  icon: string;
} & TCommonTheme;

const notAvailableColor = '#697c9a'

const commonTheme: TCommonTheme = {
  disabledBtn: "#f6f8ff",
  notAvailable: notAvailableColor
}

export const lightTheme: TTheme = {
  ...commonTheme,
  active: "#0079ff",
  hoveredBtn: "",
  blockBackground: "#fefefe",
  mainFont: "#2b3442",
  mainBackground: "#f6f8ff",
  icon: "#4b6a9b"
};

export const darkTheme: TTheme = {
  ...commonTheme,
  active: "#0079ff",
  hoveredBtn: "",
  blockBackground: "#1e2a47",
  mainFont: "#ffffff",
  mainBackground: "#141d2f",
  icon: '#ffffff'
};

export const h1Style = css({
  fontFamily: 'Space Mono Bold',
  fontSize: '26px',
  lineHeight: '38px'
});

export const h2Style = css({
  fontFamily: 'Space Mono Bold',
  fontSize: '22px',
  lineHeight: '33px'
});

export const h3CssObject: CSSObject = {
  fontFamily: 'Space Mono Reg',
  fontSize: '16px',
  lineHeight: '24px',
}

export const h3Style = css(h3CssObject);

export const h4Style = css({
  fontFamily: 'Space Mono Reg',
  fontSize: '13px',
  lineHeight: '20px'
});

export const pStyle = css({
  fontFamily: 'Space Mono Reg',
  fontSize: '15px',
  lineHeight: '25px'
});

export const mainFontColorCssObject: (theme: TTheme) => CSSObject = (theme: TTheme) => {
  return {
    color: theme.mainFont
  }
}

export const mainFontColorStyle = (theme: TTheme) => css(mainFontColorCssObject(theme))

export const activeFontColorStyle = (theme: TTheme) => css({
  color: theme.active
})

export const notAvailableFontColorStyle = (theme: TTheme) => css({
  color: theme.notAvailable
})

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




