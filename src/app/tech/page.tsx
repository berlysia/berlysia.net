import Card from "../../components/Card";
import { Profile } from "../_components/Profile/Profile";
import { PickupLinks } from "./_components/PickupLinks";

export default function Index() {
  return (
    <div className="tw-pli-6 tw-bg-keyColor-50 tw-flow-root">
      <div className="tw-max-w-4xl tw-flex tw-flex-row tw-justify-center tw-items-stretch tw-mli-auto tw-mlb-12">
        <Profile descriptionFor="tech" />
      </div>
      <div className="tw-max-w-4xl tw-flex tw-flex-row tw-justify-center tw-items-stretch tw-mli-auto tw-mlb-12">
        <Card className="tw-flex-1">
          <div className="tw-pli-4">
            <PickupLinks />
          </div>
        </Card>
      </div>
    </div>
  );
}
