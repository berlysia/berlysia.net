"use client";

import { useTransition, useEffect, useLayoutEffect, useRef } from "react";
import { useRouter as useNextRouter, usePathname } from "next/navigation";
import { startViewTransition } from "./startViewTransition";
import { PromiseWithResolvers } from "./PromiseWithResolvers";

export default function useViewTransitionRouter(): ReturnType<
  typeof useNextRouter
> {
  const router = useNextRouter();
  const pathname = usePathname();

  const promiseCallbacks = useRef<Record<
    "resolve" | "reject",
    (value: unknown) => unknown
  > | null>(null);

  useLayoutEffect(() => {
    return () => {
      if (promiseCallbacks.current) {
        promiseCallbacks.current.resolve(undefined);
        promiseCallbacks.current = null;
      }
    };
  }, [pathname]);

  return {
    ...router,
    back: () => {
      startViewTransition(() => router.back());
    },
    forward: () => {
      startViewTransition(() => router.forward());
    },
    push: (...args: Parameters<typeof router.push>) => {
      startViewTransition(() => {
        const url = args[0] as string;
        if (url === pathname) {
          router.push(...args);
          return Promise.resolve();
        }
        const deferred = PromiseWithResolvers();
        promiseCallbacks.current = deferred;
        router.push(...args);
        return deferred.promise as Promise<void>;
      });
    },
    replace: (...args: Parameters<typeof router.replace>) => {
      startViewTransition(() => router.replace(...args));
    },
  };
}
