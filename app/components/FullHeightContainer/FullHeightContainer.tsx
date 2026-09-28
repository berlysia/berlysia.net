import { clsx } from "clsx";
import type { JSX } from "hono/jsx/jsx-runtime";

export function FullHeightContainer(props: JSX.IntrinsicElements["div"]) {
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
