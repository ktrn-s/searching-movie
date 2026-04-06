gsap.from(".movie", {opacity: 0, y:20, duration: 0.6, stagger: 0.1});
gsap.from("#search", { delay: 1.3, duration: 1, y: 50, opacity: 0, ease: "back.out(1.5)" });
gsap.from(".heading", {delay: 1, opacity: 0, y:20, duration: 0.6, stagger: 0.1});
gsap.from("#btn-img", {delay: 1, opacity: 0, y:20, duration: 0.6,  ease: "back.out(1.5)" });
gsap.from(".text-part", {delay: 1.2, opacity: 0, y:20, duration: 0.6,  ease: "back.out(1.5)" });

const api = {
    endpoint: "https://www.omdbapi.com/",
    key: "724eec20" 
};

const input = document.querySelector("#search");
const results = document.querySelector("#results");
const bnt = document.querySelector("#btn");

function renderMovies(movieList) {
    results.innerHTML = "";

    movieList.forEach(movie => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        movieDiv.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <p><a href="${movie.imdb}" target="_blank">${movie.title} ${movie.year}</a></p>
        `;

        results.appendChild(movieDiv);

        gsap.from(movieDiv, { duration: 0.7, opacity: 0, y: 30, ease: "power2.out" });
    });
}

renderMovies(defaultMovies);

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        const title = input.value.toLowerCase();
        searchMovies(title);
    }
});

function searchMovies(title) {
    const movies = document.querySelectorAll(".movie");
    let foundLocal = false;

    movies.forEach(movie => {
        const name = movie.querySelector("p").textContent.toLowerCase();
        if (name.includes(title) || title === "") {
            movie.style.display = "block";
            foundLocal = true;
        } else {
            movie.style.display = "none";
        }
    });

    if (!foundLocal && title !== "") {
        getMovieFromAPI(title);
    }
}

async function getMovieFromAPI(title) {
    const res = await fetch(`${api.endpoint}?apikey=${api.key}&t=${title}`);
    const data = await res.json();

    results.innerHTML = "";

    displayMovie(data);
}

function displayMovie(data) {
    if (data.Response === "True") {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        movieDiv.innerHTML = `
            <img src="${data.Poster !== "N/A" ? data.Poster : 'placeholder.jpg'}" alt="${data.Title}">
            <p><a href="https://www.imdb.com/title/${data.imdbID}" target="_blank">${data.Title} (${data.Year})</a></p>
        `;

        results.appendChild(movieDiv);

        gsap.from(movieDiv, { duration: 0.7, opacity: 0, y: 30, ease: "power2.out" });
    } else {
        results.innerHTML = "<p> No results found. Try another title!</p>";
    }
}

bnt.addEventListener("click", reloadAll);
function reloadAll() {
    renderMovies(defaultMovies);
    input.value = "";
}


