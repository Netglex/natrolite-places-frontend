import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectDark, setDark } from "./themeSlice";

export default function ThemeSwitch() {
  const dark = useAppSelector(selectDark);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button className="border" onClick={(_) => dispatch(setDark(!dark))}>
        Change theme
      </button>
    </div>
  );
}
