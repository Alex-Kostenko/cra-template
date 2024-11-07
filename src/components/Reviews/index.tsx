import {AddComment, Comment, CommentState} from '@ui';
import {FC} from 'react';
import useLocalStorage from 'use-local-storage';

import {generateRandomId} from '@/utils';

import {CommentsContainerStyled, HeaderStyled, NoReviewsStyled, ReviewsStyled} from './style';

const imageGen = require('@dudadev/random-img');

interface Comment {
  id: string;
  text: string;
  avatarSrc: string;
  name: string;
}

const Reviews: FC = () => {
  const [comments, setComments] = useLocalStorage<Comment[]>('comments', []);

  const onAddComment = async (commentData: CommentState) => {
    const url = await imageGen();

    const commentToAdd = {
      id: generateRandomId(),
      avatarSrc: url,
      ...commentData,
    };

    setComments([...comments, commentToAdd]);
  };

  const onDeleteComment = (id: string) => {
    const newComments = comments.filter(comment => comment.id !== id);
    setComments(newComments);
  };

  return (
    <ReviewsStyled>
      <HeaderStyled>Reviews</HeaderStyled>
      <CommentsContainerStyled>
        {!comments.length && <NoReviewsStyled>No Reviews</NoReviewsStyled>}
        {!!comments.length && comments.map(comment => <Comment key={comment.id} {...comment} onDelete={onDeleteComment} onEdit={() => {}} />)}
      </CommentsContainerStyled>
      <AddComment onSave={onAddComment} />
    </ReviewsStyled>
  );
};

export {Reviews};
