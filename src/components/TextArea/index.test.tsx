import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {TextArea} from './index';

describe('TextArea', () => {});
it('Should render TextArea component with provided props', () => {
  const mockOnChange = jest.fn();
  const props = {
    value: 'Test value',
    onChange: mockOnChange,
    placeholder: 'Enter text',
    name: 'testTextArea',
  };

  render(<TextArea {...props} />);

  const textArea = screen.getByPlaceholderText('Enter text') as HTMLTextAreaElement;
  expect(textArea).toBeInTheDocument();
  expect(textArea.value).toBe('Test value');
  expect(textArea.name).toBe('testTextArea');

  fireEvent.change(textArea, {target: {value: 'New value'}});
  expect(mockOnChange).toHaveBeenCalled();
});
