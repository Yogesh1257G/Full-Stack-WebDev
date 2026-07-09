const movieNameBox = document.getElementById("movieNameBox");
const saveMovieBtn = document.getElementById("saveMovieBtn");
const movieCards = document.getElementById("movieCards");

saveMovieBtn.addEventListener("click", addMovieToShelf);

function addMovieToShelf() {

    let movieName = movieNameBox.value.trim();

    if(movieName === ""){
        alert("Enter a movie name first!");
        return;
    }

    let movieItem = document.createElement("li");
    movieItem.className = "movieItem";

    let movieTitle = document.createElement("span");
    movieTitle.className = "movieTitle";
    movieTitle.innerText = movieName;

    let actionBox = document.createElement("div");
    actionBox.className = "actionBox";

    let doneBtn = document.createElement("button");
    doneBtn.className = "doneBtn";
    doneBtn.innerText = "Watched";

    doneBtn.onclick = function(){
        movieTitle.classList.toggle("movieDone");
    };

    let removeBtn = document.createElement("button");
    removeBtn.className = "removeBtn";
    removeBtn.innerText = "Delete";

    removeBtn.onclick = function(){
        movieItem.remove();
    };

    actionBox.appendChild(doneBtn);
    actionBox.appendChild(removeBtn);

    movieItem.appendChild(movieTitle);
    movieItem.appendChild(actionBox);

    movieCards.appendChild(movieItem);

    movieNameBox.value = "";
}