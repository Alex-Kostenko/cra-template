import {FC} from 'react';

import {AddCommentStyled} from './style';
import {Button, Input, TextArea} from '@ui';

interface AddCommentProps {
  onSave: () => void;
}

const AddComment: FC<AddCommentProps> = ({onSave}) => {
  return (
    <AddCommentStyled>
      <Input onChange={() => {}} value={''} placeholder='Your name' />
      <TextArea onChange={() => {}} value={''} placeholder='Your comment' />
      <Button text='Save' onClick={onSave} />
    </AddCommentStyled>
  );
};

export {AddComment};
