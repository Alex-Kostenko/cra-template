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

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export {HeaderStyled,ReviewsStyled,CommentsContainer};
