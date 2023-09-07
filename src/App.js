import DecrementCounter from "./Components/DecrementCounter";
import IncrementCounter from "./Components/IncrementCounter";

function App() {
  return (
    <div
      className="App"
      style={{
        padding: "3rem",
        width: "100%",
        height: "100vh",
        margin: "auto",
        alignItems: "center",
        backgroundColor: "dodgerblue",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <DecrementCounter />
      <IncrementCounter />
    </div>
  );
}

export default App;
