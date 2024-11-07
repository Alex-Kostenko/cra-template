import {FC} from 'react';

import {TextAreaStyled} from './style';

interface TextAreaProps {
  value: string;
  onChange: () => void;
  placeholder: string;
}

const TextArea: FC<TextAreaProps> = ({value, onChange, placeholder}) => {
  return <TextAreaStyled value={value} onChange={onChange} placeholder={placeholder} />;
};

export {TextArea};