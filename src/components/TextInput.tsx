import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 h-12 rounded text-gray-400 bg-gray-800 focus-within:text-cyan-300 focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6">{children}</Slot>;
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
