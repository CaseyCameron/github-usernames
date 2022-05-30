import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders each major element', () => {
  render(<App />);
  // validate the Header component
  screen.getByRole('heading', {name: /GitHub User Saver App/i});

  // validate the Form Input
  screen.getByLabelText(/Save GitHub Username to Database/i);

  // validate the Status Message
  screen.getByText(/Status/i);

  // validate the table heading
  screen.getByRole('row', {
    name: 'Username Name Public Repos Public Gists Followers Following Created At'
  });
});
