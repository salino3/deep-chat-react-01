import { DeepChat } from "deep-chat-react";
import "./App.css";

function App() {
  const history = [
    { role: "ai", text: "¿En qué ciudad vives?" },
    { role: "user", text: "Vivo en Málaga" },
  ];

  return (
    <div className="root">
      <DeepChat
        // demo={true}
        connect={{
          stream: true,
        }}
        directConnection={{
          openAI: {
            key: import.meta.env.VITE_MY_KEY,
            // model: "gpt-3.5-turbo"
            chat: {
              max_tokens: 100,
            },
          },
        }}
        style={{
          background: "0a0a0a",
          borderRadius: "8px",

          height: "50rem",
          width: "30rem",
        }}
        textInput={{
          placeholder: {
            style: { color: "blue" },
            text: "Hi there, Ask me...",
          },
        }}
        history={history}
      />
    </div>
  );
}

export default App;
