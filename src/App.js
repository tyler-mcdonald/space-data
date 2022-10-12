// deps
import { useState, useEffect } from "react";
// components
import { LaunchInfo } from "./components/LaunchInfo";

function App() {
  const [launchData, setLaunchData] = useState(null);
  const [rocketData, setRocketData] = useState(null);

  // Get launch data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api.spacexdata.com/v4/launches/5eb87cd9ffd86e000604b32a"
      );
      const data = await response.json();
      setLaunchData(data);
    }
    fetchData();
  }, []);

  // Get rocket data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.spacexdata.com/v4/rockets/${launchData.rocket}`
      );
      const data = await response.json();
      setRocketData(data);
    }
    if (launchData) {
      fetchData();
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
