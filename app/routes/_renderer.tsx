import { partytownSnippet } from "@qwik.dev/partytown/integration";
import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import { raw } from "hono/html";
import { gaEnabled, GA_ID } from "../lib/gtag";
import { SITE_NAME } from "../constant";

export default jsxRenderer(({ children, title, noindex }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title ?? SITE_NAME}</title>
        {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
        />
        <meta name="Hatena::Bookmark" content="nocomment" />
        <link rel="author" href="https://www.hatena.ne.jp/berlysia/" />
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
        {gaEnabled && (
          <>
            <script>
              {raw(partytownSnippet({ forward: ["dataLayer.push"] }))}
            </script>
            <script
              type="text/partytown"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <script type="text/partytown">
              {raw(`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });`)}
            </script>
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
});
