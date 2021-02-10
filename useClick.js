import { useEffect, useState, useRef } from "react";

const useClick = (onClick) => {
  const sayHello = () => console.log("say hello");
  const element = useRef(sayHello);
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      // componentWillUnmount - return
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }); // no dependency

  // dependency가 존재한다면 useEffect의 if문은 componentDidMount 때만 동작
  // dependency가 존재하지 않으므로 componentDidMount, componentWillUpdate 동작
  return element;
};

export default function App() {
  const title = useClick();
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
