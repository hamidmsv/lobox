import { useState } from "react";
import "./multySelect.scss";

import type { Option, MultiSelectProps } from "./types";

const MultiSelect: React.FC<MultiSelectProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(options);

  return (
    <div className="multi-select" onClick={() => setIsOpen(!isOpen)}>
      {isOpen && (
        <ul>
          {options?.map((option) => (
            <li className="multi-select-item">
              <span className="multi-select-item-text">{option.label}</span>
              <span>
                <img className="multi-select-item-icon" src={option.icon} alt={option.value} />
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelect;
