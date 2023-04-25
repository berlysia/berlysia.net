import { Categories } from "./Categories";

export function Content({
  children,
  currentCategory,
}: {
  children: React.ReactNode;
  currentCategory?: string;
}) {
  return (
    <div className="tw-max-w-screen-lg tw-w-full tw-h-full tw-relative tw-pli-4">
      <Categories currentCategory={currentCategory} />
      {children}
    </div>
  );
}