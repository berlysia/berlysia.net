import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FullHeightContainer } from "../../FullHeightContainer/FullHeightContainer";
import type { Article } from "../../../seeds";
import { ArticleArea } from "./ArticleArea";
import { ArticleLinks } from "./ArticleLinks";
import { Profile } from "./Profile";
import { Talks } from "./Talks";

export default function Index(props: {
  techArticles: Article[];
  imasArticles: Article[];
}) {
  return (
    <div className="tw-flex tw-flex-col">
      <FullHeightContainer className="tw-bg-pink-50">
        <Profile />
        <div className="tw-absolute tw-bottom-8 tw-h-8 tw-w-6 tw-text-3xl tw-animate-fade-blink">
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </div>
      </FullHeightContainer>
      <FullHeightContainer className="tw-bg-white">
        <div className="tw-flex tw-flex-col tw-justify-center">
          <div className="tw-flex tw-flex-wrap md:tw-flex-row tw-flex-col">
            <div className="tw-w-full md:tw-w-1/2 tw-flex-shrink-0 tw-flex-grow tw-p-6">
              <Talks withHatenaBookmark />
              <div className="tw-h-8"></div>
              <ArticleArea
                genreTitle="Tech Articles"
                articles={props.techArticles}
                withHatenaBookmark
              />
            </div>
            <div className="tw-w-full md:tw-w-1/2 tw-flex-shrink-0 tw-flex-grow tw-p-6">
              <ArticleArea
                genreTitle="IM@S Articles"
                articles={props.imasArticles}
                withHatenaBookmark
              />
            </div>
          </div>
          <div className="tw-flex tw-justify-center">
            <ArticleLinks />
          </div>
        </div>
      </FullHeightContainer>
    </div>
  );
}