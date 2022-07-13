import {css} from "@emotion/css";
import {CSSInterpolation, CSSObject, Emotion} from "@emotion/css/create-instance";

export type TTheme = {
  mainBackground: string;
  blockBackground: string;
  mainFont: string;
  secondaryFont: string;
  unavailableFont: string;
  activeBtn: string;
  hoveredBtn: string;
}

export const lightTheme: TTheme = {
  activeBtn: "#0079ff",
  hoveredBtn: "",
  secondaryFont: "",
  unavailableFont: "",
  blockBackground: "#fefefe",
  mainFont: "#2b3442",
  mainBackground: "#f6f8ff"
};

export const darkTheme: TTheme = {
  activeBtn: "#0079ff",
  hoveredBtn: "",
  secondaryFont: "",
  unavailableFont: "",
  blockBackground: "#1e2a47",
  mainFont: "#ffffff",
  mainBackground: "#141d2f"
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

export const secondaryFontColorStyle = (theme: TTheme) => css({
  color: theme.secondaryFont
})

