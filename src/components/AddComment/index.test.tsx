import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {AddComment} from './index';

describe('AddComment', () => {});
it('Should disable the Save button when both name and text fields are empty', () => {
  const onSaveMock = jest.fn();
  render(<AddComment onSave={onSaveMock} />);

  const saveButton = screen.getByText('Save');
  expect(saveButton).toBeDisabled();

  const nameInput = screen.getByPlaceholderText('Your name');
  const textArea = screen.getByPlaceholderText('Your comment');

  fireEvent.change(nameInput, {target: {value: 'John'}});
  expect(saveButton).toBeDisabled();

  fireEvent.change(textArea, {target: {value: 'Test comment'}});
  expect(saveButton).toBeEnabled();

  fireEvent.change(nameInput, {target: {value: ''}});
  expect(saveButton).toBeDisabled();
});
it('Should call the onSave prop with the current comment data when saving', () => {
  const onSaveMock = jest.fn();
  render(<AddComment onSave={onSaveMock} />);

  const nameInput = screen.getByPlaceholderText('Your name');
  const textArea = screen.getByPlaceholderText('Your comment');
  const saveButton = screen.getByText('Save');

  fireEvent.change(nameInput, {target: {value: 'John Doe'}});
  fireEvent.change(textArea, {target: {value: 'Test comment'}});
  fireEvent.click(saveButton);

  expect(onSaveMock).toHaveBeenCalledWith({
    name: 'John Doe',
    text: 'Test comment',
  });
});
it('Should not allow saving when only the name field is filled', () => {
  const onSaveMock = jest.fn();
  render(<AddComment onSave={onSaveMock} />);

  const nameInput = screen.getByPlaceholderText('Your name');
  const saveButton = screen.getByText('Save');

  fireEvent.change(nameInput, {target: {value: 'John Doe'}});

  expect(saveButton).toBeDisabled();

  fireEvent.click(saveButton);
  expect(onSaveMock).not.toHaveBeenCalled();
});
it('Should not allow saving when only the text field is filled', () => {
  const onSaveMock = jest.fn();
  render(<AddComment onSave={onSaveMock} />);

  const textArea = screen.getByPlaceholderText('Your comment');
  const saveButton = screen.getByText('Save');

  fireEvent.change(textArea, {target: {value: 'Test comment'}});

  expect(saveButton).toBeDisabled();

  fireEvent.click(saveButton);
  expect(onSaveMock).not.toHaveBeenCalled();
});
