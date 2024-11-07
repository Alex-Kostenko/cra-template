import styled from '@emotion/styled';

const ReviewsStyled = styled.div`
  background-color: black;
  padding: 25px 50px;

  & > *:last-child {
      margin-top: 25px;
  }
`;

const HeaderStyled = styled.h1`
  text-align: center;
`;

const CommentsContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const NoReviewsStyled = styled.h2`
  color: white;
`;

export {HeaderStyled,ReviewsStyled,CommentsContainerStyled, NoReviewsStyled};
