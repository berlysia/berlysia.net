import { jsxRenderer } from "hono/jsx-renderer";
import { Profile } from "../../components/Profile/Profile";

export default jsxRenderer(({ children, Layout, ...head }) => (
  <Layout {...head}>
    <div className="tw-pli-6 tw-bg-keyColor-50 tw-flow-root">
      <div className="tw-max-w-4xl tw-flex tw-flex-row tw-justify-center tw-items-stretch tw-mli-auto tw-mlb-4">
        <Profile descriptionFor="tech" />
      </div>
      {children}
    </div>
  </Layout>
));
