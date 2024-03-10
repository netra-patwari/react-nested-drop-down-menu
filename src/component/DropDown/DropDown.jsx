import React, { useState, useEffect, useRef } from "react";
import { Label } from "../Label";
import { Option } from "../Option";

export const DropDown = ({dropdownDataText=[]}) => {
  const [select, setSelect] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(false);
  const [selectedLabelText, setSelectedLabelText] = useState('Select');
  const [selectedOptionText, setSelectedOptionText] = useState('');
  const menuRef = useRef();

  useEffect(() => {
    const handeler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setSelect(false);
      }
    };
    document.addEventListener("mousedown", handeler);
  });

  const selectClick = () => {
    setSelect(!select);
  };

  const labelClick = (labelValue) => {
    setSelectedLabelText(labelValue);
    setSelectedLabel(!selectedLabel);
  };

  const optionClick = (option) => {
    setSelectedOptionText(option);
  };

  return (
    <div className="select-tab" ref={menuRef}>
      <div role="button" className="selectBtn" onClick={selectClick}>
        <div className="button-content">
          <div className="left">
            <strong>{selectedLabelText}</strong>
            <p className="muted-text">{selectedOptionText}</p>
          </div>
        </div>
      </div>
      <div className={`select-drop-content ${select ? "show" : ""}`}>
        {dropdownDataText.map((x, index) => (
          <div
            key={index}
            className={`labels-grid ${selectedLabel ? "hide" : ""}`
          }
          >
            <Label
              key={`label_${index}`}
              bot={x.label}
              lang={x.options.includes(selectedOptionText) ? selectedOptionText : x.options[0]} 
              onclick={() => labelClick(x.label)}
              def={`${selectedLabelText === x.label ? "true" : ""}`}
            >
              {x}
            </Label>
          </div>
        ))}

        {dropdownDataText.map((x, i) => (
          <div
            key={`option_${i}`}
            className={`options-grid ${
              selectedLabel && selectedLabelText === `${x.label}` ? "show" : ""
            }`}
          >
            <Label
              bot={x.label}
              def="true"
              icon="chevron-left"
              onclick={() => labelClick(x.label)}
              lang={x.options.includes(selectedOptionText) ? selectedOptionText : x.options[0]} 

              />
            <div className="option-lists">
              {x.options.map((y, j) => (
                <Option
                  key={`option_${i}_${j}`}
                  option={y}
                  onClick={() => optionClick(y)}
                  def={selectedLabel && selectedLabelText === x.label && selectedOptionText === y ? "true" : ""}
                  />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



