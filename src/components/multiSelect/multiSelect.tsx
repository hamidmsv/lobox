import { useState } from "react";
import "./multySelect.scss";


import type { Option, MultiSelectProps } from "./types";

const MultiSelect: React.FC<MultiSelectProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(options);

  return <div className="multi-select">{isOpen ? <></> : <></>}</div>;
};

export default MultiSelect;
