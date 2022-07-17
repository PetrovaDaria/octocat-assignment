import { useEffect} from 'react'
import './App.css'
import './fonts.css';
import {Header} from "./components/header";
import {Layout} from "./components/layout";
import {SearchBar} from "./components/search-bar/search-bar";
import {UserInfoBlock} from "./components/user-info-block";
import {Gaps} from "./components/gaps";
import {CellMargin} from "./components/cell-margin";
import {useAppDispatch, useAppSelector} from "./store";
import {fetchGithubUser, selectGithubUserState} from "./features/github-user/github-user.slice";

function App() {
  const dispatch = useAppDispatch();
  const {status} = useAppSelector(selectGithubUserState);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchGithubUser('octocat'))
    }
  }, [status]);

  return (
    <Layout>
      <CellMargin margin={'0px 30px'}>
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
