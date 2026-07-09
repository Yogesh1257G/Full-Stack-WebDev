function createCard(title, cName, views, old, duration, thumbnail) {

    let card = document.createElement("div");
    card.classList.add("card");
    let viewsStr;
    if (views<=999)
        viewsStr = views;
    else if (views <=999000)
        viewsStr = views/1000 + "K";
    else if (views <=999000000)
        viewsStr = views/1000000 + "M";

    card.innerHTML = `
    <div class="imgBox">
        <img src="${thumbnail}">
        <div class="imgText">
            <h4>${duration}</h4>
        </div>
    </div>
    <div class="text">
        <div class="vName">
        <h2 class="name">${title}</h2>
        </div>
        <div class="smallText">
            <p>${cName} . ${viewsStr} views . ${old} months ago</p>
        </div>
    </div>
    `;

    document.querySelector(".container").append(card);
    card.style.cssText = `
    display: flex;
    border: 2px solid black;
    border-radius: 5px;
    `;
    let smallText = document.getElementsByClassName("smallText");
    smallText[0].style.cssText = `
    color : #606060;
    display:flex;
    `;
    let image = document.querySelector("img");
    image.setAttribute("width", "300");
}

createCard(
    "How to be a friend", "Your Friend", 324500, 3, "20:02", "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0"
);