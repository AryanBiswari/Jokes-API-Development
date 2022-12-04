const getJokes = document.getElementById("jokes_para");
const btn = document.getElementById("btn");
const url =
  "https://hindi-jokes-api.onrender.com/jokes?api_key=ffe49ed757b3ff183e2e325046e1";

let fetchJokes = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => 
    {
        getJokes.textContent = `${data.jokeContent}`;
    });
};
// fetchJokes();
btn.addEventListener("click", fetchJokes);