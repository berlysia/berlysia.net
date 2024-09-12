"use client";
export function PromiseWithResolvers<T>() {
  if (Promise.withResolvers) return Promise.withResolvers<T>();
  // eslint-disable-next-line @typescript-eslint/init-declarations -- this is polyfill
  let resolve: (value: T) => void;
  // eslint-disable-next-line @typescript-eslint/init-declarations -- this is polyfill
  let reject: (reason?: any) => void;
  // eslint-disable-next-line promise/avoid-new -- this is polyfill
  const promise = new Promise<T>((res, rej) => {
    resolve = res;
    reject = rej;
  });

  return {
    // @ts-expect-error
    resolve,
    // @ts-expect-error
    reject,
    promise,
  };
}
