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
export const DefaultButton = Template.bind({});
export const PrimaryButton = Template.bind({});

DefaultButton.args = {};
PrimaryButton.args = { variant: VariantTypes.Primary };

const TemplateSC: Story<Props> = args => <ButtonStyledComponent {...args} />;

export const DefaultButtonStyledComponent = TemplateSC.bind({});
export const PrimaryButtonStyledComponent = TemplateSC.bind({});
export const TertiaryButtonStyledComponent = TemplateSC.bind({});
export const DisabledDefaultButtonStyledComponent = TemplateSC.bind({});

DefaultButtonStyledComponent.args = {};
PrimaryButtonStyledComponent.args = { variant: VariantTypes.Primary };
TertiaryButtonStyledComponent.args = { variant: VariantTypes.Tertiary };
DisabledDefaultButtonStyledComponent.args = {
  disabled: true,
};
