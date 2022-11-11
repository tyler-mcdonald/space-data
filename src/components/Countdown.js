import { useEffect, useState } from "react";

export const Countdown = () => {
  const [launchData, setLaunchData] = useState(null);

  useEffect(() => {
    getLaunchData();
  }, []);

  async function getLaunchData() {
    const response = await fetch("https://api.spacexdata.com/v4/launches");
    const data = await response.json();
    setLaunchData(data);
  }

  console.log(launchData);
};
