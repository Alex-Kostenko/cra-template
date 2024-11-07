import React, {FC} from 'react';

import {TextAreaStyled} from './style';

interface TextAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  name: string;
}

const TextArea: FC<TextAreaProps> = ({value, onChange, placeholder, name}) => {
  return <TextAreaStyled value={value} name={name} onChange={onChange} placeholder={placeholder} />;
};

export {TextArea};
