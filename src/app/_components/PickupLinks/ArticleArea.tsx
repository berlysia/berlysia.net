import formatDate from "../../../lib/dateFormatter";
import type { Article } from "../../../seeds/reader";
import { ArticleLink } from "./ArticleLink/ArticleLink";

export const ArticleArea = ({
  articles,
  withHatenaBookmark,
}: {
  readonly articles: Article[];
  readonly withHatenaBookmark?: boolean;
}) => {
  return (
    <ul className="tw-p-0">
      {articles.map(({ link, title, pubDate, siteTitle, siteUrl }) => (
        <li key={link} className="tw-text-base tw-border-0 tw-my-2">
          <ArticleLink
            href={link}
            title={title}
            pubDateString={formatDate(pubDate)}
            withHatenaBookmark={withHatenaBookmark}
            target="_blank"
            site={
              siteTitle && siteUrl
                ? { title: siteTitle, url: siteUrl }
                : undefined
            }
          />
        </li>
      ))}
    </ul>
  );
};
