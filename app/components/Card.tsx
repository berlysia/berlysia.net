import clsx from "clsx";
import type { Child } from "hono/jsx";

export default function Card(props: {
  readonly children: Child;
  readonly className?: string;
}) {
  return (
    <div
      className={clsx(
        "tw-rounded-xl tw-p-2 tw-mlb-1 tw-bg-white tw-drop-shadow-md tw-flex-1 tw-max-w-full",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
