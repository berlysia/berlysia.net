import type { Talk } from "../../seeds/data/tech_talks";
import { SlideLink } from "./SlideLink/SlideLink";

export const Talks = ({
  talks,
  withHatenaBookmark,
}: {
  readonly talks: readonly Talk[];
  readonly withHatenaBookmark?: boolean;
}) => (
  <ul className="tw-p-0">
    {talks.map((talk) => (
      <li key={talk.talkLink} className="tw-text-base tw-my-2">
        <SlideLink {...talk} withHatenaBookmark={withHatenaBookmark} />
      </li>
    ))}
  </ul>
);
