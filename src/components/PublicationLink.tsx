import Card from "./Card";

export function PublicationLink({
  title,
  description,
  href,
  storeLinks,
  pubDateString,
  eventName,
  contribution,
}: {
  readonly title: string;
  readonly description: string;
  readonly href?: string;
  readonly storeLinks: Array<{ readonly href: string; readonly name: string }>;
  readonly pubDateString: string;
  readonly eventName?: string;
  readonly contribution?: {
    readonly title: string;
    readonly author: string;
    readonly href: string;
  };
}) {
  return (
    <Card>
      {href ? (
        <a
          className="tw-block tw-rounded-md tw-plb-4 tw-text-2xl tw-text-blue-600 visited:tw-text-purple-800 hover:tw-bg-pink-100 focus:tw-bg-pink-100"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      ) : (
        <span className="tw-block tw-rounded-md tw-plb-4 tw-text-2xl">
          {title}
        </span>
      )}

      <p className="tw-pli-2 tw-pbs-2 tw-pbe-4">{description}</p>

      <hr className="tw-border-pink-100 tw-border-dotted" />

      <div className="tw-flex tw-items-center tw-min-w-0 tw-text-sm tw-gap-2">
        {eventName && (
          <span className="tw-text-sm tw-text-gray-500 tw-ml-1">
            {eventName}
          </span>
        )}
        {contribution && (
          <span>
            寄稿:
            <a
              key={contribution.href}
              href={contribution.href}
              className="tw-rounded-md tw-p-1 tw-text-blue-600 visited:tw-text-purple-800 hover:tw-bg-gray-200 focus:tw-bg-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contribution.title} by {contribution.author}
            </a>
          </span>
        )}
        {storeLinks.map((storeLink) => (
          <a
            key={storeLink.href}
            href={storeLink.href}
            className="tw-rounded-md tw-p-1 tw-text-blue-600 visited:tw-text-purple-800 hover:tw-bg-gray-200 focus:tw-bg-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            {storeLink.name}
          </a>
        ))}
        <div className="tw-ml-auto tw-flex tw-items-center tw-gap-1 tw-flex-shrink-0">
          <time
            className="tw-flex-shrink-0 tw-block tw-text-right tw-text-xs tw-no-underline"
            dateTime={pubDateString}
          >
            {pubDateString}
          </time>
        </div>
      </div>
    </Card>
  );
}
