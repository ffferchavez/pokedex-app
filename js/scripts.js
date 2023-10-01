// Create a new variable called pokemonList and assign to it a blank array.
// This array contains Pokémon data to display in your application.

let pokemonRepository = (function () {
  let pokemonList = [];

// Add Pokémon objects to the array
pokemonList.push({
  name: "Bulbasaur",
  height: 0.7,
  type: ["grass", "poison"]
});

pokemonList.push({
  name: "Ivysaur",
  height: 1.0,
  type: ["grass", "poison"]
});

pokemonList.push({
  name: "Venusaur",
  height: 2.0,
  type: ["grass", "poison"]
});

pokemonList.push({
  name: "Charmander",
  height: 0.6,
  type: ["fire"]
});

pokemonList.push({
  name: "Charmeleon",
  height: 1.1,
  type: ["fire"]
});

pokemonList.push({
  name: "Charizard",
  height: 1.7,
  type: ["fire"]
});

function add(pokemon) {
  if (typeof pokemon === 'object' && Object.keys(pokemon).length === 3 &&
      'name' in pokemon && 'height' in pokemon && 'type' in pokemon) {
    pokemonList.push(pokemon);
  } else {
    console.error('Invalid Pokemon object. Please provide an object with properties: name, height, and type.');
  }
}

function getAll() {
  return pokemonList;
}

function findByName(name) {
  return pokemonList.filter(
    (pokemon) =>
      pokemon.name.toLowerCase() === name.toLowerCase()
  );
}

function showDetails(pokemon) {
console.log(pokemon.name);
}

function addListItem(pokemon) {
  let pokemonList = document.querySelector(".pokemon-list");
  let listItem = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("pokemon-button");
  listItem.appendChild(button);
  pokemonList.appendChild(listItem);

  button.addEventListener('click',function() {
    showDetails(pokemon);
  });

}

return {
  add,
  getAll,
  findByName,
  addListItem,
};
})();

pokemonRepository.getAll().forEach((pokemon) => {
pokemonRepository.addListItem(pokemon);
});