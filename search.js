const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/artists?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function hidePlaylists() {
  resultPlaylist.classList.add("hidden");
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  results.forEach(element => {
    artistImage.src = element.urlImg;
    artistName.innerText = element.name;
  });
  resultArtist.classList.remove("hidden");
}



searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    resultPlaylist.classList.remove("hidden");
    resultArtist.classList.add("hidden");
    return
  }
  requestApi(searchTerm);
});
