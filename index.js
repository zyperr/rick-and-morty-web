const cardContainer = document.getElementById("cardCharacter");
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");

const urlApis = {
  characters: `https://rickandmortyapi.com/api/character`,
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode",
};

const getCharacters = async (url) => {
  const characters = await fetch(url);
  const data = await characters.json();
  console.log(data);
  return data;
};

const card = async () => {
  try {
    const characters = await getCharacters(urlApis.characters);
    characters.results.map((character) => {
      let nameChr = character.name;
      let imgChr = character.image;
      let statusChr = character.status;

      const FigureCard = document.createElement("figure");
      const imgCard = document.createElement("img");

      FigureCard.appendChild(imgCard);

      imgCard.setAttribute("src", imgChr);

      const cardHeaderContainer = document.createElement("div");

      cardHeaderContainer.classList.add("card__header");

      cardHeaderContainer.appendChild(FigureCard);

      const cardTitle = document.createElement("h2");
      cardTitle.title = nameChr;

      cardTitle.textContent = nameChr;

      const statusDiv = document.createElement("div");
      const statusIndicator = document.createElement("span");
      const statusText = document.createElement("p");

      statusDiv.classList.add("status__container");

      statusText.textContent = `status: ${statusChr}`;
      statusIndicator.classList.add(statusChr);
      statusDiv.appendChild(statusIndicator);
      statusDiv.appendChild(statusText);

      cardHeaderContainer.appendChild(statusDiv);
      cardHeaderContainer.appendChild(cardTitle);
      cardContainer.appendChild(cardHeaderContainer);
    });
  } catch (error) {
    console.error(error);
  }
};
card();
let page = 1;
btnNext.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  page < 43 ? page++ : page;
  getPagination();
});

btnPrev.addEventListener("click", () => {
  cardContainer.innerHTML = "";
  page > 1 ? page-- : (page = 1);

  getPagination();
});
const getPagination = async () => {
  try {
    const characters = await getCharacters(
      urlApis.characters + `?page=${page}`
    );
    characters.results.map((character) => {
      let nameChr = character.name;
      let imgChr = character.image;
      let statusChr = character.status;

      const FigureCard = document.createElement("figure");
      const imgCard = document.createElement("img");

      FigureCard.appendChild(imgCard);

      imgCard.setAttribute("src", imgChr);

      const cardHeaderContainer = document.createElement("div");

      cardHeaderContainer.classList.add("card__header");

      cardHeaderContainer.appendChild(FigureCard);

      const cardTitle = document.createElement("h2");
      cardTitle.title = nameChr;

      cardTitle.textContent = nameChr;

      const statusDiv = document.createElement("div");
      const statusIndicator = document.createElement("span");
      const statusText = document.createElement("p");

      statusDiv.classList.add("status__container");

      statusText.textContent = `status: ${statusChr}`;
      statusIndicator.classList.add(statusChr);
      statusDiv.appendChild(statusIndicator);
      statusDiv.appendChild(statusText);

      cardHeaderContainer.appendChild(statusDiv);
      cardHeaderContainer.appendChild(cardTitle);
      cardContainer.appendChild(cardHeaderContainer);
    });
  } catch (error) {
    console.error(error);
  }
};

const chrResultForm = document.querySelector(".search-character-result");
const form = document.querySelector(".search__container");
let searchInput = document.getElementById("search__input");

let genderFilter = document.getElementById("gender");
let statusFilter = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const getSearched = await getCharacters(
    urlApis.characters +
      `?name=${searchInput.value}&status=${statusFilter.value}&gender=${genderFilter.value}`
  );

  const characterResult = document.querySelector(".search-character-result");

  characterResult.innerHTML = "";
  getSearched.results.map((character) => {
    let nameChr = character.name;
    let imgChr = character.image;
    let statusChr = character.status;

    const FigureCard = document.createElement("figure");
    const imgCard = document.createElement("img");

    FigureCard.appendChild(imgCard);

    imgCard.setAttribute("src", imgChr);

    const cardHeaderContainer = document.createElement("div");

    cardHeaderContainer.classList.add("card__header");

    cardHeaderContainer.appendChild(FigureCard);

    const cardTitle = document.createElement("h2");

    cardTitle.textContent = nameChr;
    cardTitle.title = nameChr;
    const statusDiv = document.createElement("div");
    const statusIndicator = document.createElement("span");
    const statusText = document.createElement("p");

    statusDiv.classList.add("status__container");

    statusText.textContent = `status: ${statusChr}`;
    statusIndicator.classList.add(statusChr);

    statusDiv.appendChild(statusIndicator);
    statusDiv.appendChild(statusText);

    cardHeaderContainer.appendChild(statusDiv);
    cardHeaderContainer.appendChild(cardTitle);

    characterResult.appendChild(cardHeaderContainer);
  });
});
