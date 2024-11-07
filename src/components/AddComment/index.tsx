import React, {FC, useState} from 'react';

import {AddCommentStyled} from './style';
import {Button, Input, TextArea} from '@ui';

interface AddCommentProps {
  onSave: () => void;
}

interface CommentState {
  name: string;
  comment: string;
}

const AddComment: FC<AddCommentProps> = ({onSave}) => {
  const [commentData, setCommentData] = useState<CommentState>({
    name: '',
    comment: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;

    setCommentData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <AddCommentStyled>
      <Input onChange={handleChange} value={commentData.name} placeholder='Your name' />
      <TextArea onChange={handleChange} value={commentData.comment} placeholder='Your comment' />
      <Button text='Save' onClick={onSave} disabled={!commentData.name || !commentData.comment} />
    </AddCommentStyled>
  );
};

export {AddComment};
