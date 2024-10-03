"use client";

import { useTransition, useEffect, useLayoutEffect, useRef } from "react";
import { useRouter as useNextRouter, usePathname } from "next/navigation";
import { startViewTransition } from "./startViewTransition";
import { PromiseWithResolversPonyfill } from "./PromiseWithResolvers";

export default function useViewTransitionRouter(): ReturnType<
  typeof useNextRouter
> {
  const router = useNextRouter();
  const pathname = usePathname();

  const promiseCallbacks = useRef<Record<
    "resolve" | "reject",
    (value: any) => void
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
        const deferred = PromiseWithResolversPonyfill();
        promiseCallbacks.current = deferred;
        router.push(...args);
        return deferred.promise;
      });
    },
    replace: (...args: Parameters<typeof router.replace>) => {
      startViewTransition(() => router.replace(...args));
    },
  };
}
