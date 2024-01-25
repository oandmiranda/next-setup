import { StyledIcon } from './style';
import { IconProps } from '@src/types/interfaces';

export default function Icon({ name, size, fill }: IconProps) {
  return (
    <StyledIcon fill={fill} size={size}>
      {name}
    </StyledIcon>
  );
}
