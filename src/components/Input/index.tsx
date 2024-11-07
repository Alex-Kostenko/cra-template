import React, {FC} from 'react';

import {InputStyled} from './style';

interface InputProps {
  value: string;
  placeholder: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({value, onChange, name, placeholder}) => {
  return <InputStyled name={name} value={value} onChange={onChange} placeholder={placeholder} />;
};

export {Input};
