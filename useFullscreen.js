import { useEffect, useState, useRef } from "react";

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(isFull);
    }
  };
  const triggerFullscreen = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullScreen) {
        element.current.webkitRequestFullScreen();
      } else if (element.current.msRequestFullScrren) {
        element.current.webkitRequestFullScreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    if (element.current) {
      if (element.current.exitFullscreen) {
        element.current.exitFullscreen();
      } else if (element.current.mozExitFullscreen) {
        element.current.mozExitFullscreen();
      } else if (element.current.webkitExitFullscreen) {
        element.current.webkitExitFullscreen();
      } else if (element.current.msExitFullscreen) {
        element.current.webkitExitFullscreen();
      }
      runCb(false);
    }
  };
  return { element, triggerFullscreen, exitFull };
};

export default function App() {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFullscreen, exitFull } = useFullscreen(onFulls);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFullscreen}>Make fullscreen</button>
    </div>
  );
}
