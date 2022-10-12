import fetch from "node-fetch";

async function fetchData() {
  const url = "https://ll.thespacedevs.com/2.2.0/launch/";
  const response = await fetch(url);
  return await response.json();
}

// function buildDataObject(data) {
//   const launch = data[0];
// }

const data = await fetchData();
console.log(data);

// buildDataObject(data);
