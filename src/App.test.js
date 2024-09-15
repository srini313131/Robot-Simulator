import { render, screen } from '@testing-library/react';
import App from './App';


test('renders Robot Simulator heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Robot Simulator/i);
  expect(headingElement).toBeInTheDocument();
});
