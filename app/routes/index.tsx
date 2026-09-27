import { createRoute } from "honox/factory";
import { FullHeightContainer } from "../components/FullHeightContainer/FullHeightContainer";
import { Profile } from "../components/Profile/Profile";

function Index() {
  return (
    <FullHeightContainer className="tw-p-6  tw-flex-col">
      <div className="tw-max-w-4xl tw-m-auto">
        <Profile />
      </div>
    </FullHeightContainer>
  );
}

export default createRoute((c) => c.render(<Index />));
