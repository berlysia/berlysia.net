import type { CSSProperties, ReactNode } from "react";
import {
  BlogIcon,
  GitHubIcon,
  MastodonIcon,
  TwitterIcon,
} from "../../../components/Icons";

const iconClasses = "tw-bs-5";

const MARBLES: Array<{
  title: ReactNode;
  url: string;
  label: string;
}> = [
  {
    title: <TwitterIcon className={iconClasses} />,
    url: "https://twitter.com/berlysia",
    label: "Twitter / berlysia",
  },
  {
    title: <GitHubIcon className={iconClasses} />,
    url: "https://github.com/berlysia",
    label: "GitHub / berlysia",
  },
  {
    title: <MastodonIcon className={iconClasses} />,
    url: "https://imastodon.net/@berlysia",
    label: "Im@stodon / berlysia",
  },
  // {
  //   title: "mstdn.jp",
  //   url: "https://mstdn.jp/@berlysia",
  //   label: "mstdn.jp / berlysia",
  // },
  {
    title: <BlogIcon className={iconClasses} />,
    url: "https://blog.berlysia.net/all",
    label: "blog.berlysia.net",
  },
  // {
  //   title: "Hatena Blog",
  //   url: "https://berlysia.hatenablog.com/",
  //   label: "hatenablog",
  // },
  // {
  //   title: "Zenn",
  //   url: "https://zenn.dev/berlysia",
  //   label: "Zenn / berlysia",
  // },
  // {
  //   title: "Qiita",
  //   url: "https://qiita.com/berlysia",
  //   label: "Qiita / berlysia",
  // },
];

export const LinkMarbles = () => (
  <ul className="tw-flex tw-gap-x-8 tw-gap-y-2 tw-plb-2 tw-flex-wrap tw-justify-center">
    {MARBLES.map((marble) => (
      <li key={marble.label}>
        <a
          className="tw-rounded-md tw-text-blue-600 visited:tw-text-gray-600 hover:tw-bg-gray-200 focus:tw-bg-gray-200"
          rel="noreferrer"
          target="_blank"
          href={marble.url}
          aria-label={marble.label}
        >
          {marble.title}
        </a>
      </li>
    ))}
  </ul>
);
