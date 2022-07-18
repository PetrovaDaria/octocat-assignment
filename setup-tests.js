import {rest} from "msw";
import {setupServer} from "msw/node";

export const handlers = [
  rest.get('https://api.github.com/users/:login', (req, res, ctx) => {
    const {login} = req.params;
    let payload = {};
    if (login === 'octocat' || login === 'PetrovaDaria') {
      payload = {name: 'Daria'};
    }
    return res(ctx.status(200), ctx.json(payload));
  })
]

const server = setupServer(...handlers);
// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())
