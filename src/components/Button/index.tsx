import {FC} from 'react';

import {ButtonStyled} from './style';

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

const Button: FC<ButtonProps> = ({text, onClick, disabled}) => {
  return <ButtonStyled onClick={onClick} disabled={disabled}>{text}</ButtonStyled>;
};

export {Button};
