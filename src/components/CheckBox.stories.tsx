import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { CheckBox } from './CheckBox';
import { Text } from './Text';

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

type CheckBoxStory = ComponentStory<typeof CheckBox>;

export const Default: CheckBoxStory = () => (
  <div className="flex items-center gap-2">
    <CheckBox id="checkbox" />
    <Text size="sm" asChild>
      <label htmlFor="checkbox">Lembrar de mim por 30 dias</label>
    </Text>
  </div>
);
