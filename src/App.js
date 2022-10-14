import { useState, useEffect } from "react";
import { LaunchInfo } from "./components/LaunchInfo";

function App() {
  const [launchData, setLaunchData] = useState(null);
  const [rocketData, setRocketData] = useState(null);
  const randomLaunch = launchData
    ? launchData[Math.floor(Math.random() * launchData.length)]
    : null;

  // Set launch data
  useEffect(() => {
    fetchData("https://api.spacexdata.com/v4/launches", setLaunchData);
  }, []);

  // Get rocket data
  useEffect(() => {
    if (launchData) {
      fetchData(
        `https://api.spacexdata.com/v4/rockets/${randomLaunch.rocket}`,
        setRocketData
      );
    }
  }, [launchData]);

  async function fetchData(url, setState) {
    const response = await fetch(url);
    const data = await response.json();
    setState(data);
  }

  return (
    <>
      {launchData && rocketData ? (
        <LaunchInfo launch={randomLaunch} rocket={rocketData} />
      ) : null}
    </>
  );
}

export default App;
