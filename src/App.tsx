import { useAppSelector } from "app/hooks";
import { selectView } from "app/slices/pageSlice";
import { selectDark } from "app/slices/themeSlice";
import LoginView from "views/LoginView";
import PlacesView from "views/PlacesView";
import View from "views/view";

function App() {
  // const [answer, setAnswer] = useState("...");

  // const [connection, setConnection] = useState<HubConnection>();
  // const [messages, setMessages] = useState<string[]>([]);

  // const generateAnswer = () => {
  //   natroliteClient.getTherapy().then((therapy) => setAnswer(therapy.answer!));
  // };

  // useEffect(() => {
  //   console.log("Is using effect");
  //   const hubConnection = new HubConnectionBuilder()
  //     .withUrl(`${import.meta.env.VITE_NATROLITE_WEBAPI_URL}/Message`)
  //     .withAutomaticReconnect()
  //     .build();

  //   setConnection(hubConnection);
  // }, []);

  // useEffect(() => {
  //   if (connection) {
  //     connection
  //       .start()
  //       .then(() => {
  //         connection.on("ReceiveMessage", (message: string) => {
  //           setMessages((current) => [...current, message]);
  //         });
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // }, [connection]);

  // const sendMessage = async (message: string) => {
  //   if (connection) await connection.send("SendMessage", message);
  // };
  const dark = useAppSelector(selectDark);
  const view = useAppSelector(selectView);

  return (
    <div className={`${dark ? "dark bg-zinc-800 text-white" : "bg-zinc-200 text-black"}`}>
      {view === View.Login && <LoginView />}
      {view === View.Places && <PlacesView />}
    </div>
  );
}

export default App;
