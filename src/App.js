// deps
import { useState, useEffect } from "react";
// components
import { LaunchInfo } from "./components/LaunchInfo";

function App() {
  const [launchData, setLaunchData] = useState(null);
  const [rocketData, setRocketData] = useState(null);

  async function fetchData(url, setState) {
    const response = await fetch(url);
    const data = await response.json();
    setState(data);
  }

  // Get launch data
  useEffect(() => {
    fetchData(
      "https://api.spacexdata.com/v4/launches/5eb87cddffd86e000604b32f",
      setLaunchData
    );
  }, []);

  // Get rocket data
  useEffect(() => {
    if (launchData) {
      fetchData(
        `https://api.spacexdata.com/v4/rockets/${launchData.rocket}`,
        setRocketData
      );
    }
  }, [launchData]);

  return (
    <>
      {launchData && rocketData ? (
        <LaunchInfo launch={launchData} rocket={rocketData} />
      ) : null}
    </>
  );
}

export default App;
