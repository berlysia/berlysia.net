import Link from "./LinkWithTransition";

export function GenreSwitcher() {
  return (
    <div className="tw-flex tw-justify-center tw-leading-8 tw-text-lg">
      <Link href="/tech">&lt;- tech</Link>
      <span className="tw-mli-4"> / </span>
      <Link href="/">🏠</Link>
      <span className="tw-mli-4"> / </span>
      <Link href="/imas">imas -&gt;</Link>
    </div>
  );
}
