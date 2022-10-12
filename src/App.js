// deps
import { useState, useEffect } from "react";
// components
import { LaunchInfo } from "./components/LaunchInfo";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData(
      "https://api.spacexdata.com/v4/launches/5eb87cd9ffd86e000604b32a"
    );
  }, []);

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(await data);
    console.log(await data);
  };

  return <>{data ? <LaunchInfo launch={data} /> : null}</>;
}

export default App;
