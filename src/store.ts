import {configureStore} from '@reduxjs/toolkit';
import {colorThemeReducer} from "./features/color-theme/color-theme.slice";
import {githubUserReducer} from "./features/github-user/github-user.slice";

export const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    githubUser: githubUserReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
