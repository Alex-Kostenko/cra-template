import {FC} from 'react';

import {Avatar, Comment as CommentStyle, Name, Text, Wrap} from './style';

interface CommentProps {
  text: string;
  avatarSrc: string;
  name: string;
}

const Comment: FC<CommentProps> = ({text, avatarSrc, name}) => {
  return (
    <CommentStyle>
      <Avatar src={avatarSrc} />
      <Wrap>
        <Name>{name}</Name>
        <Text>{text}</Text>
      </Wrap>
    </CommentStyle>
  );
};

export {Comment};
