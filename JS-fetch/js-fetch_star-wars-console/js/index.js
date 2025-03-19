console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);

  if (!response.ok) {
    console.log("error");
  }

  const data = await response.json();

  console.log(data);
}
fetchData();
