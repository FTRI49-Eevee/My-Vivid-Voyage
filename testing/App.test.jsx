import { describe, it, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';
import AddingRegionInfo from '../src/components/formContainer';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);

    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});

describe('<Form />', () => {
  test('The input field and its props', () => {
    render(<AddingRegionInfo />);
    const input = document.querySelector('input');
    expect(input).toBeTruthy();
    expect(input?.textContent).toBe('');

    if (input) {
      input.textContent = 'testing the input';
      expect(input.textContent).toBe('testing the input');
      expect(input.type).toBe('file');
      expect(input.name).toBe('picture');

      fireEvent.change(input, {
        target: {
          value: 'testing the input',
        },
      });
      expect(input.value).toBe('testing the input');
    }
  });
});
