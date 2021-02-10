import { useEffect, useState, useRef } from "react";

export default function App() {
  const potato = useRef(); // getElementById 와 비슷한 기능
  setTimeout(() => potato.current.focus(), 5000);
  // 페이지가 로드되고 5초 후에 input이 자동 focus됨
  return <div className="App">Hi<input ref={potato} placeholder="la" /></div>;
}
