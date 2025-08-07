import { useState, useRef, useEffect } from "react";
import "./multiSelect.scss";
import arrowDownIcn from "../../assets/icons/arrow-down.png";
import type { Option, MultiSelectProps } from "./types";

const MultiSelect: React.FC<MultiSelectProps> = ({ options, onAddOption }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
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

  const toggleOption = (option: Option) => {
    const alreadySelected = selectedOptions.some(
      (item) => item.value === option.value
    );
    if (alreadySelected) {
      setSelectedOptions((prev) =>
        prev.filter((item) => item.value !== option.value)
      );
    } else {
      setSelectedOptions((prev) => [...prev, option]);
    }
  };
  return (
    <div className="multi-select" ref={wrapperRef}>
      <div className="selected-items">
        {selectedOptions.map((option) => (
          <div key={option.value} className="tag">
            {option.label}
            <span
              className="remove-tag"
              onClick={() =>
                setSelectedOptions((prev) =>
                  prev.filter((item) => item.value !== option.value)
                )
              }
            >
              ×
            </span>
          </div>
        ))}

        <input
          type="text"
          className="input"
          placeholder="Type & Select ..."
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
            <li
              key={option.value}
              className={`item ${
                selectedOptions.some(
                  (selected) => selected.value === option.value
                )
                  ? "selected"
                  : ""
              }`}
              onClick={() => toggleOption(option)}
            >
              <div className="item-content">
                <span className="item-text">{option.label}</span>
                {option?.icon && (
                  <span>
                    <img
                      className="item-icon"
                      src={option.icon}
                      alt={option.value}
                    />
                  </span>
                )}
              </div>
              {selectedOptions.some(
                (selected) => selected.value === option.value
              ) && <span className="checkmark">✔</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelect;
