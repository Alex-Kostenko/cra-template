import React from 'react';
import {render, screen} from '@testing-library/react';
import {Button} from '@ui';

describe('Button component', () => {});
it('should render the button with the provided text', () => {
  const buttonText = 'Click me';
  render(<Button text={buttonText} />);
  const buttonElement = screen.getByText(buttonText);
  expect(buttonElement).toBeInTheDocument();
});
it('should render an empty button when no text is provided', () => {
  render(<Button text='' />);
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('');
});

it('should render special characters in the button text correctly', () => {
  const specialText = 'Click me! @#$%^&*()_+';
  render(<Button text={specialText} />);
  const buttonElement = screen.getByText(specialText);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent(specialText);
});

it('should render multiple buttons with different texts', () => {
  const buttonTexts = ['Button 1', 'Button 2', 'Button 3'];
  const {getAllByRole} = render(
    <>
      {buttonTexts.map((text, index) => (
        <Button key={index} text={text} />
      ))}
    </>
  );
  const buttonElements = getAllByRole('button');
  expect(buttonElements).toHaveLength(buttonTexts.length);
  buttonElements.forEach((button, index) => {
    expect(button).toHaveTextContent(buttonTexts[index]);
  });
});

it('should render the button with Unicode characters', () => {
  const unicodeText = 'BTN 🚀 按钮';
  render(<Button text={unicodeText} />);
  const buttonElement = screen.getByText(unicodeText);
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent(unicodeText);
});
it('should not throw an error when rendering with an empty string', () => {
  expect(() => render(<Button text='' />)).not.toThrow();
  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveTextContent('');
});
