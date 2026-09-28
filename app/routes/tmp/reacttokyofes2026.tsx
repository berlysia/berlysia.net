import { createRoute } from "honox/factory";

const redirectUrl =
  "https://blog.berlysia.net/entry/2026-02-28-react-tokyo-fes-2026";

export default createRoute((c) =>
  c.render(
    <>
      <meta http-equiv="refresh" content={`0; url=${redirectUrl}`} />
      <p>
        Redirecting to <a href={redirectUrl}>{redirectUrl}</a>
      </p>
    </>,
    { title: "React Tokyo Fes 2026 | berlysia.net", noindex: true }
  )
);
