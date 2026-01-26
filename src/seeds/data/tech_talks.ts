export type Talk = {
  id: string;
  eventTitle: string;
  eventLink: string;
  talkTitle: string;
  talkLink: string;
  slideLink?: string;
  pubDateString: string;
  talkArchiveLink?: string;
};

export const talks: readonly Talk[] = [
  {
    id: "tpac_study",
    eventTitle: "#tpac_study",
    eventLink: "https://web-study.connpass.com/event/378948/",
    talkTitle: "Revisiting Scope Between i18n and CSS",
    talkLink: "https://web-study.connpass.com/event/378948/",
    pubDateString: "2026/01/20",
  },
  {
    id: "burikaigi2026",
    eventTitle: "BuriKaigi 2026",
    eventLink: "https://fortee.jp/burikaigi-2026",
    talkTitle: "Webサイトで縦書きを使う、縦書きのWebサイトを作る",
    talkLink:
      "https://fortee.jp/burikaigi-2026/proposal/62024ffd-e82b-479a-b6bf-8968564f21c8",
    slideLink:
      "https://slides.berlysia.net/burikaigi2026-use-vertical-writing-on-a-site-or-create-a-vertical-writing-site/",
    pubDateString: "2026/01/10",
  },
  {
    id: "jsconfjp2025",
    eventTitle: "JSConf JP 2025",
    eventLink: "https://jsconf.jp/2025/",
    talkTitle: "縦書きWebの実用を支えるJavaScript",
    talkLink: "https://jsconf.jp/2025/en/talks/vertical-text-web-javascript",
    slideLink:
      "https://slides.berlysia.net/jsconfjp2025-javascript-for-vertical-writing-on-the-web/",
    pubDateString: "2025/11/16",
  },
  {
    id: "fectokyo-2025",
    eventTitle: "フロントエンドカンファレンス東京",
    eventLink: "https://fec-tokyo.github.io/2025/",
    talkTitle: "日本語縦書きWebの現在地 2025",
    talkLink: "https://fec-tokyo.github.io/2025/",
    slideLink:
      "https://slides.berlysia.net/state-of-japanese-vertical-writing-2025/",
    pubDateString: "2025/09/21",
  },
  {
    id: "tskaigi-2025",
    eventTitle: "TSKaigi 2025",
    eventLink: "https://2025.tskaigi.org/",
    talkTitle: "TypeScriptネイティブ移植観察レポート TSKaigi 2025",
    talkLink: "https://2025.tskaigi.org/talks/berlysia",
    slideLink:
      "https://speakerdeck.com/berlysia/typescript-native-porting-observation-tskaigi-2025",
    pubDateString: "2025/05/24",
  },
  {
    id: "noren-ts-vol1",
    eventTitle: "noren.ts #1 〜TypeScriptのエラーハンドリングを極める〜",
    eventLink: "https://dinii.connpass.com/event/348179/",
    talkTitle: "「どう扱うか」で設計するエラーハンドリング",
    talkLink: "https://dinii.connpass.com/event/348179/",
    slideLink:
      "https://speakerdeck.com/berlysia/designing-error-handling-based-on-how-to-handle-it",
    pubDateString: "2025/03/28",
  },
  {
    id: "meguro-es-vol29",
    eventTitle: "Meguro.es #29",
    eventLink: "https://meguroes.connpass.com/event/342717/",
    talkTitle: "バレルファイル 使っていいときわるいとき",
    talkLink: "https://meguroes.connpass.com/event/342717/",
    slideLink:
      "https://speakerdeck.com/berlysia/barrel-files-when-to-use-them-and-when-not-to",
    pubDateString: "2025/02/27",
  },
  {
    id: "browser-and-ui-vol1",
    eventTitle: "Browser and UI #1 CSS",
    eventLink: "https://browser-and-ui.connpass.com/event/341857/",
    talkTitle: "縦から目線のCSS",
    talkLink: "https://browser-and-ui.connpass.com/event/341857/",
    pubDateString: "2025/02/21",
  },
  {
    id: "jsconfjp2024",
    eventTitle: "JSConf JP 2024",
    eventLink: "https://jsconf.jp/2024/",
    talkTitle:
      "JavaScriptのモジュール解決の相互運用性 / Interoperability of Module Resolutions in JavaScript",
    talkLink: "https://jsconf.jp/2024/talk/berlysia/",
    slideLink:
      "https://speakerdeck.com/berlysia/interoperability-of-module-resolutions-in-javascript",
    pubDateString: "2024/12/23",
    talkArchiveLink: "https://www.youtube.com/live/2BXwigWGjWQ?t=19139s",
  },
  {
    id: "wdc2024",
    eventTitle: "Web Developer Conference 2024",
    eventLink: "https://web-study.connpass.com/event/321711/",
    talkTitle:
      "1 分 de Web 標準 / CSS Logical Properties and Values について 1 分で",
    talkLink: "https://web-study.connpass.com/event/321711/",
    slideLink: "https://twitter.com/berlysia/status/1832728610245095595",
    pubDateString: "2024/09/07",
  },
  {
    id: "frontendconf-hokkaido-2024",
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
    id: "jsconfjp2022",
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
    id: "icare-dev-meetup-30",
    eventTitle: "iCARE Dev Meetup #30",
    eventLink: "https://icare.connpass.com/event/237019/",
    talkTitle: "N予備校とWebフロントエンドの新陳代謝",
    talkLink: "https://icare.connpass.com/event/237019/",
    slideLink: "https://speakerdeck.com/berlysia/icare-dev-meetup-number-30",
    pubDateString: "2022/02/16",
    talkArchiveLink: "https://youtu.be/VlE6hJme1Rc?t=1602",
  },
  {
    id: "dwango-edtech-talk",
    eventTitle: "ドワンゴ EdTech Talk",
    eventLink: "https://dwango.connpass.com/event/230731/",
    talkTitle: "N予備校のフロントエンド開発の取り組み",
    talkLink: "https://dwango.connpass.com/event/230731/",
    slideLink: undefined,
    pubDateString: "2021/12/08",
    talkArchiveLink: undefined,
  },
  {
    id: "front-end-lounge-2-sponsor-talk",
    eventTitle: "Front-End Lounge #2「フロントエンドエンジニアのキャリア」",
    eventLink: "https://forkwell.connpass.com/event/230632/",
    talkTitle: "後手から始まるフロントエンド（スポンサートーク）",
    talkLink: "https://forkwell.connpass.com/event/230632/",
    slideLink: undefined,
    pubDateString: "2021/12/06",
    talkArchiveLink: "https://www.youtube.com/watch?v=zw_bt_j2xW0",
  },
  {
    id: "jsconfjp2021",
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
    id: "tnd29",
    eventTitle: "東京Node学園 29時限目",
    eventLink: "https://nodejs.connpass.com/event/78902/",
    talkTitle: "rxjs v6 について",
    talkLink: "https://nodejs.connpass.com/event/78902/",
    slideLink: undefined,
    pubDateString: "2018/02/22",
    talkArchiveLink: undefined,
  },
] as const;

const pinnedIds = new Set<(typeof talks)[number]["id"]>([
  "burikaigi2026",
  "jsconfjp2025",
  "fectokyo-2025",
  "tskaigi-2025",
  "noren-ts-vol1",
  "jsconfjp2024",
  "frontendconf-hokkaido-2024",
  "jsconfjp2022",
  "jsconfjp2021",
]);

export const pinnedTalks = talks.filter((talk) => pinnedIds.has(talk.id));
