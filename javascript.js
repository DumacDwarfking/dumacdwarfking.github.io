var fetcher = document.querySelector(".fetcher");
var container = document.querySelector(".container");
var dateSelector = document.getElementById("dateSelector");

var chosenDate = new Date().toISOString().split("T")[0];

//Fetch on button click, display elements:
fetcher.addEventListener("click", () => {
  var selectedDate = dateSelector.value;

  container.classList.add("active");

  var APIkey = "K8jf2EtMCnVq9g4aVD01td9nkigsstb4VvBTdV4b";
  var url =
    "https://api.nasa.gov/planetary/apod?api_key=" +
    APIkey +
    "&date=" +
    selectedDate;

  fetch(url)
    .then(function (response) {
      //Parse response into JSON
      return response.json();
    })
    .then(function (data) {
      //Select relevant elements:
      var title = document.querySelector(".title");
      var date = document.querySelector(".date");
      var description = document.querySelector(".description");
      var spaceImage = document.getElementById("spaceImage");
      var copyright = document.querySelector(".copyright");

      //Add text and image to elements
      spaceImage.src = data.url;
      title.textContent = data.title;
      date.textContent = data.date;
      description.textContent = data.explanation;

      let copyrightName = data.copyright;
      copyright.textContent = "© " + copyrightName;
    })
    .catch(function (error) {
      console.log(error);
    });
});
