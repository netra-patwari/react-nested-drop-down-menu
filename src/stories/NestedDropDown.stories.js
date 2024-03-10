import React from 'react';
import { NestedDropDown } from "../component/NestedDropdown/NestedDropdown";



export default {
  component: NestedDropDown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },

};


export const Primary = {
  render: () => <NestedDropDown />,
};