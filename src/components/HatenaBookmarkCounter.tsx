// /* eslint-disable @next/next/no-img-element -- 桁数を綺麗に反映させるのが難しい */
export default function HatenaBookmarkCounter({
  link,
  alt,
}: {
  readonly link: string;
  readonly alt?: string;
}) {
  return (
    <a
      href={`https://b.hatena.ne.jp/entry/${link}`}
      className="tw-flex tw-items-center tw-rounded-md tw-px-1 tw-h-6 tw-flex-shrink-0 tw-text-blue-600 visited:tw-text-purple-800 hover:tw-bg-gray-200 focus:tw-bg-gray-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="tw-block tw-object-contain"
        src={`https://b.hatena.ne.jp/entry/image/${link}`}
        alt={alt ?? "はてなブックマーク"}
      />
    </a>
  );
}
