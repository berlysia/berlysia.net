import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

export function FullHeightContainer(props: HTMLAttributes<HTMLDivElement>) {
  const { children, className = "", ...rest } = props;
  return (
    <div
      {...rest}
      className={clsx(
        "tw-flex tw-place-items-center tw-min-h-screen tw-min-h-[100svh]",
        className
      )}
    >
      {children}
    </div>
  );
}
