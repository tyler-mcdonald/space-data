import { useEffect, useState } from "react";

export const Countdown = () => {
  const [launch, setLaunch] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0); // initial????

  useEffect(() => {
    const data = fetchData("https://api.spacexdata.com/v4/launches/next");
    setState(data, setLaunch);
  }, []);

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async function setState(state, setState) {
    setState(await state);
  }

  // calculate time until launch
  async function getTimeRemaining() {
    const currentTime = new Date().getTime();
    const launchTime = new Date(await launch.date_utc).getTime();
    const timeRemaining = launchTime - currentTime;
    // format
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)); // second * minute * hour * day
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24); // (sec * min * hr)
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    return { days, hours, minutes, seconds };
  }
  console.log(getTimeRemaining());

  function updateCountdown() {
    // update timer state each second
    setInterval(() => {
      const t = getTimeRemaining();
      setTimeRemaining(t);
    }, 1000);
    // make sure to clean up
  }

  // update until launch happens
  // when launch happens
  //      get next launch

  return (
    <div>
      <h1>
        <p>{`${timeRemaining.days}:${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}</p>
      </h1>
    </div>
  );
};
