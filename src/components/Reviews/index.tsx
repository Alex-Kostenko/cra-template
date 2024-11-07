import {AddComment, Comment, CommentState} from '@ui';
import {FC, useState} from 'react';

// import useLocalStorage from 'use-local-storage';
import {CommentsContainerStyled, HeaderStyled, NoReviewsStyled, ReviewsStyled} from './style';

const imageGen = require('@dudadev/random-img');

function generateRandomId() {
  return 'id-' + Math.random().toString(36).substr(2, 9);
}

interface Comment {
  id: string;
  text: string;
  avatarSrc: string;
  name: string;
}

const Reviews: FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  const onAddComment = async (commentData: CommentState) => {
    const url = await imageGen();

    const commentToAdd = {
      id: generateRandomId(),
      avatarSrc: url,
      ...commentData,
    };

    setComments([...comments, commentToAdd]);
  };

  return (
    <ReviewsStyled>
      <HeaderStyled>Reviews</HeaderStyled>
      <CommentsContainerStyled>
        {!comments.length && <NoReviewsStyled>No Reviews</NoReviewsStyled>}
        {!!comments.length && comments.map(comment => <Comment key={comment.id} {...comment} onDelete={() => {}} onEdit={() => {}} />)}
      </CommentsContainerStyled>
      <AddComment onSave={onAddComment} />
    </ReviewsStyled>
  );
};

export {Reviews};
