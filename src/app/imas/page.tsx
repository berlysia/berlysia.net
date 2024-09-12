import articles from "../../seeds/data/imas_articles_pinned";
import { Articles } from "../../components/Articles/Articles";
import Card from "../../components/Card";
import Link from "../../components/LinkWithTransition";
import { PublicationLink } from "../../components/PublicationLink";

const publications = [
  {
    title: "［見果てぬ夢］を受容する",
    description:
      "2018年8月14日、喜多日菜子のCV初披露となった［見果てぬ夢］は、CV披露の喜びとは裏腹に、テキストの内容によって当時の日菜子Pたちに大きな衝撃を与えました。モバマス世界の喜多日菜子の描かれ方に照らしながら、喜多日菜子史上有数の大きな転換点に迫ります。全4ページ。",
    href: undefined,
    storeLinks: [],
    pubDateString: "2024-08-12",
    eventName: "コミックマーケット104",
    contribution: {
      title: "喜多日菜子合同誌2024",
      author: "ニナモ電器",
      href: "https://x.com/ninamoP/status/1826741494809870581",
    },
  },
];

export default function Index() {
  return (
    <div className="tw-max-w-4xl tw-flex tw-flex-row tw-justify-center tw-items-stretch tw-mli-auto tw-mlb-12">
      <Card className="tw-flex-1">
        <div className="tw-pli-4">
          <div className="tw-flex tw-flex-col tw-justify-center tw-w-full tw-plb-6 tw-pli-0 tw-gap-8">
            <div>
              <h2 className="tw-text-2xl tw-font-bold tw-mb-2">
                IM@S Publications
              </h2>
              {/* https://www.melonbooks.co.jp/detail/detail.php?product_id=2517519 */}
              <ul className="tw-p-0">
                {publications.map((pub) => (
                  <li
                    key={pub.title}
                    className="tw-text-base tw-border-0 tw-my-2"
                  >
                    <PublicationLink {...pub} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="tw-text-2xl tw-font-bold tw-mb-2">
                IM@S Articles Pickup
              </h2>
              <div>
                <Link href="https://blog.berlysia.net/category/imas">
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
