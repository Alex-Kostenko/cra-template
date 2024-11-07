import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Input} from './index';

describe('Input', () => {});
it('should render the input component with all props provided', () => {
  const mockOnChange = jest.fn();
  render(<Input value='test value' onChange={mockOnChange} name='test-input' placeholder='Enter text' />);

  const inputElement = screen.getByPlaceholderText('Enter text') as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();
  expect(inputElement.value).toBe('test value');
  expect(inputElement.name).toBe('test-input');
  expect(inputElement.placeholder).toBe('Enter text');

  fireEvent.change(inputElement, {target: {value: 'new value'}});
  expect(mockOnChange).toHaveBeenCalled();
});
it('should display placeholder text when value is empty', () => {
  const mockOnChange = jest.fn();
  render(<Input value='' onChange={mockOnChange} name='test-input' placeholder='Enter text' />);

  const inputElement = screen.getByPlaceholderText('Enter text') as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();
  expect(inputElement.value).toBe('');
  expect(inputElement.placeholder).toBe('Enter text');
});
