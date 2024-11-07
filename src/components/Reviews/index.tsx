import {FC} from 'react';
import {AddComment} from '@ui';
import {ReviewsStyled, HeaderStyled} from './style';

interface InputProps {}

const Reviews: FC<InputProps> = () => {
  return (
    <ReviewsStyled>
       <HeaderStyled>Reviews</HeaderStyled>
      <AddComment onSave={() => {}} />
    </ReviewsStyled>
  );
};

export {Reviews};
