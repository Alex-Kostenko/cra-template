import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {Button} from './index';

describe('Button', () => {});
it('should render the button with the provided text', () => {
  const buttonText = 'Click me';
  render(<Button text={buttonText} onClick={() => {}} disabled={false} />);
  const buttonElement = screen.getByText(buttonText);
  expect(buttonElement).toBeInTheDocument();
});
it('should call the onClick function when the button is clicked', () => {
  const onClick = jest.fn();
  const buttonText = 'Click me';
  render(<Button text={buttonText} onClick={onClick} disabled={false} />);
  const buttonElement = screen.getByText(buttonText);
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
it('should disable the button when the disabled prop is true', () => {
  const buttonText = 'Click me';
  render(<Button text={buttonText} onClick={() => {}} disabled={true} />);
  const buttonElement = screen.getByText(buttonText);
  expect(buttonElement).toBeDisabled();
});
it('should render multiple buttons with different props correctly', () => {
  const buttons = [
    {text: 'Button 1', onClick: jest.fn(), disabled: false},
    {text: 'Button 2', onClick: jest.fn(), disabled: true},
    {text: 'Button 3', onClick: jest.fn(), disabled: false},
  ];

  buttons.forEach(({text, onClick, disabled}) => {
    render(<Button text={text} onClick={onClick} disabled={disabled} />);
    const buttonElement = screen.getByText(text);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(text);
    expect(buttonElement).toHaveProperty('disabled', disabled);

    if (!disabled) {
      fireEvent.click(buttonElement);
      expect(onClick).toHaveBeenCalledTimes(1);
    }
  });
});
