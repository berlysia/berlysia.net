import { createRoute } from "honox/factory";
import { FullHeightContainer } from "../components/FullHeightContainer/FullHeightContainer";
import { SITE_NAME } from "../constant";

// Emitted as dist/404.html. Cloudflare Pages serves it with status 404 for
// unmatched paths; without it, Pages treats the site as an SPA and returns
// index.html with 200 instead.
function NotFound() {
  return (
    <FullHeightContainer className="tw-p-6 tw-flex-col">
      <div className="tw-max-w-4xl tw-m-auto tw-text-center">
        <h1 className="tw-text-2xl tw-font-bold tw-mb-4">404 Not Found</h1>
        <p>
          <a href="/">トップページへ戻る</a>
        </p>
      </div>
    </FullHeightContainer>
  );
}

export default createRoute((c) =>
  c.render(<NotFound />, { title: `Not Found | ${SITE_NAME}`, noindex: true })
);
