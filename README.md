# POKEDEX APP
(JavaScript)

## Project Information

My first JavaScript app showcases my skills in working with HTML, CSS, and JavaScript. It is a web app that pulls Pokemon data from the PokeAPI. The app allows users to search through the list of Pokemon, and view detailed information about each Pokémon in a modal. 

## Libraries and extras used

Bootstrap, Prettier.

## API

https://pokeapi.co/api/v2/
The PokeAPI's used to fetch Pokemon data for this project.

This code is a JavaScript module for managing a list of Pokémon fetched from the PokeAPI.

**Initialization**:
   - The module `pokemonRepository` is defined as an immediately invoked function expression (IIFE) to provide encapsulation.
   - An empty array `pokemonList` is initialized to store Pokémon.
   - The `apiUrl` is set to fetch the first 500 Pokémon from the PokeAPI.

**Adding Pokémon**:
   - The `add` function allows the addition of Pokémon objects to the `pokemonList` if they're of type "object".

**Search Bar**:
   - A search bar is created which filters the displayed Pokémon based on the user's search input.

**Pokémon List Handling**:
   - The `getAll` function returns the entire `pokemonList`.
   - The `removeAllItems` function clears the displayed Pokémon list.
   - The `addListItem` function creates a list item for a given Pokémon and appends it to the display list.

**Fetching Data from the API**:
   - The `loadList` function fetches the list of Pokémon from the API and adds them to the `pokemonList`.
   - The `loadDetails` function fetches detailed data for a specific Pokémon from the API.

**Modal Handling**:
   - The `showDetails` function displays detailed information of a Pokémon in a modal after fetching its details.
   - The `showModal` function creates the modal with the Pokémon's details like name, image, height, and type.
   - The `hideModal` function hides the modal.

**Event Listeners**:
   - An event listener for the "Escape" key is added to close the modal when the key is pressed.
   - An event listener applied to capture what user types in search bar to be prepare it for the filter function 
   - Adopting lowerCase method before pokemons are pulled to maintain consistently matched returned pokemon results

**Module Return**:
   - Several functions are made publicly accessible by returning them at the end of the IIFE.

**Execution**:
   - After defining the module, the Pokémon list is loaded from the API and displayed.
