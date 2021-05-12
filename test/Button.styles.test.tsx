import React from 'react';
import StyledButton from '../src/Button/Button.styles';
import 'jest-styled-components';
import { render, screen } from '@testing-library/react';

describe('Default styled button', () => {
  it('renders without error', () => {
    render(<StyledButton>test</StyledButton>);
    expect(screen.getByRole('button', { name: /test/i })).toBeInTheDocument();
  });

  it('renders default styles', () => {
    render(<StyledButton>test</StyledButton>);
    const button = screen.getByRole('button', { name: /test/i });
    expect(button).toHaveStyleRule(
      'background-color',
      'var(--color-white)',
      {}
    );
    expect(button).toHaveStyleRule(
      'border',
      '1px solid var(--color-brand-primary)'
    );

    expect(button).toHaveStyleRule(
      'background-color',
      'var(--color-brand-secondary-hover)',
      { modifier: ':hover' }
    );
  });

  it('matches snapshot', () => {
    const { container } = render(<StyledButton>test</StyledButton>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
