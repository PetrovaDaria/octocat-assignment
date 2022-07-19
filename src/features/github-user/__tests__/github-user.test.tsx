import {App} from "../../../App";
import {renderWithProviders} from "../../../utils/test-utils";
import {screen, waitFor, fireEvent, waitForElementToBeRemoved} from '@testing-library/react';
import {createServer} from "miragejs";
import {TGithubUser} from "../github-user.slice";
import {Response} from 'miragejs';
import {Server} from "miragejs/server";

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
  "bio": "This is my bio",
  "twitter_username": "kamyshev_dev",
  "public_repos": 8,
  "public_gists": 8,
  "followers": 6420,
  "following": 9,
  "created_at": "2011-01-25T18:44:36Z",
  "updated_at": "2022-03-22T14:07:15Z"
}

const notFullyFilledResponse: TGithubUser = {
  "login": "PetrovaDaria",
  "id": 583231,
  "node_id": "MDQ6VXNlcjU4MzIzMQ==",
  "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/PetrovaDaria",
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
  "name": null,
  "company": null,
  "blog": null,
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 0,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2011-01-25T18:44:36Z",
  "updated_at": "2022-03-22T14:07:15Z"
}

const searchInputPlaceholder = 'Search GitHub username...';
const loadingText = 'Loading...';
const failedText = 'User was not found';
const searchBtnAriaLabel = 'search-btn';
const githubUserNameAriaLabel = 'github-user-name';
const githubUserLoginAriaLabel = 'github-user-login';
const githubUserBioAriaLabel = 'github-user-bio';
const githubUserJoinedDateAriaLabel = 'github-user-joined-date';
const reposValueAriaLabel = 'repos-value';
const followersValueAriaLabel = 'followers-value';
const followingValueAriaLabel = 'following-value';
const locationLinkAriaLabel = 'location-link';
const twitterLinkAriaLabel = 'twitter-link';
const companyLinkAriaLabel = 'company-link';
const blogLinkAriaLabel = 'blog-link';

describe('App', () => {
  let userNameComponent: HTMLElement;
  let userLoginComponent: HTMLElement;
  let userBioComponent: HTMLElement;
  let userJoinedDateComponent: HTMLElement;
  let reposValueComponent: HTMLElement;
  let followersValueComponent: HTMLElement;
  let followingValueComponent: HTMLElement;
  let locationLinkComponent: HTMLElement;
  let twitterLinkComponent: HTMLElement;
  let blogLinkComponent: HTMLElement;
  let companyLinkComponent: HTMLElement;

  let server: Server;

  const initVars = () => {
    userNameComponent = screen.getByLabelText(githubUserNameAriaLabel);
    userLoginComponent = screen.getByLabelText(githubUserLoginAriaLabel);
    userBioComponent = screen.getByLabelText(githubUserBioAriaLabel);
    userJoinedDateComponent = screen.getByLabelText(githubUserJoinedDateAriaLabel);
    reposValueComponent = screen.getByLabelText(reposValueAriaLabel);
    followersValueComponent = screen.getByLabelText(followersValueAriaLabel);
    followingValueComponent = screen.getByLabelText(followingValueAriaLabel);
    locationLinkComponent = screen.getByLabelText(locationLinkAriaLabel);
    twitterLinkComponent = screen.getByLabelText(twitterLinkAriaLabel);
    blogLinkComponent = screen.getByLabelText(blogLinkAriaLabel);
    companyLinkComponent = screen.getByLabelText(companyLinkAriaLabel);
  }

  beforeEach(() => {
    server = createServer({
      routes() {
        this.get('https://api.github.com/users/:login', (schema, request) => {
          const login = request.params.login;
          console.log('req login ', login);
          if (login === 'octocat') {
            return normalResponse
          }
          if (login === 'PetrovaDaria') {
            return notFullyFilledResponse;
          }
          if (login === 'unknown') {
            return new Response(404, );
          }
          return normalResponse;
        }, {timing: 100})
      }
    })
  });

  afterEach(() => {
    server.shutdown();
  });

  it('correctly renders initial Octocat response', async () => {
    renderWithProviders(<App/>);
    const loadingComponent = screen.getByText(loadingText);

    expect(loadingComponent).toBeInTheDocument();
    await waitForElementToBeRemoved(loadingComponent);

    initVars();

    expect(userNameComponent).toContainHTML('The Octocat');
    expect(userLoginComponent).toContainHTML('@octocat');
    expect(userLoginComponent).toHaveAttribute('href', 'https://github.com/octocat');
    expect(userBioComponent).toContainHTML('This is my bio');
    expect(userJoinedDateComponent).toContainHTML('Joined 25 Jan 2011');
    expect(reposValueComponent).toContainHTML('8');
    expect(followersValueComponent).toContainHTML('6420');
    expect(followingValueComponent).toContainHTML('9');
    expect(locationLinkComponent).toContainHTML('San Francisco');
    expect(twitterLinkComponent).toContainHTML('@kamyshev_dev');
    expect(twitterLinkComponent).toHaveAttribute('href', 'https://twitter.com/kamyshev_dev')
    expect(blogLinkComponent).toContainHTML('https://github.blog');
    expect(blogLinkComponent).toHaveAttribute('href', 'https://github.blog');
    expect(companyLinkComponent).toContainHTML('@github');
  })

  it('correctly renders not fully filled response', async () => {
    renderWithProviders(<App/>);

    let loadingComponent = screen.getByText(loadingText);
    await waitForElementToBeRemoved(loadingComponent);

    const searchInput = screen.getByPlaceholderText(searchInputPlaceholder);
    const searchBtn = screen.getByLabelText(searchBtnAriaLabel);

    fireEvent.change(searchInput, {target: {value: 'PetrovaDaria'}});
    fireEvent.click(searchBtn);

    loadingComponent = screen.getByText(loadingText);
    await waitForElementToBeRemoved(loadingComponent);

    initVars();

    expect(userNameComponent).toContainHTML('PetrovaDaria');
    expect(userLoginComponent).toContainHTML('@PetrovaDaria');
    expect(userLoginComponent).toHaveAttribute('href', 'https://github.com/PetrovaDaria');
    expect(userBioComponent).toContainHTML('This profile has no bio');
    expect(userJoinedDateComponent).toContainHTML('Joined 25 Jan 2011');
    expect(reposValueComponent).toContainHTML('0');
    expect(followersValueComponent).toContainHTML('0');
    expect(followingValueComponent).toContainHTML('0');
    expect(locationLinkComponent).toContainHTML('Not available');
    expect(twitterLinkComponent).toContainHTML('Not available');
    expect(twitterLinkComponent).not.toHaveAttribute('href')
    expect(blogLinkComponent).toContainHTML('Not available');
    expect(blogLinkComponent).not.toHaveAttribute('href');
    expect(companyLinkComponent).toContainHTML('Not available');
  });

  it('shows error message for unknown login', async () => {
    renderWithProviders(<App/>);

    let loadingComponent = screen.getByText(loadingText);
    await waitForElementToBeRemoved(loadingComponent);

    const searchInput = screen.getByPlaceholderText(searchInputPlaceholder);
    const searchBtn = screen.getByLabelText(searchBtnAriaLabel);

    fireEvent.change(searchInput, {target: {value: 'unknown'}});
    fireEvent.click(searchBtn);

    await waitFor(() => {
      const userWasNotFoundComponent = screen.getByText(failedText);
      expect(userWasNotFoundComponent).toBeInTheDocument();
    })

    console.log('third 3', screen.logTestingPlaygroundURL());
  });
})

