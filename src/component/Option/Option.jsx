import React from 'react'

export const Option = ({onClick='onClick' , option='option' , def=false}) => {
    return (
      <div onClick={onClick}  className={`options ${def ? 'options-default' : ''}`}>{option}</div>
  
    )
}
