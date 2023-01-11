import * as CheckBoxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export function CheckBox(props: CheckBoxPrimitive.CheckboxProps) {
  return (
    <CheckBoxPrimitive.Root
      className="w-6 h-6 p-0.5 bg-gray-800 rounded"
      {...props}
    >
      <CheckBoxPrimitive.Indicator asChild>
        <Check weight="bold" className="w-5 h-5 text-cyan-500" />
      </CheckBoxPrimitive.Indicator>
    </CheckBoxPrimitive.Root>
  );
}
