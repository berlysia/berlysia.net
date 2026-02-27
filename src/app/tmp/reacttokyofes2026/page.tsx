import type { Metadata } from "next";

const redirectUrl =
  "https://blog.berlysia.net/entry/2026-02-28-react-tokyo-fes-2026";

export const metadata: Metadata = {
  title: "React Tokyo Fes 2026 | berlysia.net",
  robots: {
    index: false,
    follow: false,
  },
  other: {
    "http-equiv": "refresh",
  },
};

export default function ReactTokyoFes2026() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${redirectUrl}`} />
      <p>
        Redirecting to <a href={redirectUrl}>{redirectUrl}</a>
      </p>
    </>
  );
}
