import React from 'react';
import { InputFieldProps } from '../../../types/propTypes';
import { Container, Input, Label } from './style';

const InputField = ({ label, type }: InputFieldProps) => {
  return (
    <Container>
      <Input type={type} placeholder=" " />
      <Label> {label} </Label>
    </Container>
  );
};

export default InputField;
