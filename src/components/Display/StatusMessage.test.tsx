import { render, screen } from '@testing-library/react';
import StatusMessage from './StatusMessage';

test('Status message Success is rendered', () => {
  render(<StatusMessage statusMessage={'Success'} />);

  expect(screen.getByText(/Status:/i)).toBeInTheDocument();
  const success = screen.getByText(/Success/i);
  expect(success).toBeInTheDocument();
});

test('Status message Error is rendered', () => {
  render(<StatusMessage statusMessage={'Error'} />);

  expect(screen.getByText(/Status:/i)).toBeInTheDocument();
  expect(screen.getByText(/Error/i)).toBeInTheDocument();
});
