import { useRef } from "hono/jsx";
import HatenaBookmarkCounter from "../components/HatenaBookmarkCounter";

/**
 * Narrow-viewport fallback for SlideLink: the slide / archive links do not fit
 * inline, so they are tucked into a modal dialog behind a button.
 */
export default function SlideLinkMenu({
  talkTitle,
  slideLink,
  talkArchiveLink,
  withHatenaBookmark,
}: {
  readonly talkTitle: string;
  readonly slideLink?: string;
  readonly talkArchiveLink?: string;
  readonly withHatenaBookmark?: boolean;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleModalOpen = () => {
    dialogRef.current?.showModal();
  };

  // Clicks on the ::backdrop are dispatched with the dialog itself as target.
  const handleModalClose = (e: Event) => {
    if (e.target === dialogRef.current) {
      dialogRef.current?.close();
    }
  };

  return (
    <>
      <button
        type="button"
        className="tw-border tw-rounded-md"
        onClick={handleModalOpen}
      >
        🔗
      </button>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions -- trust me */}
      <dialog
        ref={dialogRef}
        onClick={handleModalClose}
        onKeyDown={handleModalClose}
        className="tw-w-2/3 tw-rounded-lg tw-shadow-lg tw-shadow-pink-50 tw-border-2 tw-border-pink-200"
      >
        <form method="dialog">
          <h2>{talkTitle}</h2>
          <hr className="tw-mlb-2 tw-border-pink-100 tw-border-dashed" />

          <ul>
            {slideLink && (
              <li className="tw-mlb-2 tw-flex tw-flex-row">
                <a
                  href={slideLink}
                  className="tw-rounded-md tw-p-1 tw-text-blue-600 visited:tw-text-purple-800 hover:tw-bg-gray-200 focus:tw-bg-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  slide
                </a>
                {withHatenaBookmark ? (
                  <HatenaBookmarkCounter link={slideLink} />
                ) : null}
              </li>
            )}
            {talkArchiveLink && (
              <li className="tw-mlb-2">
                <a
                  href={talkArchiveLink}
                  className="tw-rounded-md tw-p-1 tw-text-blue-600 visited:tw-text-purple-800 hover:tw-bg-gray-200 focus:tw-bg-gray-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  talk archive
                </a>
              </li>
            )}
          </ul>
        </form>
      </dialog>
    </>
  );
}
