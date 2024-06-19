import { z } from "zod";
import seedJson from "./.tmp/remote.json";
import stubJson from "./stub.json";

const seed = process.env.NODE_ENV === "test" ? stubJson : seedJson;

const ArticleSchema = z.object({
  kind: z.literal("remote"),
  title: z.string(),
  link: z.string(),
  pubDate: z.number(),
  author: z.string(),
  siteTitle: z.string().optional(),
  siteUrl: z.string().optional(),
});

export type Article = z.infer<typeof ArticleSchema>;

function ensureProperties(item: any): any {
  const result = { ...item };
  if (!("author" in item) && "creator" in item) {
    result.author = item.creator;
  }
  if (!result.author) {
    result.author = "berlysia";
  }
  if (!("pubDate" in item) && "isoDate" in item) {
    result.pubDate = item.isoDate;
  }

  return result;
}

function populatePubDate<T extends { pubDate: string }>(
  item: T
): Omit<T, "pubDate"> & { pubDate: number } {
  const date = new Date(item.pubDate);
  return {
    ...item,
    pubDate: date.getTime(),
  };
}

function injectKind<T>(item: T): T & { kind: "remote" } {
  return {
    ...item,
    kind: "remote",
  };
}

export function getByGenre(genre: "imas" | "tech", count: number): Article[] {
  const sites: Array<{ items: any[] }> = seed[genre];
  return sites
    .flatMap((site: any) => site.items)
    .map((element) => injectKind(populatePubDate(ensureProperties(element))))
    .filter((element): element is Article => {
      const result = ArticleSchema.safeParse(element);
      if (result.success) {
        return true;
      }
      console.error(result.error.errors);
      return false;
    })
    .sort((a, b) => b.pubDate - a.pubDate)
    .slice(0, count);
}
