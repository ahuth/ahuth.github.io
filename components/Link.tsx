import clsx from "clsx";
import sample from "lodash/sample";
import type {ComponentProps} from "react";

const colors = [
  "text-orange-300",
  "text-lime-300",
  "text-teal-300",
  "text-cyan-300",
  "text-sky-300",
  "text-blue-300",
  "text-fuchsia-300",
  "text-indigo-300",
  "text-pink-300",
];

type Props = ComponentProps<"a">;

export default function Link({children, className, ...props}: Props) {
  return (
    <a className={clsx(sample(colors), "underline", className)} {...props}>
      {children}
    </a>
  );
}
