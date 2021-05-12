import React, { FC, HTMLAttributes, ReactChild, useRef } from 'react';
import './Button.module.css';
import StyledButton from './Button.styles';
import { useButton } from '@react-aria/button';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
  variant?: VariantTypes;
  disabled?: boolean;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
export const Button: FC<Props> = ({ children, variant }, props) => {
  let ref = useRef<any>();
  let { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} className={`button ${variant}`}>
      {children || `CSS module`}
    </button>
  );
};

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
