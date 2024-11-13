import styled from '@emotion/styled';

const Card = styled.div`
  display: flex;
  border-radius: 15px;
  background-color: white;
  padding: 25px;
  flex-direction: column;
  gap: 10px;
`;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Info = styled.fieldset`
  display: flex;
  border-radius: 25px;
  border: 1px solid black;
  padding: 15px 25px 25px;
  color: black;
  margin: 0;
  gap: 10px;
  flex-direction: column;
`;

const Legend = styled.legend``;

const Text = styled.div`
  color: black;
  font-size: 16px;
`;

const Comment = styled.fieldset`
  color: black;
  font-size: 16px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 15px;
`;

export {Card, CardWrap, Comment, Info, Legend, Text};
