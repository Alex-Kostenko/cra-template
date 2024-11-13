import {ButtonHTMLAttributes, FC} from 'react';

import {ButtonStyled} from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: FC<ButtonProps> = ({text, ...props}) => {
  return (
    <ButtonStyled as='button' {...props}>
      {text}
    </ButtonStyled>
  );
};

export {Button};
