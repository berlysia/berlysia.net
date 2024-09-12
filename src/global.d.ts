interface ViewTransition {
  finished: Promise<void>;
  ready: Promise<void>;
  updateCallbackDone: Promise<void>;
}

interface Document {
  startViewTransition(
    updateCallback: () => Promise<void> | void
  ): ViewTransition;
}

declare module "*.css" {
  const styles: { [key: string]: string };
  export default styles;
}
