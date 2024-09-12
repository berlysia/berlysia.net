"use client";

import React, { useCallback, useRef } from "react";
import HatenaBookmarkCounter from "../../HatenaBookmarkCounter";
import Card from "../../Card";

export function SlideLink({
  eventTitle,
  eventLink,
  talkTitle,
  talkLink,
  slideLink,
  pubDateString,
  talkArchiveLink,
  withHatenaBookmark,
}: {
  readonly eventTitle: string;
  readonly eventLink: string;
  readonly talkTitle: string;
  readonly talkLink: string;
  readonly slideLink?: string;
  readonly pubDateString: string;
  readonly talkArchiveLink?: string;
  readonly withHatenaBookmark?: boolean;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const handleModalOpen = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const handleModalClose = useCallback(
    (e: React.MouseEvent | React.KeyboardEvent) => {
      if (e.target === dialogRef.current) {
        dialogRef.current.close();
      }
    },
    []
  );

  return (
    <Card>
      <a
        className="tw-block tw-rounded-md tw-py-4 tw-text-2xl tw-text-blue-600 visited:tw-text-purple-800 hover:tw-bg-pink-100 focus:tw-bg-pink-100"
        href={talkLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {talkTitle}
      </a>

      <hr className="tw-border-pink-100 tw-border-dotted" />

      <div className="tw-flex tw-items-center tw-min-w-0 tw-text-sm">
        <a
          href={eventLink}
          className="tw-flex-grow tw-flex-shrink tw-p-1 tw-rounded-md tw-overflow-hidden tw-whitespace-nowrap tw-overflow-ellipsis tw-no-underline tw-text-blue-600 visited:tw-text-purple-800 hover:tw-bg-gray-200 focus:tw-bg-gray-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          {eventTitle}
        </a>
        <div className="tw-flex tw-items-center tw-gap-1 tw-flex-shrink-0">
          <div className="tw-hidden md:tw-flex">
            {slideLink && (
              <>
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
              </>
            )}
            {talkArchiveLink && (
              <a
                href={talkArchiveLink}
                className="tw-rounded-md tw-p-1 tw-overflow-hidden tw-whitespace-nowrap tw-overflow-ellipsis tw-text-blue-600 visited:tw-text-purple-800 hover:tw-bg-gray-200 focus:tw-bg-gray-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                talk archive
              </a>
            )}
          </div>

          {slideLink || talkArchiveLink ? (
            <div className="md:tw-hidden tw-flex tw-p-2">
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
            </div>
          ) : null}
        </div>

        <time
          className="tw-block tw-text-right tw-text-xs tw-no-underline"
          dateTime={pubDateString}
        >
          {pubDateString}
        </time>
      </div>
    </Card>
  );
}
