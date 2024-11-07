import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Comment} from './index';

jest.mock('@/assets/svg', () => ({
  EditIcon: () => <div data-testid='edit-icon' />,
  TrashIcon: () => <div data-testid='trash-icon' />,
}));

describe('Comment', () => {});
it('should display the correct avatar image using the provided avatarSrc', () => {
  const props = {
    id: '123',
    text: 'Test comment',
    avatarSrc: 'test-avatar.jpg',
    name: 'John Doe',
    onDelete: jest.fn(),
    onEdit: jest.fn(),
  };

  render(<Comment {...props} />);

  const avatarElement = screen.getByRole('img');
  expect(avatarElement).toHaveAttribute('src', 'test-avatar.jpg');
});
it("should show the user's name in the Name component", () => {
  const props = {
    id: '123',
    text: 'Test comment',
    avatarSrc: 'test-avatar.jpg',
    name: 'John Doe',
    onDelete: jest.fn(),
    onEdit: jest.fn(),
  };

  render(<Comment {...props} />);

  const nameElement = screen.getByText('John Doe');
  expect(nameElement).toBeInTheDocument();
  const commentElement = screen.getByText('Test comment');
  expect(commentElement).toBeInTheDocument();
});
