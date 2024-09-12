import Card from "../../../components/Card";
import Link from "../../../components/LinkWithTransition";
import { LinkMarbles } from "./LinkMarbles";
import styles from "./style.module.css";

export const Profile = (props: {
  readonly descriptionFor?: "imas" | "tech";
}) => (
  <div className="tw-flex-1">
    <Card className={styles.root}>
      <div className="tw-flex tw-p-4 tw-flex-wrap">
        <div className="tw-flex-shrink-0 tw-flex tw-place-items-start tw-p-1">
          {/* // eslint-disable-next-line @next/next/no-img-element -- unopt */}
          <img
            src="/avatar-128.webp"
            alt="avatar"
            width={128}
            height={128}
            srcSet="avatar-384.webp 2x, avatar-640.webp 3x"
            decoding="async"
            className="tw-rounded-full tw-border-4 tw-border-keyColor-100"
          />
        </div>
        <div className="tw-ml-3 tw-flex-col tw-justify-center sm:tw-flex-1">
          {props.descriptionFor === "imas" ? (
            <DescriptionForImas />
          ) : props.descriptionFor === "tech" ? (
            <DescriptionForTech />
          ) : (
            <GeneralDescription />
          )}
        </div>
      </div>
    </Card>
    {!props.descriptionFor && (
      <div className="tw-flex tw-justify-center tw-leading-8">
        <LinkMarbles />
      </div>
    )}
    <div className="tw-flex tw-justify-center tw-leading-8 tw-text-lg">
      <Link href="/tech">&lt;- tech</Link>
      <span className="tw-mli-4"> / </span>
      <Link href="/">🏠</Link>
      <span className="tw-mli-4"> / </span>
      <Link href="/imas">imas -&gt;</Link>
    </div>
  </div>
);

function GeneralDescription() {
  return (
    <>
      <h2 className="tw-mb-2 tw-text-2xl tw-font-bold">berlysia</h2>

      <p className="tw-mb-1">
        フロントエンドを得意領域とするWebエンジニアです。日本のWebコミュニティに参加し、
        <a href="https://tskaigi.org/" target="_blank" rel="noreferrer">
          TSKaigi
        </a>
        のコアスタッフとしても活動しています。株式会社ドワンゴの教育事業でWebフロントエンドを担当しています。
      </p>
      <p className="tw-mb-1">
        アイドルマスターシリーズのファンで、
        <a
          className="tw-px-1 tw-inline"
          href="https://idollist.idolmaster-official.jp/search/detail/20046"
          style={{ backgroundColor: "#fbffb9", color: "#333" }}
        >
          喜多日菜子
        </a>
        さん、
        <a
          className="tw-px-1 tw-inline"
          href="https://idollist.idolmaster-official.jp/search/detail/30016"
          style={{ backgroundColor: "#7f6575", color: "white" }}
        >
          高山紗代子
        </a>
        さんを応援しています。
      </p>
    </>
  );
}

function DescriptionForImas() {
  return (
    <>
      <h2 className="tw-mb-2 tw-text-2xl tw-font-bold">berlysia</h2>
      <p className="tw-mb-1">
        <a
          className="tw-px-1 tw-inline"
          href="https://idollist.idolmaster-official.jp/search/detail/20046"
          style={{ backgroundColor: "#fbffb9", color: "#333" }}
        >
          喜多日菜子
        </a>
        さん、
        <a
          className="tw-px-1 tw-inline"
          href="https://idollist.idolmaster-official.jp/search/detail/30016"
          style={{ backgroundColor: "#7f6575", color: "white" }}
        >
          高山紗代子
        </a>
        さんを応援しています。
        <a
          className="tw-px-1 tw-inline"
          href="https://idollist.idolmaster-official.jp/search/detail/50028"
          style={{ backgroundColor: "#ead7a4", color: "#333" }}
        >
          郁田はるき
        </a>
        さんに関心があります。
      </p>
      <p className="tw-mb-1">
        公式展開のテキストを中心に、「書かれていること」と「直ちに読み取れること」、そして「そこから広がる妄想」を区別しながら、アイドルたちの魅力と未来を探求しています。
      </p>
      <p className="tw-mb-1">
        各アイドルの担当プロデューサーでないとわからないような、ディープな話を聞くのが好きです。
      </p>
    </>
  );
}

function DescriptionForTech() {
  return (
    <>
      <h2 className="tw-mb-2 tw-text-2xl tw-font-bold">berlysia</h2>

      <p className="tw-mb-1">
        フロントエンドを得意領域とするWebエンジニアです。株式会社ドワンゴの教育事業でWebフロントエンドを担当しています。日本のWebコミュニティに参加し、
        <a href="https://tskaigi.org/" target="_blank" rel="noreferrer">
          TSKaigi
        </a>
        のコアスタッフとしても活動しています。
      </p>
      <p className="tw-mb-1">
        TypeScriptを用いた大規模アプリケーション開発に長年親しみ、FrontendOpsのうち特にLinter類による静的解析や自動化に馴染んでいます。
        Webフロントエンドをやり、Webフロントエンドのためのことをすべてやります。
      </p>
      <p className="tw-mb-1">
        Webブラウザでの縦書きに強い関心があり、業務と個人の関心が一致しています。
      </p>
    </>
  );
}
