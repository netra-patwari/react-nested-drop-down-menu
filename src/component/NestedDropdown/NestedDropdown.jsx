import React from 'react';
import { DropDown } from '../DropDown';
import '../style.scss';


export const NestedDropDown = ({dropdownDataText=[]}) => {
  return (
    <>
       <DropDown dropdownDataText={dropdownDataText}/>

    </>
  )
}
