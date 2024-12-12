//Select relevant elements:
var title = document.querySelector(".title");
var date = document.querySelector(".date");
var description = document.querySelector(".description");
var spaceImage = document.getElementById("spaceImage");
var copyright = document.querySelector(".copyright");

var APIkey = "K8jf2EtMCnVq9g4aVD01td9nkigsstb4VvBTdV4b";
var url = "https://api.nasa.gov/planetary/apod?api_key=" + APIkey;

fetch(url)
  .then(function (response) {
    return response.json(); //Parse response into JSON
  })
  .then(function (data) {
    title.textContent = data.title;
    description.textContent = data.explanation;
    spaceImage.src = data.url;
    console.log(data.url);
  })
  .catch(function (error) {
    console.log(error);
  });
