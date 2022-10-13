import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { clsx } from 'clsx';
import { Check } from 'phosphor-react';

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

function Checkbox(props: CheckboxProps) {

  return (
    <CheckboxPrimitive.Root
      className="h-6 w-6 bg-gray-800 p-[2px] rounded"
      {...props}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' className="h-5 w-5 text-cyan-500" />
      </CheckboxPrimitive.Indicator>

    </CheckboxPrimitive.Root>

  );
}

export { Checkbox };