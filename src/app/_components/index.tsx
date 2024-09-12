import { FullHeightContainer } from "../../components/FullHeightContainer/FullHeightContainer";
import { Profile } from "./Profile/Profile";

export default function Index() {
  return (
    <FullHeightContainer className="tw-p-6 tw-bg-keyColor-50 tw-flex-col">
      <div className="tw-max-w-4xl tw-m-auto">
        <Profile />
      </div>
    </FullHeightContainer>
  );
}
