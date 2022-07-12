import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './fonts.css';
import {Header} from "./components/header";
import {Layout} from "./components/layout";

function App() {
  return (
    <Layout>
      <Header/>
    </Layout>
  )
}

export default App
