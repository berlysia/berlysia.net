"use client";

import type React from "react";
import { useEffect, useLayoutEffect, useRef, useTransition } from "react";
import { startViewTransition } from "../lib/startViewTransition";
import { PromiseWithResolvers } from "../lib/PromiseWithResolvers";

const TransitionProvder = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, startTransition] = useTransition();

  const promiseCallbacks = useRef<Record<
    "resolve" | "reject",
    (value: unknown) => unknown
  > | null>(null);

  useEffect(() => {
    // window.addEventListener("popstate", (e) => {
    //   console.log("popstate", e);
    //   startViewTransition(() => {
    //     console.log("startViewTransition - popstate");
    //     const deferred = PromiseWithResolvers();
    //     promiseCallbacks.current = deferred;
    //     return deferred.promise as Promise<void>;
    //   });
    //   startTransition(() => {});
    // });
  }, []);

  useLayoutEffect(() => {
    return () => {
      // if (promiseCallbacks.current) {
      //   console.log("resolve on layout effect cleanup function");
      //   promiseCallbacks.current.resolve(undefined);
      //   promiseCallbacks.current = null;
      // }
    };
  });

  return children;
};

export default TransitionProvder;
