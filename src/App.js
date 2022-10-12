// deps
import { useState, useEffect } from "react";
// components
import { LaunchInfo } from "./components/LaunchInfo";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(await data);
  };

  useEffect(() => {
    fetchData("https://ll.thespacedevs.com/2.2.0/launch/");
  }, []);

  return <>{data ? <LaunchInfo data={data.results} /> : null}</>;
}

export default App;
