import { useState } from "react";
import natroliteClient from "./api/natroliteClient";

function App() {
  const [answer, setAnswer] = useState("...");

  const generateAnswer = async () => {
    natroliteClient.getTherapy().then((therapy) => setAnswer(therapy.answer!));
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
