import {useCallback, useEffect, useState} from 'react'
import logo from './logo.svg'
import './App.css'
import './fonts.css';
import {Header} from "./components/header";
import {Layout} from "./components/layout";
import {SearchBar} from "./components/search-bar/search-bar";
import {UserInfoBlock} from "./components/user-info-block";
import {Gaps} from "./components/gaps";
import {CellMargin} from "./components/cell-margin";
import {useDispatch, useSelector} from "react-redux";
import {RootState, TAppDispatch} from "./store";
import {selectColorTheme} from "./features/color-theme/color-theme.slice";
import {fetchGithubUser} from "./features/github-user/github-user.slice";

function App() {
  const dispatch = useDispatch<TAppDispatch>();

  useEffect(() => {
    dispatch(fetchGithubUser('octocat'))
  }, []);

  return (
    <Layout>
      <CellMargin margin={'30px'}>
        <Gaps gapHeight={'30px'}>
          <Header/>
          <SearchBar/>
          <UserInfoBlock/>
        </Gaps>
      </CellMargin>
    </Layout>
  )
}

export default App
