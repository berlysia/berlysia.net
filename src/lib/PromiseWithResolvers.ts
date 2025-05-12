"use client";
export function PromiseWithResolversPonyfill<T>(): PromiseWithResolvers<T> {
  if (Promise.withResolvers) return Promise.withResolvers<T>();
  // eslint-disable-next-line @typescript-eslint/init-declarations -- this is polyfill
  let resolve: (value: T | PromiseLike<T>) => void;
  // eslint-disable-next-line @typescript-eslint/init-declarations -- this is polyfill
  let reject: (reason?: any) => void;
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return {
    // @ts-expect-error -- this is polyfill
    resolve,
    // @ts-expect-error -- this is polyfill
    reject,
    promise,
  };
}
