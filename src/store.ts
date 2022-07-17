import {configureStore} from '@reduxjs/toolkit';
import {colorThemeReducer} from "./features/color-theme/color-theme.slice";
import {githubUserReducer} from "./features/github-user/github-user.slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    githubUser: githubUserReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
