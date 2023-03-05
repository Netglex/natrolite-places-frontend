import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectDark, setDark } from "app/slices/themeSlice";
import Button from "common/Button";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

export default function ThemeSwitch() {
  const dark = useAppSelector(selectDark);
  const dispatch = useAppDispatch();

  return (
    <Button onClick={() => dispatch(setDark(!dark))}>
      {dark ? <RiMoonClearLine /> : <RiSunLine />}
    </Button>
  );
}
