import { createRoute } from "honox/factory";
import { Articles } from "../../components/Articles/Articles";
import Card from "../../components/Card";

import { Talks } from "../../components/Talks/Talks";
import articles from "../../seeds/data/tech_articles_pinned";
import { pinnedTalks } from "../../seeds/data/tech_talks";

function Index() {
  return (
    <div className="tw-max-w-4xl tw-flex tw-flex-row tw-justify-center tw-items-stretch tw-mli-auto tw-mlb-4">
      <Card>
        <div className="tw-pli-4">
          <div className="tw-flex tw-flex-col tw-justify-center tw-w-full tw-plb-6 tw-pli-0 tw-gap-8">
            <div>
              <h2 className="tw-text-2xl tw-font-bold tw-mb-2">
                Tech Talks Pickup
              </h2>
              <div>
                <a href="/tech/talks">発表一覧を見る</a>
              </div>
              <Talks talks={pinnedTalks} withHatenaBookmark />
            </div>
            <div>
              <h2 className="tw-text-2xl tw-font-bold tw-mb-2">
                Tech Articles Pickup
              </h2>
              <div>
                <a href="https://blog.berlysia.net/category/tech">
                  記事一覧を見る
                </a>
              </div>
              <Articles articles={articles} withHatenaBookmark />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default createRoute((c) => c.render(<Index />));
