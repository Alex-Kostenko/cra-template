import {FC} from 'react';

import {ButtonStyled} from './style';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({text, onClick}) => {
  return <ButtonStyled onClick={onClick}> {text} </ButtonStyled>;
};

export {Button};
