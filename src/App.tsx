import { useEffect} from 'react'
import './App.css'
import './fonts.css';
import {Header} from "./components/header";
import {Layout} from "./components/layout";
import {SearchBar} from "./components/search-bar/search-bar";
import {UserInfoBlock} from "./features/github-user/ui";
import {Gaps} from "./components/shared/gaps";
import {CellMargin} from "./components/shared/cell-margin";
import {useAppDispatch, useAppSelector} from "./store";
import {fetchGithubUser, selectGithubUserState} from "./features/github-user/github-user.slice";

export function App() {
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
