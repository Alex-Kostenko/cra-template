import styled from '@emotion/styled';

const ButtonStyled = styled.button`
  color: white;
  background-color: orange;
  border-radius: 5px;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export {ButtonStyled};
