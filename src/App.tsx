import "./App.scss";
import MultiSelect from "./components/multiSelect/multiSelect";

function App() {
  return (
    <div className="main">
      <MultiSelect options={[{ label: "test", value: "test" }]} />
    </div>
  );
}

export default App;
