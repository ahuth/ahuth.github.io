import clsx from "clsx";
import type {ComponentProps} from "react";

const colors = [
  "text-cyan-300",
  "text-sky-300",
  "text-blue-300",
  "text-indigo-300",
  "text-violet-300",
  "text-purple-300",
  "text-fuchsia-300",
  "text-pink-300",
  "text-rose-300",
  "text-red-300",
  "text-orange-300",
  "text-amber-300",
  "text-yellow-300",
  "text-lime-300",
  "text-green-300",
  "text-emerald-300",
  "text-teal-300",
  // "text-cyan-400",
  // "text-sky-400",
  // "text-blue-400",
  // "text-indigo-400",
  // "text-violet-400",
  // "text-purple-400",
  // "text-fuchsia-400",
  // "text-pink-400",
  // "text-rose-400",
  // "text-red-400",
  // "text-orange-400",
  // "text-amber-400",
  // "text-yellow-400",
  // "text-lime-400",
  // "text-green-400",
  // "text-emerald-400",
  // "text-teal-400",
];

let colorIndex = 0;

type Props = ComponentProps<"a">;

export default function Link({children, className, ...props}: Props) {
  // Increment the color index so each link gets a different (but non-random) color.
  colorIndex += 1;

  return (
    <a
      className={clsx(
        colors[colorIndex % colors.length],
        "underline",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
