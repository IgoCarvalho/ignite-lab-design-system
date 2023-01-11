import type { Meta, StoryObj } from '@storybook/react';

import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
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
} as Meta<HeadingProps>;

type HeadingStory = StoryObj<HeadingProps>;

export const Default: HeadingStory = {};

export const Small: HeadingStory = {
  args: {
    size: 'sm',
  },
};

export const Large: HeadingStory = {
  args: {
    size: 'lg',
  },
};

export const CustomComponent: HeadingStory = {
  args: {
    asChild: true,
    children: <h1>Text with &lt;h1&gt; tag</h1>,
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
