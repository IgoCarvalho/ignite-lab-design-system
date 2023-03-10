import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Hello World!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>;

type TextStory = StoryObj<TextProps>;

export const Default: TextStory = {};

export const Small: TextStory = {
  args: {
    size: 'sm',
  },
};

export const Large: TextStory = {
  args: {
    size: 'lg',
  },
};

export const CustomComponent: TextStory = {
  args: {
    asChild: true,
    children: <p>Text with &lt;p&gt; tag</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
