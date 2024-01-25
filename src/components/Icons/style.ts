import styled from 'styled-components';
import { IconProps } from '@src/types/interfaces';

export const StyledIcon = styled.div<IconProps>`
  display: inline-block;
  width: ${(props) => props.size || '30px'};
  height: ${(props) => props.size || '30px'};
`;
