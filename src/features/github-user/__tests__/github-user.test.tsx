import {rest} from "msw";
import {setupServer} from "msw/node";
import {App} from "../../../App";
import {renderWithProviders} from "../../../utils/test-utils";
import {screen} from '@testing-library/react';

export const handlers = [
  rest.get('/users/PetrovaDaria', (req, res, ctx) => {
    return res(ctx.json({name: 'Daria'}), ctx.delay(150));
  })
]

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
})

test('', () => {
  renderWithProviders(<App/>);
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();
});
