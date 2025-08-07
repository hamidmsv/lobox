import { useState } from "react";
import "./styles/global.scss";
import MultiSelect from "./components/multiSelect/multiSelect";
import { options as initialOptions } from "./data/options";
import type { Option } from "./components/multiSelect/types";
function App() {
  const [options, setOptions] = useState<Option[]>(initialOptions);
  const handleAddOption = (newOption: Option) => {
    setOptions((prev) => [...prev, newOption]);
  };
  return (
    <div className="main">
      <MultiSelect options={options} onAddOption={handleAddOption} />
    </div>
  );
}

export default App;
