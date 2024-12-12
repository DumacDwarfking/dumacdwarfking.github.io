let url = "https://api.nasa.gov/planetary/apod";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not fetch resource!");
    }
    return response.json();
  })
  .then((data) => console.log(data.name))
  .catch((error) => console.error(error));
