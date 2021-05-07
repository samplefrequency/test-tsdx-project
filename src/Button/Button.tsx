import React, { FC, HTMLAttributes, ReactChild, useRef } from 'react';
import './Button.module.css';
import styled, { css } from 'styled-components';
import { useButton } from '@react-aria/button';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
  variant?: VariantTypes;
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

const buttonCss = css`
  align-items: center;
  padding: 0.75rem;
  margin: 0;
  border-radius: 0.375rem;
  outline: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  :hover {
    cursor: pointer;
  }
`;

const primaryCss = css`
  color: var(--color-white);
  background-color: var(--color-brand-primary);
  border: 1px solid var(--color-brand-primary);
  :hover {
    background-color: var(--color-brand-primary-hover);
  }
  :active {
    background-color: var(--color-brand-primary-pressed);
    border: 1px solid var(--color-brand-primary);
  }
`;

const secondaryCss = css`
  ${primaryCss};
  color: var(--color-brand-primary);
  background-color: var(--color-white);
  :hover {
    background-color: var(--color-brand-secondary-hover);
  }
  :active {
    background-color: var(--color-brand-secondary-pressed);
  }
`;

const tertiaryCss = css`
  ${buttonCss};
  color: var(--color-brand-primary);
  background-color: transparent;
  border: none;
  box-shadow: none;
  :hover {
    background-color: var(--color-brand-secondary-hover);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  :active {
    border: none;
    background-color: var(--color-brand-secondary-pressed);
  }
`;

export enum VariantTypes {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

type StyledButtonProps = {
  variant?: VariantTypes;
  children?: ReactChild;
};

const StyledButton = styled.button<{ variant: string; props: any }>`
  ${buttonCss};
  ${({ variant }) => variant === 'primary' && primaryCss};
  ${({ variant }) => variant === 'secondary' && secondaryCss};
  ${({ variant }) => variant === 'tertiary' && tertiaryCss};
`;

export const ButtonStyledComponent: FC<StyledButtonProps> = props => {
  let ref = useRef<any>();
  let { buttonProps } = useButton(props, ref);

  return (
    <StyledButton {...buttonProps} variant={props.variant} ref={ref}>
      {props.children || 'Styled component'}
    </StyledButton>
  );
};
