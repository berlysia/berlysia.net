import { Articles } from "../../components/Articles/Articles";
import Card from "../../components/Card";
import Link from "../../components/LinkWithTransition";
import { Talks } from "../../components/Talks/Talks";
import articles from "../../seeds/data/tech_articles_pinned";
import { pinnedTalks } from "../../seeds/data/tech_talks";

export default function Index() {
  return (
    <div className="tw-max-w-4xl tw-flex tw-flex-row tw-justify-center tw-items-stretch tw-mli-auto tw-mlb-12">
      <Card className="tw-flex-1">
        <div className="tw-pli-4">
          <div className="tw-flex tw-flex-col tw-justify-center tw-w-full tw-plb-6 tw-pli-0 tw-gap-8">
            <div>
              <h2 className="tw-text-2xl tw-font-bold tw-mb-2">
                Tech Talks Pickup
              </h2>
              <div>
                <Link href="/tech/talks">発表一覧を見る</Link>
              </div>
              <Talks talks={pinnedTalks} withHatenaBookmark />
            </div>
            <div>
              <h2 className="tw-text-2xl tw-font-bold tw-mb-2">
                Tech Articles Pickup
              </h2>
              <div>
                <Link href="https://blog.berlysia.net/category/tech">
                  記事一覧を見る
                </Link>
              </div>
              <Articles articles={articles} withHatenaBookmark />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
