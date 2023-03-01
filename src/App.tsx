import { useEffect, useState } from "react";
import natroliteClient from "./api/natroliteClient";
import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";

function App() {
  const [answer, setAnswer] = useState("...");

  const [connection, setConnection] = useState<HubConnection>();
  const [messages, setMessages] = useState<string[]>([]);

  const generateAnswer = () => {
    natroliteClient.getTherapy().then((therapy) => setAnswer(therapy.answer!));
    sendMessage("Test Message sent!");
  };

  useEffect(() => {
    console.log("Is using effect");
    const hubConnection = new HubConnectionBuilder()
      .withUrl(`${import.meta.env.VITE_NATROLITE_WEBAPI_URL}/Message`)
      .withAutomaticReconnect()
      .build();

    setConnection(hubConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          connection.on("ReceiveMessage", (message: string) => {
            setMessages((current) => [...current, message]);
          });
        })
        .catch((error) => console.log(error));
    }
  }, [connection]);

  const sendMessage = async (message: string) => {
    if (connection) await connection.send("SendMessage", message);
  };

  return (
    <div>
      <div>This button activates the API:</div>
      <button onClick={generateAnswer}>Answer to all of your problems:</button>
      <div>{answer}</div>
      <div>This will be realtime messages</div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
