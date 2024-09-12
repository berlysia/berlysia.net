import type { Article } from "../../../seeds/reader";
import { getByGenre } from "../../../seeds/reader";
import { ArticleArea } from "./ArticleArea";
import { Talks } from "./Talks";

export function PickupLinks() {
  return (
    <PickupLinksInner
      techArticles={getByGenre("tech", 6)}
      imasArticles={getByGenre("imas", 6)}
    />
  );
}
function PickupLinksInner(props: {
  readonly techArticles: Article[];
  readonly imasArticles: Article[];
}) {
  return (
    <div className="tw-flex tw-flex-col tw-justify-center tw-w-full">
      <div className="tw-flex tw-flex-wrap md:tw-flex-row tw-flex-col">
        <div className="tw-w-full md:tw-w-1/2 tw-flex-shrink tw-flex-grow md:tw-p-6 tw-plb-6 tw-pli-0">
          <Talks withHatenaBookmark />
          <div className="tw-h-8"></div>
          <ArticleArea
            genreTitle="Tech Articles"
            articles={props.techArticles}
            withHatenaBookmark
          />
        </div>
        <div className="tw-w-full md:tw-w-1/2 tw-flex-shrink tw-flex-grow md:tw-p-6 tw-plb-6 tw-pli-0">
          <ArticleArea
            genreTitle="IM@S Articles"
            articles={props.imasArticles}
            withHatenaBookmark
          />
        </div>
      </div>
    </div>
  );
}
