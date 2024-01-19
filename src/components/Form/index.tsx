import React from 'react';
import { FormProps } from '../../../types/propTypes';
import { FormContainer, FormTitle } from './style';

const Form = ({ children }: FormProps) => {
  const teste: string = 'Login';
  return (
    <FormContainer>
      <FormTitle>{teste}</FormTitle>
      {children}
    </FormContainer>
  );
};

export default Form;
