const MARBLES: Array<{
  title: string;
  url: string;
  label: string;
}> = [
  {
    title: "Twitter",
    url: "https://twitter.com/berlysia",
    label: "Twitter / berlysia",
  },
  {
    title: "GitHub",
    url: "https://github.com/berlysia",
    label: "GitHub / berlysia",
  },
  {
    title: "Im@stodon",
    url: "https://imastodon.net/@berlysia",
    label: "Im@stodon / berlysia",
  },
  {
    title: "mstdn.jp",
    url: "https://mstdn.jp/@berlysia",
    label: "mstdn.jp / berlysia",
  },
  {
    title: "Blog",
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
  <ul className="">
    {MARBLES.map((marble) => (
      <li key={marble.title}>
        <a
          className="tw-underline"
          rel="noopener noreferrer"
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
