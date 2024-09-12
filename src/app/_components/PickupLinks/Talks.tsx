import { SlideLink } from "./SlideLink/SlideLink";

const talks: ReadonlyArray<{
  eventTitle: string;
  eventLink: string;
  talkTitle: string;
  talkLink: string;
  slideLink?: string;
  pubDateString: string;
  talkArchiveLink?: string;
}> = [
  {
    eventTitle: "Web Developer Conference 2024",
    eventLink: "https://web-study.connpass.com/event/321711/",
    talkTitle:
      "1 分 de Web 標準 / CSS Logical Properties and Values について 1 分で",
    talkLink: "https://web-study.connpass.com/event/321711/",
    slideLink: "https://twitter.com/berlysia/status/1832728610245095595",
    pubDateString: "2024/09/07",
  },
  {
    eventTitle: "フロントエンドカンファレンス北海道2024",
    eventLink: "https://www.frontend-conf.jp/",
    talkTitle: "CSSレイアウト再入門:完全に理解してCSSを記述するために",
    talkLink:
      "https://fortee.jp/frontend-conf-hokkaido-2024/proposal/923208ce-e2e1-4b6c-8c4f-123f8a4fc1f9",
    slideLink:
      "https://speakerdeck.com/berlysia/revisiting-css-layout-mastering-css-for-writing-with-complete-understanding",
    pubDateString: "2024/08/24",
  },
  {
    eventTitle: "JSConf JP 2022",
    eventLink: "https://jsconf.jp/2022/",
    talkTitle:
      "自然発生した実装パターンに、マイクロフロントエンドと名がつきました",
    talkLink: "https://jsconf.jp/2022/talk/sponsor-talk-dwango",
    slideLink: "https://speakerdeck.com/berlysia/jsconf-jp-2022",
    pubDateString: "2022/11/26",
    talkArchiveLink: "https://www.youtube.com/watch?v=IhPGvFal15E",
  },
  {
    eventTitle: "iCARE Dev Meetup #30",
    eventLink: "https://icare.connpass.com/event/237019/",
    talkTitle: "N予備校とWebフロントエンドの新陳代謝",
    talkLink: "https://icare.connpass.com/event/237019/",
    slideLink: "https://speakerdeck.com/berlysia/icare-dev-meetup-number-30",
    pubDateString: "2022/02/16",
    talkArchiveLink: "https://youtu.be/VlE6hJme1Rc?t=1602",
  },
  {
    eventTitle: "ドワンゴ EdTech Talk",
    eventLink: "https://dwango.connpass.com/event/230731/",
    talkTitle: "N予備校のフロントエンド開発の取り組み",
    talkLink: "https://dwango.connpass.com/event/230731/",
    slideLink: undefined,
    pubDateString: "2021/12/08",
    talkArchiveLink: undefined,
  },
  {
    eventTitle: "Front-End Lounge #2「フロントエンドエンジニアのキャリア」",
    eventLink: "https://forkwell.connpass.com/event/230632/",
    talkTitle: "後手から始まるフロントエンド（スポンサートーク）",
    talkLink: "https://forkwell.connpass.com/event/230632/",
    slideLink: undefined,
    pubDateString: "2021/12/06",
    talkArchiveLink: "https://www.youtube.com/watch?v=zw_bt_j2xW0",
  },
  {
    eventTitle: "JSConf JP 2021",
    eventLink: "https://jsconf.jp/2021/",
    talkTitle: "Webフロントエンドのリプレースを支えるテストの考え方",
    talkLink:
      "https://jsconf.jp/2021/talk/testing-approach-to-support-web-front-end-replacement",
    slideLink: "https://speakerdeck.com/berlysia/jsconf-jp-2021",
    pubDateString: "2021/11/27",
    talkArchiveLink:
      "https://www.youtube.com/watch?v=16ux8nTqJ7k&list=PL42hYWKFRfN7XWswj9wcC0j4191KNJuO3&index=1",
  },
  {
    eventTitle: "東京Node学園 29時限目",
    eventLink: "https://nodejs.connpass.com/event/78902/",
    talkTitle: "rxjs v6 について",
    talkLink: "https://nodejs.connpass.com/event/78902/",
    slideLink: undefined,
    pubDateString: "2018/02/22",
    talkArchiveLink: undefined,
  },
] as const;

export const Talks = ({
  withHatenaBookmark,
}: {
  readonly withHatenaBookmark?: boolean;
}) => (
  <div>
    <h2 className="tw-text-2xl tw-font-bold tw-mb-2">Tech Talks</h2>
    <ul className="tw-p-0">
      {talks.map((talk) => (
        <li
          key={talk.talkLink}
          className="tw-text-base tw-border-0 tw-border-b tw-border-solid tw-border-gray-100"
        >
          <SlideLink {...talk} withHatenaBookmark={withHatenaBookmark} />
        </li>
      ))}
    </ul>
  </div>
);
