import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FullHeightContainer } from "../../components/FullHeightContainer/FullHeightContainer";
import { Profile } from "./Profile/Profile";
import { PickupLinks } from "./PickupLinks/PickupLinks";

export default function Index() {
  return (
    <div className="tw-flex tw-flex-col">
      <FullHeightContainer className="tw-bg-keyColor-50">
        <Profile />
        <div className="tw-absolute tw-bottom-8 tw-h-8 tw-w-6 tw-text-3xl tw-animate-fade-blink">
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </div>
      </FullHeightContainer>
      <FullHeightContainer className="tw-bg-white">
        <PickupLinks />
      </FullHeightContainer>
    </div>
  );
}
