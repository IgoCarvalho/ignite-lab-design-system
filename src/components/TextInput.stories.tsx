import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Envelope } from 'phosphor-react';

import { TextInput } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
} as ComponentMeta<typeof TextInput.Root>;

type TextInputStory = ComponentStory<typeof TextInput.Root>;

export const Default: TextInputStory = () => (
  <TextInput.Root>
    <TextInput.Input type="email" placeholder="Type your e-mail address" />
  </TextInput.Root>
);

export const LeftIcon: TextInputStory = () => (
  <TextInput.Root>
    <TextInput.Icon>
      <Envelope />
    </TextInput.Icon>
    <TextInput.Input type="email" placeholder="Type your e-mail address" />
  </TextInput.Root>
);

export const RightIcon: TextInputStory = () => (
  <TextInput.Root>
    <TextInput.Input type="email" placeholder="Type your e-mail address" />
    <TextInput.Icon>
      <Envelope />
    </TextInput.Icon>
  </TextInput.Root>
);
