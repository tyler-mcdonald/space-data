async function fetchData() {
  const url =
    "https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0";
  const data = await fetch(url);
  console.log(data);
}

fetchData();
