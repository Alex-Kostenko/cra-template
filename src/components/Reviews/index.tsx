import {FC, useState} from 'react';

import {HeaderStyled, ReviewsStyled,CommentsContainer} from './style';
import {AddComment, Comment} from '@ui';

interface Comment {
    id: string;
    text: string;
    avatarSrc: string;
    name: string;
}

const commentsMOCK: Array<Comment> = [
  {
    id: '1',
    text: 'Some comments by Vasyl Some comments by Vasyl Some comments by Vasyl Some comments by VasylSome comments by VasylSome comments by Vasyl Some comments by Vasyl Some comments by Vasyl Some comments by Vasyl Some comments by Vasyl Some comments by Vasyl Some comments by Vasyl Some comments by Vasyl Some comments by Vasyl Some comments by Vasyl Some comments by Vasyl Some comments by Vasyl Some comments by Vasyl',
    avatarSrc: 'https://cms.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery',
    name: 'Vasyl Lastname',
  },
  {
    id: '2',
    text: 'Some comments by Vasyl',
    avatarSrc: 'https://cms.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery',
    name: 'Vasyl Lastname',
  },
  {
    id: '3',
    text: 'Some comments by Vasyl',
    avatarSrc: 'https://cms.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery',
    name: 'Vasyl Lastname',
  },
  {
    id: '4',
    text: 'Some comments by Vasyl',
    avatarSrc: 'https://cms.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery',
    name: 'Vasyl Lastname',
  },
  {
    id: '5',
    text: 'Some comments by Vasyl',
    avatarSrc: 'https://cms.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery',
    name: 'Vasyl Lastname',
  },
];

const Reviews: FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  // @ts-ignore
  const onAddComment = (commentData) => {
    const commentToAdd = {
        id: 'some_random_id',
        avatarSrc: 'https://cms.imgworlds.com/assets/a5366382-0c26-4726-9873-45d69d24f819.jpg?key=home-gallery',
        ...commentData,
    }

    setComments([...comments, commentToAdd]);
  }

  return (
    <ReviewsStyled>
      <HeaderStyled>Reviews</HeaderStyled>
      <CommentsContainer>
        {comments.map(comment => (
            <Comment key={comment.id} {...comment} />
        ))}
      </CommentsContainer>
      <AddComment onSave={onAddComment} />
    </ReviewsStyled>
  );
};

export {Reviews};
