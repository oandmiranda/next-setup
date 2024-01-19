import React from 'react';
import { ButtonProps } from '../../../types/propTypes';
import { Container } from './style';

const Button = ({ title, type, onClick }: ButtonProps) => {
  return (
    <Container type={type} onClick={onClick}>
      {title}
    </Container>
  );
};

export default Button;
