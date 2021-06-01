import React, { FC, HTMLAttributes, ReactChild, useRef } from 'react';
import StyledButton from './Button.styles';
import { useButton } from '@react-aria/button';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
  variant?: VariantTypes;
  disabled?: boolean;
}

export enum VariantTypes {
  Primary = 'primary',
  Tertiary = 'tertiary',
  Positive = 'positive',
  Critical = 'critical',
}

export const ButtonStyledComponent: FC<Props> = (
  { variant, children, disabled },
  props
) => {
  let ref = useRef<any>();
  let { buttonProps } = useButton(props, ref);

  return (
    <StyledButton
      {...buttonProps}
      variant={variant}
      disabled={disabled}
      ref={ref}
    >
      {children || 'Styled component'}
    </StyledButton>
  );
};
