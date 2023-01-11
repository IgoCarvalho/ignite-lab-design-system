import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ asChild, children }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'px-4 py-3 w-full bg-cyan-500 hover:bg-cyan-300 rounded font-semibold text-black text-sm transition-colors focus:ring ring-white'
      )}
    >
      {children}
    </Comp>
  );
}
