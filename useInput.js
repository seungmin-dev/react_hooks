import "./styles.css";
import { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

export default function App() {
  const maxLen = (value) => value.length <= 12;
  const name = useInput("Hi, ", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}
