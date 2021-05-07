import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonStyledComponent, Props, VariantTypes } from './Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const PrimaryButton = Template.bind({});
export const SecondaryButton = Template.bind({});

PrimaryButton.args = { variant: VariantTypes.Primary };
SecondaryButton.args = { variant: VariantTypes.Secondary };

const TemplateSC: Story<Props> = args => <ButtonStyledComponent {...args} />;

export const PrimaryButtonStyledComponent = TemplateSC.bind({});
export const SecondaryButtonStyledComponent = TemplateSC.bind({});
export const TertiaryButtonStyledComponent = TemplateSC.bind({});

PrimaryButtonStyledComponent.args = { variant: VariantTypes.Primary };
SecondaryButtonStyledComponent.args = { variant: VariantTypes.Secondary };
TertiaryButtonStyledComponent.args = { variant: VariantTypes.Tertiary };
