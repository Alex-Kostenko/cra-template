import styled from '@emotion/styled';

const Comment = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Avatar = styled.img`
  width: 100%;
  height: auto;
  max-width: 200px;
  object-fit: cover;
`;

const Name = styled.h3`
  color: black;
`;

const Text = styled.p`
  color: black;
`;

export {Avatar, Comment, Name, Text, Wrap};
