import DecrementCounter from "./Components/DecrementCounter";
import IncrementCounter from "./Components/IncrementCounter";

function App() {
  return (
    <div
      class="container mx-auto bg-info text-light my-5 d-flex flex-row justify-content-around py-5 "
      className="App"
      style={{
        width: "45%",
        height: "15rem",
      }}
    >
      <DecrementCounter />
      <IncrementCounter />
    </div>
  );
}

export default App;
