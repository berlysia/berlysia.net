import clsx from "clsx";

export default function Card(props: {
  readonly children: React.ReactNode;
  readonly className?: string;
}) {
  return (
    <div
      className={clsx(
        "tw-rounded-xl tw-p-2 tw-mlb-1 tw-bg-white tw-drop-shadow-md",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}
