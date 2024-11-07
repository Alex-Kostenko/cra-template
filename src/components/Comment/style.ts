import styled from '@emotion/styled';

const Comment = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  &:hover svg {
    display: block;
  }
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

const ActionsWrap = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
  right: 30px;
  gap: 25px;

  & svg {
    cursor: pointer;
    height: 25px;
    display: none;
  }
`;

const EditContainer = styled.div`
  flex-grow: 1;
`;

export {ActionsWrap, Avatar, Comment, EditContainer, Name, Text, Wrap};
