import {FC} from 'react';

import {HeaderStyled, ReviewsStyled} from './style';
import {AddComment, Comment} from '@ui';

const commentsMOCK = [
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
  return (
    <ReviewsStyled>
      <HeaderStyled>Reviews</HeaderStyled>
      {commentsMOCK.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
      <AddComment onSave={() => {}} />
    </ReviewsStyled>
  );
};

export {Reviews};
