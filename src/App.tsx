import Calculator from "./Calculator";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Tip Calculator</h1>
        <p>
          Given your bill amount and your tip percentage I will give you tyour
          total bill
        </p>
      </header>
      <main className="main-container">
        <Calculator />
      </main>
    </>
  );
}

export default App;
