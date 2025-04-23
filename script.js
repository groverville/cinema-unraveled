const movies = [
  {
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    review: "A masterclass in narrative complexity and visual storytelling.",
    stars: 5
  },
  {
    title: "The Grand Budapest Hotel",
    poster: "https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg",
    review: "Whimsical, witty, and visually stunning.",
    stars: 4.5
  }
];

const gallery = document.getElementById("movieGallery");
const popup = document.getElementById("popup");
const movieDetails = document.getElementById("movieDetails");

movies.forEach(movie => {
  const img = document.createElement("img");
  img.src = movie.poster;
  img.alt = movie.title;
  img.onclick = () => showPopup(movie);
  gallery.appendChild(img);
});

function showPopup(movie) {
  popup.style.display = "flex";
  movieDetails.innerHTML = `
    <h2>${movie.title}</h2>
    <p>${movie.review}</p>
    <p>Rating: ${"★".repeat(Math.floor(movie.stars))}${movie.stars % 1 ? "½" : ""}</p>
  `;
}

function closePopup() {
  popup.style.display = "none";
}
