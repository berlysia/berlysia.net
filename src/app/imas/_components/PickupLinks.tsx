import { getByGenre } from "../../../seeds/reader";
import { ArticleArea } from "../../_components/PickupLinks/ArticleArea";

export function PickupLinks() {
  return (
    <div className="tw-flex tw-flex-col tw-justify-center tw-w-full tw-plb-6 tw-pli-0">
      <h2 className="tw-text-2xl tw-font-bold tw-mb-2">IM@S Articles</h2>
      <ArticleArea articles={getByGenre("imas", 6)} withHatenaBookmark />
    </div>
  );
}
