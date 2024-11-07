import {FC} from 'react';

import {InputStyled} from './style';

interface InputProps {
  value: string;
  placeholder: string;
  onChange: () => void;
}

const Input: FC<InputProps> = ({value, onChange, placeholder}) => {
  return <InputStyled value={value} onChange={onChange} placeholder={placeholder} />;
};

export {Input};
