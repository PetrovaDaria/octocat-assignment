import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './fonts.css';
import {Header} from "./components/header";
import {Layout} from "./components/layout";
import {SearchBar} from "./components/search-bar/search-bar";

function App() {
  return (
    <Layout>
      <Header/>
      <SearchBar/>
    </Layout>
  )
}

export default App
