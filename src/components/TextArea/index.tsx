import {FC, TextareaHTMLAttributes} from 'react';

import {TextAreaStyled} from './style';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
}

const TextArea: FC<TextareaProps> = ({placeholder = 'Type something ', ...props}) => {
  return <TextAreaStyled {...props} placeholder={placeholder} />;
};

export {TextArea};
