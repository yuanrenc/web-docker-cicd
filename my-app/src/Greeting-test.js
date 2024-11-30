import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {
  test('renders correct message with "John"', () => {
    render(<Greeting name="John" />);
    const greetingElement = screen.getByText(/Hello, John!/i);
    expect(greetingElement).toBeInTheDocument();
  });

  test('renders correct message with "Jane"', () => {
    render(<Greeting name="Jane" />);
    const greetingElement = screen.getByText(/Hello, Jane!/i);
    expect(greetingElement).toBeInTheDocument();
  });
});