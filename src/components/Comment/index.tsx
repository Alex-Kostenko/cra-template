import {FC} from 'react';
import {AddComment, CommentState} from '@ui';
import {EditIcon, TrashIcon} from '@/assets/svg';

import {ActionsWrap, Avatar, Comment as CommentStyle, Name, Text, Wrap} from './style';

interface CommentProps {
  id: string;
  idToEdit?: string | undefined;
  text: string;
  avatarSrc: string;
  name: string;
  onDelete: (id: string) => void;
  onSelectToEdit: (id: string) => void;
  onSaveEdit: (id: string, update: CommentState) => void;
}

const Comment: FC<CommentProps> = ({id, text, avatarSrc, name, onDelete, onSelectToEdit, idToEdit, onSaveEdit}) => {
  return (
    <CommentStyle>
      {idToEdit !== id && (
        <>
          <Avatar src={avatarSrc} />
          <Wrap>
            <Name>{name}</Name>
            <Text>{text}</Text>
          </Wrap>
          <ActionsWrap>
            <EditIcon fill='red' onClick={() => onSelectToEdit(id)} />
            <TrashIcon fill='red' onClick={() => onDelete(id)} />
          </ActionsWrap>
        </>
      )}
      {idToEdit === id && <AddComment onSave={data => onSaveEdit(id, data)} text={text} name={name} />}
    </CommentStyle>
  );
};

export {Comment};
