import {FC, useState} from 'react';
const imageGen = require('@dudadev/random-img');

import {HeaderStyled, ReviewsStyled,CommentsContainerStyled, NoReviewsStyled} from './style';
import {AddComment, Comment} from '@ui';

interface Comment {
    id: string;
    text: string;
    avatarSrc: string;
    name: string;
}

const Reviews: FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  // @ts-ignore
  const onAddComment = async (commentData) => {
    const url = await imageGen();

    const commentToAdd = {
        id: 'some_random_id',
        avatarSrc: url,
        ...commentData,
    }

    setComments([...comments, commentToAdd]);
  }

  return (
    <ReviewsStyled>
      <HeaderStyled>Reviews</HeaderStyled>
      <CommentsContainerStyled>
        {
          !comments.length && <NoReviewsStyled>No Reviews</NoReviewsStyled>
        }
        {
          !!comments.length && comments.map(comment => <Comment key={comment.id} {...comment} />)
        }
      </CommentsContainerStyled>
      <AddComment onSave={onAddComment} />
    </ReviewsStyled>
  );
};

export {Reviews};
