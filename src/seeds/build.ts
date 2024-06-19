import { writeFile } from "node:fs/promises";
import path from "node:path";
import { ensureDir } from "fs-extra";
import Parser from "rss-parser";
import * as feeds from "./feeds.js";
// eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error -- tsconfig間で結果が異なるため
// @ts-ignore -- import assertionがエディタ用には使えない設定だがスクリプト側には必須
import old_tech from "./old_tech.json" assert { type: "json" };

const SEEDS_DIR = path.resolve(process.cwd(), "src", "seeds");

const IGNORE_URLS = [
  "https://blog.berlysia.net/entry/sample",
  "https://blog.nnn.dev/entry/casual-mendan-info",
];

// eslint-disable-next-line unicorn/prefer-top-level-await -- CJSなので許せ（eslintrcをいじってもよさそうだが）
(async function main() {
  const parser = new Parser();
  const genresEntries = await Promise.all(
    Object.entries(feeds).map(async ([genre, list]) => {
      const listOfItems = await Promise.all(
        list.map(async (feed) => {
          const { items, ...feedRest } = await parser.parseURL(feed.feedUrl);
          const mappedItems = items.filter(
            (item) =>
              !IGNORE_URLS.includes(item.link ?? "") &&
              (feed.siteUrl === "https://blog.berlysia.net/"
                ? item.categories?.includes(genre)
                : true)
          );

          return {
            ...feedRest,
            items: mappedItems.map(
              ({ content, contentSnippet, pubDate, ...itemRest }) => ({
                ...itemRest,
                siteUrl: feed.siteUrl,
                siteTitle: feed.siteTitle,
                kind: "remote",
              })
            ),
          };
        })
      );
      return [genre, listOfItems];
    })
  );
  const genres = Object.fromEntries(genresEntries);
  genres.tech.push(old_tech);
  await ensureDir(path.resolve(SEEDS_DIR, ".tmp"));
  await writeFile(
    path.resolve(SEEDS_DIR, ".tmp", "remote.json"),
    JSON.stringify(genres, null, 2),
    "utf8"
  );

  console.log("remote articles are ready");
})();
