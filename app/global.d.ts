// Importing "hono" makes the block below an augmentation of it rather than a
// new ambient module declaration.
// oxlint-disable-next-line import/no-empty-named-blocks, unicorn/require-module-specifiers -- intentional side-effect-free type import
import type {} from "hono";

type Head = {
  title?: string;
  /** Set for pages that must stay out of search results (e.g. redirect stubs). */
  noindex?: boolean;
};

declare module "hono" {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      head?: Head
    ): Response | Promise<Response>;
  }
}
