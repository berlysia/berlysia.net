import Card from "../../../components/Card";
import { Talks } from "../../../components/Talks/Talks";
import { talks } from "../../../seeds/data/tech_talks";

export default function Index() {
  return (
    <div className="tw-max-w-4xl tw-flex tw-flex-row tw-justify-center tw-items-stretch tw-mli-auto tw-mlb-12">
      <Card className="tw-flex-1">
        <div className="tw-pli-4">
          <div className="tw-flex tw-flex-col tw-justify-center tw-w-full tw-plb-6 tw-pli-0">
            <h2 className="tw-text-2xl tw-font-bold tw-mb-2">Tech Talks</h2>
            <Talks talks={talks} withHatenaBookmark />
          </div>
        </div>
      </Card>
    </div>
  );
}
