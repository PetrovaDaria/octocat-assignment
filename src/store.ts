import {combineReducers, configureStore, PreloadedState} from '@reduxjs/toolkit';
import {colorThemeReducer} from "./features/color-theme/color-theme.slice";
import {githubUserReducer} from "./features/github-user/github-user.slice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

const rootReducer = combineReducers({
  colorTheme: colorThemeReducer,
  githubUser: githubUserReducer
});

export const setupStore = (preloadedState: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export const store = configureStore({
  reducer: {
    colorTheme: colorThemeReducer,
    githubUser: githubUserReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type TAppDispatch = typeof store.dispatch;

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
