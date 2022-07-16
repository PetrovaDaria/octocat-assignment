import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../store";

type TGithubUser = {
  "login": string;
  "id": number,
  "node_id": string,
  "avatar_url": string,
  "gravatar_id": "",
  "url": string,
  "html_url": string,
  "followers_url": string,
  "following_url": string,
  "gists_url": string,
  "starred_url": string,
  "subscriptions_url": string,
  "organizations_url": string,
  "repos_url": string,
  "events_url": string,
  "received_events_url": string,
  "type": string,
  "site_admin": false,
  "name": string,
  "company": string,
  "blog": string,
  "location": string,
  "email": string,
  "hireable": boolean,
  "bio": string,
  "twitter_username": string,
  "public_repos": number,
  "public_gists": number,
  "followers": number,
  "following": number,
  "created_at": string,
  "updated_at": string
}

// type TGithubUser = {name: string};

type TStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

type TGithubUserState = {
  user: TGithubUser | null;
  status: TStatus;
  error: string | null;
}

const initialState: TGithubUserState = {
  user: null,
  status: 'idle',
  error: null
};

export const fetchGithubUser = createAsyncThunk('githubUser/fetch', async (login: string): Promise<TGithubUser> => {
  console.log('request ', login);
  const response = await fetch(
    `https://api.github.com/users/${login}`,
    {headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': ''
        }});
  return response.json();
});

export const githubUserSlice = createSlice({
  name: 'githubUser',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGithubUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'succeeded';
        state.error = null;
      })
      .addCase(fetchGithubUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchGithubUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || '';
      })
  }
});

export const selectGithubUserState = (state: RootState) => state.githubUser;

export const githubUserReducer = githubUserSlice.reducer;
