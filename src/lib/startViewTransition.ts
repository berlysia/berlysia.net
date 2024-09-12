"use client";
export function startViewTransition(
  cb: () => void | Promise<void>,
  skip?: boolean
): ReturnType<Document["startViewTransition"]> {
  if (skip || !document.startViewTransition) {
    const done = Promise.resolve(cb());
    const ready = Promise.reject(
      new Error(skip ? "Transition skipped" : "Not implemented")
    );
    ready.catch(() => {
      /* suppress */
    });
    return {
      ready,
      finished: done,
      updateCallbackDone: done,
    };
  }
  return document.startViewTransition(cb);
}
