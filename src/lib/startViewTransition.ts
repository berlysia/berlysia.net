"use client";
export function startViewTransition(
  cb: () => any,
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
      skipTransition() {
        /*noop*/
      },
      types: new Set(),
    };
  }
  return document.startViewTransition(cb);
}
