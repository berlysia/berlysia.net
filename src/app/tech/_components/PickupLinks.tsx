import { getByGenre } from "../../../seeds/reader";
import { ArticleArea } from "../../_components/PickupLinks/ArticleArea";
import { Talks } from "../../_components/PickupLinks/Talks";

export function PickupLinks() {
  return (
    <div className="tw-flex tw-flex-col tw-justify-center tw-w-full tw-plb-6 tw-pli-0 tw-gap-8">
      <Talks withHatenaBookmark />
      <div>
        <h2 className="tw-text-2xl tw-font-bold tw-mb-2">Tech Articles</h2>
        <ArticleArea articles={getByGenre("tech", 6)} withHatenaBookmark />
      </div>
    </div>
  );
}
