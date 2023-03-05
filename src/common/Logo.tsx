import { useAppSelector } from "app/hooks";
import { selectDark } from "app/slices/themeSlice";

export interface LogoProps {
  className?: string
}

export default function Logo(props: LogoProps) {
  const dark = useAppSelector(selectDark);

  return (
    <img className={props.className} src={dark ? "GridIconDark.svg" : "GridIcon.svg"} alt="GridIcon" />
  );
}
