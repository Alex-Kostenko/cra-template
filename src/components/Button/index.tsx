import {FC} from 'react';

import {ButtonStyled} from './style';

interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({text}) => {
  return <ButtonStyled> {text} </ButtonStyled>;
};

export {Button};
