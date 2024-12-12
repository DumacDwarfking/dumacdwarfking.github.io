var fetcher = document.querySelector(".fetcher");
var container = document.querySelector(".container");

//Fetch on button click, display elements:
fetcher.addEventListener("click", () => {
  fetcher.classList.toggle("active");
  container.classList.toggle("active");

  var APIkey = "K8jf2EtMCnVq9g4aVD01td9nkigsstb4VvBTdV4b";
  var url = "https://api.nasa.gov/planetary/apod?api_key=" + APIkey;

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
