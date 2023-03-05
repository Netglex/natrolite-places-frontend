import Button from "./Button";
import Logo from "./Logo";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectView, setView } from "app/slices/pageSlice";
import ThemeSwitch from "features/ThemeSwitch";
import View from "views/view";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Navbar() {
  const view = useAppSelector(selectView);
  const dispatch = useAppDispatch();

  return (
    <nav className="flex items-center justify-between bg-zinc-100 p-3 dark:bg-zinc-900">
      <div
        className={`flex items-center gap-2 ${
          view === View.Login && "invisible"
        }`}
      >
        <Logo />
        <h2 className="text-2xl font-medium">Natrolite<span className="hidden sm:inline"> Places</span></h2>
      </div>
      <div className="flex items-center gap-3">
        <ThemeSwitch />
        {view === View.Places && (
          <Button onClick={() => dispatch(setView(View.Login))}>
            <RiLogoutBoxLine /> Logout
          </Button>
        )}
      </div>
    </nav>
  );
}
