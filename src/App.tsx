import { useAppSelector } from "app/hooks";
import { selectView } from "features/page/pageSlice";
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
  const view = useAppSelector(selectView);

  switch (view) {
    case View.Login:
      return <LoginView />;
    case View.Places:
      return <PlacesView />;
    default:
      return <LoginView />;
  }
}

export default App;
