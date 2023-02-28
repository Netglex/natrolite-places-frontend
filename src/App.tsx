import { useState } from "react";
import { NatroliteClient } from "./api/natroliteWebApi";

function App() {
  const [answer, setAnswer] = useState("...");

  const generateAnswer = async () => {
    const client = new NatroliteClient(
      import.meta.env.VITE_NATROLITE_WEBAPI_URL
    );
    client.getTherapy().then((therapy) => setAnswer(therapy.answer!));
  };

  return (
    <div>
      <div>This button activates the API:</div>
      <button onClick={generateAnswer}>Answer to your problem</button>
      <div>{answer}</div>
    </div>
  );
}

export default App;
