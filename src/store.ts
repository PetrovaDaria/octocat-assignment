import {configureStore} from '@reduxjs/toolkit';
import {colorThemeReducer} from "./features/color-theme/color-theme.slice";

export const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
