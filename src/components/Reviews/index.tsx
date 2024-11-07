import {AddComment, Comment, CommentState} from '@ui';
import {FC, useState} from 'react';
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
  const [idToEdit, setIdToEdit] = useState<string>('');

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

  const onSelectCommentToEdit = (id: string) => {
    setIdToEdit(id);
  };

  const onSaveEdit = (id: string, update: CommentState) => {
    const newComments = comments.map(comment => (comment.id === id ? {...comment, ...update} : comment));
    setIdToEdit('');
    setComments(newComments);
  };

  return (
    <ReviewsStyled>
      <HeaderStyled>Reviews</HeaderStyled>
      <CommentsContainerStyled>
        {!comments.length && <NoReviewsStyled>No Reviews</NoReviewsStyled>}
        {!!comments.length &&
          comments.map(comment => (
            <Comment key={comment.id} {...comment} onDelete={onDeleteComment} onSelectToEdit={onSelectCommentToEdit} onSaveEdit={onSaveEdit} idToEdit={idToEdit} />
          ))}
      </CommentsContainerStyled>
      <AddComment onSave={onAddComment} />
    </ReviewsStyled>
  );
};

export {Reviews};
