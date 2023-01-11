import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({
  asChild,
  children,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'px-4 py-3 w-full bg-cyan-500 hover:bg-cyan-300 rounded font-semibold text-black text-sm transition-colors focus:ring ring-white',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
