import React, {PropsWithChildren} from "react";
import {render, RenderOptions} from "@testing-library/react";
import {PreloadedState} from "@reduxjs/toolkit";
import {AppStore, RootState, setupStore} from "../store";
import {Provider} from "react-redux";
import {ColorTheme} from "../features/color-theme/color-theme.slice";
import {darkTheme} from "../styles";

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>,
  store?: AppStore
}

const defaultState: PreloadedState<RootState> = {
  colorTheme: {
    name: ColorTheme.DARK,
    theme: darkTheme
  },
  githubUser: {
    user: null,
    status: 'idle'
  }
}

export function renderWithProviders(
  ui: React.ReactElement | JSX.Element,
  {
    preloadedState = defaultState,
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({children}: PropsWithChildren<{}>): JSX.Element {
    return (<Provider store={store}>{children}</Provider>)
  }
 return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
