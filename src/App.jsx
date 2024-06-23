import "./App.css";
import InputText from "./components/InputText";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ThemeToggle />
      <InputText />
    </div>
  );
}

export default App;