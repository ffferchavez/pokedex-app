// Create a new variable called pokemonList and assign to it a blank array.
// This array contains Pokémon data to display in your application.

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

pokemonList.forEach(pokemon => {
  document.write(pokemon.name + " (height: " + pokemon.height + ") - ");

  if (pokemon.height > 1.5) {
    document.write("Wow, that is big!");
  } else if (pokemon.height > 0.5 && pokemon.size < 1.5) {
    document.write("This is a normal size pokemon");
  } else {
    document.write("This is a small pokemon");
  }

  document.write("<br>");
}