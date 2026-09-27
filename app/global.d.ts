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
