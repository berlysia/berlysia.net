"use client";

import type { UrlObject } from "node:url";
import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";
import useViewTransitionRouter from "../lib/useViewTransitionRouter";

function Link<T>({
  ...props
}: Omit<NextLinkProps<T>, "href"> & {
  readonly href: Exclude<NextLinkProps<T>["href"], UrlObject>;
}) {
  const router = useViewTransitionRouter();

  const handleLinkClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    router.push(props.href);
  };

  return <NextLink {...props} onClick={handleLinkClick} />;
}

export default Link;
