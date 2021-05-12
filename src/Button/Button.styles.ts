import styled, { css } from 'styled-components';

const buttonCss = css`
  background-color: var(--color-white);
  border: 1px solid var(--color-brand-primary);
  color: var(--color-brand-primary);
  align-items: center;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  margin: 0;
  outline: none;
  padding: 0.75rem;
  &:hover {
    background-color: var(--color-brand-secondary-hover);
    cursor: pointer;
  }
  &:active {
    background-color: var(--color-brand-secondary-pressed);
  }
`;

const primaryCss = css`
  color: var(--color-white);
  background-color: var(--color-brand-primary);
  &:hover {
    background-color: var(--color-brand-primary-hover);
  }
  &:active {
    background-color: var(--color-brand-primary-pressed);
    border-color: var(--color-brand-primary);
  }
`;

const tertiaryCss = css`
  background-color: transparent;
  border: none;
  box-shadow: none;
  &:hover {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  }
  &:active {
    border: none;
  }
`;

const disabledCss = css`
  color: var(--color-text-disabled);
  background-color: var(--color-warm-gray);
  border-color: var(--color-border-disabled);
`;

export const StyledButton = styled.button<StyledButtonProps>`
  ${buttonCss};
  ${({ variant }) => variant === 'primary' && primaryCss};
  ${({ variant }) => variant === 'tertiary' && tertiaryCss};
  ${({ disabled }) => disabled && disabledCss};
`;

export type StyledButtonProps = {
  variant?: string;
  disabled?: boolean;
};

export default StyledButton;
