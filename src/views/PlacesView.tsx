import Navbar from "common/Navbar";

export default function PlacesView() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-grow items-center justify-center py-10">
        <div>This is the places view.</div>
      </main>
    </div>
  );
}
