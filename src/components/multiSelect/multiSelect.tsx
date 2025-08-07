import { useState, useRef, useEffect } from "react";
import "./multySelect.scss";

import type { Option, MultiSelectProps } from "./types";

const MultiSelect: React.FC<MultiSelectProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="multi-select" ref={wrapperRef}>
      <div className="selected-items">
        <input
          type="text"
          className="search-input"
          placeholder="Search ..."
          onFocus={() => setIsOpen(true)}
        />
      </div>
      {isOpen && (
        <ul className="items-list">
          {options?.map((option) => (
            <li key={option.value} className="item">
              <span className="item-text">{option.label}</span>
              <span>
                <img
                  className="item-icon"
                  src={option.icon}
                  alt={option.value}
                />
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelect;
