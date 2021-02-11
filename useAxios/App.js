import { useEffect, useState, useRef } from "react";
import useAxios from "./useAxios";

export default function App() {
  const { loading, data, error, refetch } = useAxios({
    url:
      "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"
  });
  console.log(
    `Loading : ${loading}\n Data : ${JSON.stringify}\n Error : ${error}`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}
