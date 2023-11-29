import clsx from 'clsx';
import type { ComponentProps } from 'react';

type Props = ComponentProps<'a'>;

export default function Link({children, className, ...props}: Props) {
  return (
    <a
      className={clsx('text-cyan-300 underline', className)}
      {...props}
    >
        {children}
    </a>
  );
}
