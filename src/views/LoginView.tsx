import { useAppDispatch, useAppSelector } from "app/hooks";
import { setView } from "app/slices/pageSlice";
import {
  selectCurrentUsername,
  setCurrentUsername,
} from "app/slices/placesSlice";
import Button from "common/Button";
import Input from "common/Input";
import Logo from "common/Logo";
import Modal from "common/Modal";
import Navbar from "common/Navbar";
import { useState } from "react";
import { RiLoginBoxLine } from "react-icons/ri";
import View from "./view";

export default function LoginView() {
  const [modalVisibility, setModalVisibility] = useState(false);

  const currentUsername = useAppSelector(selectCurrentUsername);
  const dispatch = useAppDispatch();

  const showPlacesView = () => {
    dispatch(setView(View.Places));
  };

  const checkUsername = (username: string) => {
    if (username === "") setModalVisibility(true);
    else showPlacesView();
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Modal
        confirmText="Confirm"
        cancelText="Cancel"
        onConfirm={showPlacesView}
        visibility={modalVisibility}
        setVisibility={setModalVisibility}
      >
        Do you want to enter without a username?
      </Modal>
      <Navbar />
      <main className="flex grow items-center justify-center py-10">
        <section className="flex w-96 flex-col items-center rounded-lg bg-zinc-100 pt-8 pb-12 dark:bg-zinc-900">
          <Logo className="mb-4 h-32" />
          <h1 className="mb-12 text-3xl font-semibold">Natrolite Places</h1>
          <Input
            className="mb-6 w-72"
            value={currentUsername}
            onChange={(e) => dispatch(setCurrentUsername(e.target.value))}
            placeholder="Enter your username..."
          />
          <Button onClick={() => checkUsername(currentUsername)}>
            <RiLoginBoxLine /> Login
          </Button>
        </section>
      </main>
    </div>
  );
}
