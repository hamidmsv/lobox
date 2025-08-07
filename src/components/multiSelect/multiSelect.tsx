import { useState, useRef, useEffect } from "react";
import "./multiSelect.scss";
import arrowDownIcn from "../../assets/icons/arrow-down.png";
import type { Option, MultiSelectProps } from "./types";

const MultiSelect: React.FC<MultiSelectProps> = ({ options, onAddOption }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");

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

  const handleEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const trimmed = inputValue.trim();
    if (e.key === "Enter" && trimmed !== "") {
      const isExisted = options.some((opt) => opt.label === trimmed);
      if (!isExisted) {
        const newOption = {
          label: trimmed,
          value: trimmed.toLowerCase(),
        };
        onAddOption(newOption);
      }

      setInputValue("");
      setIsOpen(true);
    }
  };

  return (
    <div className="multi-select" ref={wrapperRef}>
      <div className="selected-items">
        <input
          type="text"
          className="input"
          placeholder="Select ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleEnterDown}
        />
        <img className={`arrow ${isOpen ? "open" : ""}`} src={arrowDownIcn} />
      </div>
      {isOpen && (
        <ul className="items-list">
          {options?.map((option: Option) => (
            <li key={option.value} className="item">
              <span className="item-text">{option.label}</span>
              <span>
                {option?.icon && (
                  <img
                    className="item-icon"
                    src={option.icon}
                    alt={option.value}
                  />
                )}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelect;
