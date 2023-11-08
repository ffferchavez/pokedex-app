#Pokédex Application (JavaScript)

-Project overview:

This JavaScript application demonstrates my proficiency in working with HTML, CSS, and JavaScript. It is a web application that retrieves Pokémon data from the PokeAPI. Users can search through the Pokémon list and access detailed information about each Pokémon in a modal window.

-Utilized libraries:

Bootstrap, Jquery

-API utilized for this project can be found at the following link: https://pokeapi.co/api/v2/

The PokeAPI is utilized to fetch Pokémon data for this project.
This code constitutes a JavaScript module responsible for managing a collection of Pokémon retrieved from the PokeAPI.
Here is a breakdown:

Initialization:

The pokemonRepository module is defined as an immediately invoked function expression (IIFE) to ensure encapsulation.
An empty array called pokemonList is initialized to store Pokémon objects.
The apiUrl is set to fetch the first 500 Pokémon from the PokeAPI.

● Adding Pokémon:

The add function enables the addition of Pokémon objects to the pokemonList, provided they are of type "object".
Sorting Pokémon:

● Search Bar:

A search bar is created to filter the displayed Pokémon based on the user's search input.

● Pokémon List Management:

The getAll function returns the complete pokemonList.
The removeAllItems function clears the displayed Pokémon list.
The addListItem function generates a list item for a given Pokémon and appends it to the display list.

● Fetching Data from the API:

The loadList function retrieves the list of Pokémon from the API, sorts them alphabetically, and adds them to the pokemonList.
The loadDetails function fetches detailed data for a specific Pokémon from the API.

● Modal Handling:

The showDetails function displays comprehensive information about a Pokémon in a modal window after fetching its details.
The showModal function creates the modal containing details such as name, image, height, and type, etc. of the Pokémon.
The hideModal function hides the modal window.

● Event Listeners:

An event listener is added to the "Escape" key to close the modal when the key is pressed.
An event listener captures user input in the search bar and prepares it for the filtering function.
The lowercase method is applied before retrieving Pokémon to ensure consistent matching of returned Pokémon results.

● Module Return:

Several functions are made accessible to the public by returning them at the end of the IIFE.
Execution:

After defining the module, the Pokémon list is loaded from the API and displayed.
