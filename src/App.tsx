import "./App.scss";
import MultiSelect from "./components/multiSelect/multiSelect";
import { options } from "./data/options";
function App() {
  return (
    <div className="main">
      <MultiSelect options={options} />
    </div>
  );
}

export default App;
