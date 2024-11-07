import {FC} from 'react';

import {EditIcon, TrashIcon} from '@/assets/svg';

import {ActionsWrap, Avatar, Comment as CommentStyle, Name, Text, Wrap} from './style';

interface CommentProps {
  text: string;
  avatarSrc: string;
  name: string;
  onDelete: () => void;
  onEdit: () => void;
}

const Comment: FC<CommentProps> = ({text, avatarSrc, name, onDelete, onEdit}) => {
  return (
    <CommentStyle>
      <Avatar src={avatarSrc} />
      <Wrap>
        <Name>{name}</Name>
        <Text>{text}</Text>
      </Wrap>
      <ActionsWrap>
        <EditIcon fill='red' onClick={onEdit} />
        <TrashIcon fill='red' onClick={onDelete} />
      </ActionsWrap>
    </CommentStyle>
  );
};

export {Comment};
