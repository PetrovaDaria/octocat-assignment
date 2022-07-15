import {createSlice} from "@reduxjs/toolkit";
import {darkTheme, lightTheme, TTheme} from "../../styles";
import {RootState} from "../../store";

export enum ColorTheme {
  LIGHT = 'light',
  DARK = 'dark'
}

interface ColorThemeState {
  name: ColorTheme;
  theme: TTheme;
}

const initialState: ColorThemeState = {
  name: ColorTheme.DARK,
  theme: darkTheme
}

export const colorThemeSlice = createSlice({
  name: 'colorTheme',
  initialState,
  reducers: {
    switchTheme: state => {
      return state.name === ColorTheme.DARK ?
        {theme: lightTheme, name: ColorTheme.LIGHT} :
        {theme: darkTheme, name: ColorTheme.DARK}
    }
  }
});

export const selectColorTheme = (state: RootState) => state.colorTheme;

export const { switchTheme } = colorThemeSlice.actions;
export const colorThemeReducer = colorThemeSlice.reducer;

