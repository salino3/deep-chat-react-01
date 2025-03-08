import { DeepChat } from "deep-chat-react";
import "./App.css";

function App() {
  return (
    <div className="root">
      <DeepChat
        demo={true}
        directConnection={{
          openAI: {
            key: import.meta.env.MY_KEY,
          },
        }}
        style={{
          background: "0a0a0a",
          borderRadius: "8px",
        }}
        textInput={{
          placeholder: {
            style: { color: "blue" },
            text: "Hi there, Ask me",
          },
        }}
      />
    </div>
  );
}

export default App;
