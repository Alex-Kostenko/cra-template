import React, {FC, useState} from 'react';

import {AddCommentStyled} from './style';
import {Button, Input, TextArea} from '@ui';

export interface CommentState {
    name: string;
    text: string;
  }
  

interface AddCommentProps {
  onSave: (data: CommentState) => void;
}

const AddComment: FC<AddCommentProps> = ({onSave}) => {
  const [commentData, setCommentData] = useState<CommentState>({
    name: '',
    text: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;

    setCommentData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSaveComment = () => {
    setCommentData({
        name: '',
        text: ''
    });
    onSave(commentData);
  }

  return (
    <AddCommentStyled>
      <Input onChange={handleChange} value={commentData.name} placeholder='Your name' name="name" />
      <TextArea onChange={handleChange} value={commentData.text} placeholder='Your comment' name="text" />
      <Button text='Save' onClick={() => onSaveComment()} disabled={!commentData.name || !commentData.text} />
    </AddCommentStyled>
  );
};

export {AddComment};
