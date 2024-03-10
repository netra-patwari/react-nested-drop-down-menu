import React from "react";
import { CheveronLeft , Setting } from "../Icons";
export const Label = ({ bot='bot' , lang='lang' , icon='setting' , def=false , onclick}) => {
  return (
    <>
      <div
        data-label="HSE"
        onClick={onclick}
        className={`select-drop-items-labels ${def ? 'default' : ''}`}
      >
        <div className="left-2">
          <h4 className={`bot-name ${def ? 'selected' : ''}`}>{bot}</h4>
          <span className="tab">{lang}</span>
        </div>
        <div className="rigth">
          {icon === 'setting' ? <Setting /> : <CheveronLeft />}
        </div>
      </div>
    </>
  );
};

