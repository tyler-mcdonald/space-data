import { useEffect, useState } from "react";

export const Countdown = () => {
  const [launchData, setLaunchData] = useState([]);
  const [nextLaunch, setNextLaunch] = useState(null);

  useEffect(() => {
    async function getLaunchData() {
      const response = await fetch("https://api.spacexdata.com/v4/launches");
      const data = await response.json();
      setLaunchData(data);
    }
    getLaunchData();
  }, []);

  useEffect(() => {
    setNextLaunch(getNextLaunch());
  }, [launchData]);

  function getNextLaunch() {
    const now = new Date().getTime() / 1000;
    let nextLaunch;

    for (let launch of launchData) {
      if (launch.date_unix > now) {
        nextLaunch = launch;
        break;
      }
    }

    return nextLaunch;
  }

  console.log(nextLaunch);
};
