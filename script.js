const movies = [
  {
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    review: "Layer after layer, Chris Nolan drags you into a world of limitless imagination. With his usual ensamble, led by Leonardo DiCaprio at his peak, Nolan keeps audiences at the edge of their seats throughout the movie, and heavily discussing the ending. ",
    stars: 4.5
  },
  {
    title: "The Grand Budapest Hotel",
    poster: "https://image.tmdb.org/t/p/w500/nX5XotM9yprCKarRH4fzOq1VM1J.jpg",
    review: "Vivid Colorscapes, whimsical music, and sharp writing bring together an amazing package of a movie. Wes Anderson delivers as he always does.",
    stars: 4.5
  },
  {
    title: "The Matrix",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    review: "Philisophical questions mixed with amazingly choreographed action. The Matrix was a movie that questioned the nature of our reality and asked questions that the majority of humans thought too abstract to ask",
    stars: 5
  },
  {
    title: "Parasite",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    review: "Class differences mixed with a slight twinge of Horror, Parasite is a masterclass in writing",
    stars: 4.5
  },
  {
    title: "Dune (2021)",
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    review: "Denis V. does a FANTASTIC job bringing the scale of Frank Hubert's novel to life. You truly feel like you are viewing the Harkonnen infested universe that previous adaptions failed to capture.",
    stars: 4
  },
  {
    title: "Whiplash",
    poster: "https://image.tmdb.org/t/p/w500/oPxnRhyAIzJKGUEdSiwTJQBa4l8.jpg",
    review: "Intense, visceral, and brilliantly performed.",
    stars: 5
  },
  {
    title: "Pulp Fiction",
    poster: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
    review: "A rare example of well executed non-linear story telling",
    stars: 5
  },
  {
    title: "Everything Everywhere All At Once",
    poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    review: "A kaleidoscope of chaos, emotion, and creativity.",
    stars: 4.5
  },
  {
    title: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    review: "A crime saga disguised as a superhero movie.",
    stars: 5
  },
  {
    title: "Her",
    poster: "https://image.tmdb.org/t/p/w500/yk4J4aewWYNiBhD49WD7UaBBn37.jpg",
    review: "A beautiful meditation on love and loneliness.",
    stars: 4.5
  },
  {
    title: "La La Land",
    poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    review: "A dazzling modern musical full of dreams.",
    stars: 4
  },
  {
    title: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    review: "Ambitious, emotional, and visually jaw-dropping.",
    stars: 4.5
  },
  {
    title: "Moonlight",
    poster: "https://image.tmdb.org/t/p/w500/9MSwG6t1E1gYzK0HqJw0yJQFqvh.jpg",
    review: "A quiet, powerful story of identity and intimacy.",
    stars: 4.5
  },
  {
    title: "No Country for Old Men",
    poster: "https://image.tmdb.org/t/p/w500/6d5XOczc226jECq0LIX0siKtgHR.jpg",
    review: "Bleak, brilliant, and masterfully acted.",
    stars: 5
  },
  {
    title: "Arrival",
    poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    review: "A haunting sci-fi tale of language and loss.",
    stars: 4.5
  },
  {
    title: "The Social Network",
    poster: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
    review: "Sharp, fast, and loaded with tension.",
    stars: 4
  },
  {
    title: "Lady Bird",
    poster: "https://image.tmdb.org/t/p/w500/iySFtKLrWvVzXzlFj7x1zalxi5G.jpg",
    review: "Heartfelt, raw, and wickedly funny.",
    stars: 4
  },
  {
    title: "The Lighthouse",
    poster: "https://image.tmdb.org/t/p/w500/qZ1PaM3WcVR7ZBShOQYyC1V6ytb.jpg",
    review: "Madness and mythology by candlelight.",
    stars: 4
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    review: "A revolutionary animated explosion of style.",
    stars: 5
  },
  {
    title: "Get Out",
    poster: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    review: "A razor-sharp blend of horror and satire.",
    stars: 4.5
  },
  {
    title: "Portrait of a Lady on Fire",
    poster: "https://image.tmdb.org/t/p/w500/8Fx1N1KXkA0jZK6QYoVz0F6At5R.jpg",
    review: "Slow-burn romance with painterly beauty.",
    stars: 4.5
  },
  {
    title: "The Batman (2022)",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    review: "A moody, noir-soaked detective epic.",
    stars: 4
  },
  {
    title: "The Banshees of Inisherin",
    poster: "https://image.tmdb.org/t/p/w500/4yFG6cSPaCaPhyJ1vtGOtMD1lgh.jpg",
    review: "Darkly funny and deeply human.",
    stars: 4.5
  },
  {
    title: "Top Gun: Maverick",
    poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    review: "A little generic, but really benefited by the updated technology of our times",
    stars: 4
  },
  {
    title: "The Farewell",
    poster: "https://image.tmdb.org/t/p/w500/7M62l0My3K0zKUXaLVVmpP7EUcH.jpg",
    review: "A tender balance of cultures and grief.",
    stars: 4
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
