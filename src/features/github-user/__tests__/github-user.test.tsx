import {rest} from "msw";
import {setupServer} from "msw/node";
import {App} from "../../../App";
import {renderWithProviders} from "../../../utils/test-utils";
import {screen, waitFor, fireEvent, waitForElementToBeRemoved} from '@testing-library/react';
import {createServer} from "miragejs";
import {TGithubUser} from "../github-user.slice";

const normalResponse: TGithubUser = {
  "login": "octocat",
  "id": 583231,
  "node_id": "MDQ6VXNlcjU4MzIzMQ==",
  "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "The Octocat",
  "company": "@github",
  "blog": "https://github.blog",
  "location": "San Francisco",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 8,
  "followers": 6420,
  "following": 9,
  "created_at": "2011-01-25T18:44:36Z",
  "updated_at": "2022-03-22T14:07:15Z"
}

const server = createServer({
  routes() {
    this.get('https://api.github.com/users/:login', (schema, request) => {
      const login = request.params.login;
      return normalResponse;
    })
  }
})

const searchInputPlaceholder = 'Search GitHub username...';
const loadingText = 'Loading...';
const searchBtnAriaLabel = 'search-btn';
const githubUserNameAriaLabel = 'github-user-name';

test('App correctly renders initial Octocat response', async () => {
  renderWithProviders(<App/>);
  const loadingComponent = screen.getByText(loadingText);
  const searchInput = screen.getByPlaceholderText(searchInputPlaceholder);
  const searchBtn = screen.getByLabelText(searchBtnAriaLabel);

  expect(loadingComponent).toBeInTheDocument();
  // fireEvent.change(searchInput, {target: {value: 'PetrovaDaria'}});
  // fireEvent.click(searchBtn);
  await waitForElementToBeRemoved(loadingComponent);

  const userNameComponent = screen.getByLabelText(githubUserNameAriaLabel);

  expect(userNameComponent).toContainHTML('The Octocat');
  console.log(screen.logTestingPlaygroundURL());
});
