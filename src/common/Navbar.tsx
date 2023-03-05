import Button from "./Button";
import Logo from "./Logo";
import { useAppSelector } from "app/hooks";
import { selectView } from "app/slices/pageSlice";
import ThemeSwitch from "features/ThemeSwitch";
import View from "views/view";
import { RiLogoutBoxLine } from "react-icons/ri";

export default function Navbar() {
  const view = useAppSelector(selectView);

  return (
    <nav className="flex border-b-2 border-zinc-400 dark:border-zinc-700 justify-between items-center bg-zinc-100 dark:bg-zinc-900 p-3">
      <div
        className={`flex items-center gap-2 ${
          view === View.Login && "invisible"
        }`}
      >
        <Logo />
        <h2 className="text-2xl font-semibold">Natorlite Places</h2>
      </div>
      <div className="flex items-center gap-3">
        <ThemeSwitch />
        {view === View.Places && (
          <Button>
            <RiLogoutBoxLine /> Logout
          </Button>
        )}
      </div>
    </nav>
  );
}
