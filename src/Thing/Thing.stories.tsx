import React from 'react';
import { Meta, Story } from '@storybook/react';
import Thing, { Props } from './';

const meta: Meta = {
  title: 'Example',
  component: Thing,
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

const Template: Story<Props> = args => <Thing {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ThingStory = Template.bind({});

ThingStory.args = {};