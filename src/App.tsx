import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './fonts.css';
import {Header} from "./components/header";
import {Layout} from "./components/layout";
import {SearchBar} from "./components/search-bar/search-bar";
import {UserInfoBlock} from "./components/user-info-block";
import {Gaps} from "./components/gaps";
import {CellMargin} from "./components/cell-margin";

function App() {
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
