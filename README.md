# React Nested Drop Down Menu

A simple and customizable nested drop-down menu component for React.

## Installation

You can install `react-nested-drop-down-menu` via npm :

```bash
npm install react-nested-drop-down-menu
```

## Usage

```jsx
import { NestedDropDown } from 'react-nested-drop-down-menu';

function App() {
  const dropdownDataText = [
    {
      label: "Cake",
      options: ["Chocolate", "Vanilla", "Chips"]
    },
    {
      label: "Drink",
      options: ["Chocolate", "Coke", "Strawberry"]
    },
    {
      label: "Cookies",
      options: ["Strawberry", "Vanilla", "Dark Forest"]
    }
  ];

  return (
    <>
      <NestedDropDown dropdownDataText={dropdownDataText} />
    </>
  );
}

export default App;
```

### Props

- `dropdownDataText`: An array of objects representing the nested structure of the drop-down menu.
  - `label`: The label of the parent menu item.
  - `options`: An array of strings representing the options for the parent menu item.


## Author

Created by Netra Patwari - [Netra Patwari](https://github.com/netra-patwari)