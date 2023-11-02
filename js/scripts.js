let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=500";
  let modalContainer = document.querySelector(".modal-container");

  function add(pokemon) {
    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log(
        "Invalid Pokemon object. Please provide an object with properties: name, height, and type."
      );
    }
  }

  function getAll() {
    return pokemonList;
  }

  function findByName(name) {
    return pokemonList.filter(
      (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
    );
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    listpokemon.classList.add("list-group-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemon-button", "btn", "btn-primary");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#pokemonModal");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  function showLoadingMessage() {
    let loadingMessage = document.createElement("div");
    loadingMessage.innerText = "Loading...";
    loadingMessage.id = "loading-message";
    document.body.appendChild(loadingMessage);
  }

  function hideLoadingMessage() {
    let loadingMessage = document.getElementById("loading-message");
    if (loadingMessage) {
      loadingMessage.parentNode.removeChild(loadingMessage);
    }
  }

  function showDetails(pokemon) {
    showLoadingMessage();
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      })
      .finally(function () {
        hideLoadingMessage();
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      })
      .finally(function () {
        hideLoadingMessage();
      });
  }

  function showModal(pokemon) {
    modalContainer.innerHTML = "";

    let modal = document.createElement("div");
    modal.classList.add("modal", "fade");
    modal.setAttribute("id", "pokemonModal");
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-labelledby", "pokemonModalLabel");
    modal.setAttribute("aria-hidden", "true");

    let modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog");
    modal.appendChild(modalDialog);

    let modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    modalDialog.appendChild(modalContent);

    let modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");
    modalContent.appendChild(modalHeader);

    let modalTitle = document.createElement("h5");
    modalTitle.classList.add("modal-title");
    modalTitle.id = "pokemonModalLabel";
    modalTitle.innerText = pokemon.name;
    modalHeader.appendChild(modalTitle);

    let closeButton = document.createElement("button");
    closeButton.classList.add("close");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("data-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Close");
    closeButton.innerHTML = '<span aria-hidden="true">&times;</span>';
    closeButton.addEventListener("click", hideModal);
    modalHeader.appendChild(closeButton);

    let modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");
    modalContent.appendChild(modalBody);

    let heightElement = document.createElement("p");
    heightElement.innerText = "Height: " + pokemon.height;
    modalBody.appendChild(heightElement);

    let imageElement = document.createElement("img");
    imageElement.src = pokemon.imageUrl;
    imageElement.alt = pokemon.name + " image";
    imageElement.classList.add("img-fluid");
    modalBody.appendChild(imageElement);

    modal.classList.add("show");
    modal.setAttribute(
      "style",
      "display:block;padding-right:17px; background-color:rgba(0,0,0,.5)"
    );

    modalContainer.appendChild(modal);
    modalContainer.classList.add("is-visible");
  }

  function hideModal() {
    // modalContainer.classList.remove('is-visible');
    modalContainer.innerHTML = "";
  }

  window.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      modalContainer.classList.contains("is-visible")
    ) {
      hideModal();
    }
  });

  modalContainer.addEventListener("click", function (event) {
    let target = event.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  document.addEventListener("click", function (event) {
    let target = event.target;
    if (
      target.classList.contains("modal") &&
      modalContainer.classList.contains("is-visible")
    ) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
