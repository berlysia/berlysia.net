import type { ReactNode } from "react";
import { Profile } from "../_components/Profile/Profile";

export default function TechLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <div className="tw-pli-6 tw-bg-keyColor-50 tw-flow-root">
      <div className="tw-max-w-4xl tw-flex tw-flex-row tw-justify-center tw-items-stretch tw-mli-auto tw-mlb-12">
        <Profile descriptionFor="imas" />
      </div>
      {children}
    </div>
  );
}
