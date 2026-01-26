import type { Metadata } from "next";
import Card from "../../../components/Card";
import { GenreSwitcher } from "../../../components/GenreSwitcher";
import Link from "../../../components/LinkWithTransition";

export const metadata: Metadata = {
  title: "React Tokyo Fes 2026 | berlysia.net",
  description: "React Tokyo Fes 2026 での発表資料および関連情報",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ReactTokyoFes2026() {
  return (
    <div className="tw-max-w-4xl tw-flex tw-flex-col tw-justify-center tw-items-stretch tw-mli-auto tw-mlb-4">
      <GenreSwitcher />
      <Card>
        <div className="tw-pli-4">
          <div className="tw-flex tw-flex-col tw-justify-center tw-w-full tw-plb-6 tw-pli-0 tw-gap-6">
            <div>
              <h1 className="tw-text-3xl tw-font-bold tw-mb-4">
                React Tokyo フェス 2026
              </h1>
              <p className="tw-text-lg tw-mb-2">
                React Tokyo フェス 2026
                での発表ポスターからリンクするページです。
              </p>
            </div>

            <div>
              <h2 className="tw-text-2xl tw-font-bold tw-mb-2">関連リンク</h2>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <dl>
                  <dt>
                    <a
                      href="https://developer.mozilla.org/ja/docs/Web/CSS/Guides/Logical_properties_and_values"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CSS 論理的プロパティと値 - CSS | MDN
                    </a>
                  </dt>
                  <dd className="tw-ml-4">
                    MDN の論理的プロパティと値に関するガイド
                  </dd>
                </dl>
              </div>
            </div>

            <hr className="tw-my-4" />

            <div>
              <div className="tw-flex tw-flex-col tw-gap-2">
                <div>
                  <Link href="/tech/talks">他の発表一覧を見る</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
