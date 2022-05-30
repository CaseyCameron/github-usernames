import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './Home';

test('should render info for our first user', async () => {
  render(<Home />);

  await screen.findByRole('cell', {name: 'mehtaphysical'});
  const name = await screen.findByTestId('mehtaphysical-name');
  expect(name.textContent).toBe('Ryan Mehta');
  const repos = await screen.findByTestId('mehtaphysical-repos');
  expect(repos.textContent).toBe('65');
  const gists = await screen.findByTestId('mehtaphysical-gists');
  expect(gists.textContent).toBe('12');
  const followers = await screen.findByTestId('mehtaphysical-followers');
  expect(followers.textContent).toBe('112');
  const following = await screen.findByTestId('mehtaphysical-following');
  expect(following.textContent).toBe('0');
  const createdAt = await screen.findByTestId('mehtaphysical-created_at');
  expect(createdAt.textContent).toBe('12/09/2011');
});

test('Should accept user input and return an error', async () => {
  render(<Home />);

  const userInput = screen.getByRole('textbox', {
    name: /save github username to database/i
  });

  userEvent.type(userInput, '38rj2@9f2-fdfk233r@$sdf');
  userEvent.keyboard('{Enter}');
  const statusMessage = await screen.findByText(/Error/i);
  expect(statusMessage).toBeInTheDocument();
});
