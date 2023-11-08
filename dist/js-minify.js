let pokemonRepository = (function () {
  let e = [],
    t = document.querySelector(".modal-container");
  function n(t) {
    "object" == typeof t && "name" in t
      ? e.push(t)
      : console.log(
          "Invalid Pokemon object. Please provide an object with properties: name, height, and type."
        );
  }
  function i() {
    return e;
  }
  function a(t) {
    return e.filter((e) => e.name.toLowerCase() === t.toLowerCase());
  }
  function o(e) {
    let t = document.querySelector(".pokemon-list"),
      n = document.createElement("li");
    n.classList.add("list-group-item");
    let i = document.createElement("button");
    (i.innerText = e.name),
      i.classList.add("pokemon-button", "btn", "btn-primary"),
      i.setAttribute("data-toggle", "modal"),
      i.setAttribute("data-target", "#pokemonModal"),
      n.appendChild(i),
      t.appendChild(n),
      i.addEventListener("click", function (t) {
        r(e);
      });
  }
  function l() {
    let e = document.getElementById("loading-message");
    e && e.parentNode.removeChild(e);
  }
  function r(e) {
    let n;
    ((n = document.createElement("div")).innerText = "Loading..."),
      (n.id = "loading-message"),
      document.body.appendChild(n),
      d(e).then(function () {
        var n;
        let i, a, o, l, r, d, c, u, p, m, f;
        (n = e),
          (t.innerHTML = ""),
          (i = document.createElement("div")),
          i.classList.add("modal", "fade"),
          i.setAttribute("id", "pokemonModal"),
          i.setAttribute("tabindex", "-1"),
          i.setAttribute("role", "dialog"),
          i.setAttribute("aria-labelledby", "pokemonModalLabel"),
          i.setAttribute("aria-hidden", "true"),
          (a = document.createElement("div")),
          a.classList.add("modal-dialog"),
          i.appendChild(a),
          (o = document.createElement("div")),
          o.classList.add("modal-content"),
          a.appendChild(o),
          (l = document.createElement("div")),
          l.classList.add("modal-header"),
          o.appendChild(l),
          (r = document.createElement("h5")),
          r.classList.add("modal-title"),
          (r.id = "pokemonModalLabel"),
          (r.innerText = n.name),
          l.appendChild(r),
          (d = document.createElement("button")),
          d.classList.add("close"),
          d.setAttribute("type", "button"),
          d.setAttribute("data-dismiss", "modal"),
          d.setAttribute("aria-label", "Close"),
          (d.innerHTML = '<span aria-hidden="true">&times;</span>'),
          d.addEventListener("click", s),
          l.appendChild(d),
          (c = document.createElement("div")),
          c.classList.add("modal-body"),
          o.appendChild(c),
          (u = document.createElement("img")),
          (u.src = n.imageUrl),
          (u.alt = n.name + " image"),
          u.classList.add("img-fluid"),
          u.classList.add("high-quality-image"),
          (u.style.width = "300px"),
          (u.style.height = "300px"),
          c.appendChild(u),
          (p = document.createElement("p")),
          (p.innerText = "Type: " + n.types.join(",")),
          c.appendChild(p),
          (m = document.createElement("p")),
          (m.innerText = "Height: " + n.height),
          c.appendChild(m),
          (f = document.createElement("p")),
          (f.innerText = "Abilities: " + n.abilities.join(",")),
          c.appendChild(f),
          i.classList.add("show"),
          i.setAttribute(
            "style",
            "display:block;padding-right:17px; background-color:rgba(0,0,0,.5)"
          ),
          t.appendChild(i),
          t.classList.add("is-visible");
      });
  }
  function d(e) {
    return fetch(e.detailsUrl)
      .then(function (e) {
        return e.json();
      })
      .then(function (t) {
        (e.imageUrl = t.sprites.front_default),
          (e.height = t.height),
          (e.types = t.types.map((e) => e.type.name)),
          (e.abilities = t.abilities.map((e) => e.ability.name));
      })
      .catch(function (e) {
        console.error(e);
      })
      .finally(function () {
        l();
      });
  }
  function s() {
    t.innerHTML = "";
  }
  window.addEventListener("keydown", function (e) {
    "Escape" === e.key && t.classList.contains("is-visible") && s();
  }),
    document
      .querySelector(".form-inline")
      .addEventListener("submit", function (e) {
        e.preventDefault(),
          u(document.querySelector(".form-control").value.toLowerCase());
      });
  var c = document.querySelector(".form-control");
  function u(t) {
    "" === t.trim()
      ? displayPokemonList(e)
      : displayPokemonList(
          e.filter(function (e) {
            return e.name.toLowerCase().includes(t);
          })
        );
  }
  function u(t) {
    var n = e.filter(function (e) {
      return e.name.toLowerCase().includes(t);
    });
    (document.querySelector(".pokemon-list").innerHTML = ""),
      n.forEach(function (e) {
        o(e);
      });
  }
  return (
    c.addEventListener("input", function () {
      u(c.value.toLowerCase());
    }),
    document.querySelectorAll(".generation-item").forEach(function (t) {
      t.addEventListener("click", function (n) {
        var i;
        n.preventDefault(),
          (i = t.dataset.generationId),
          displayPokemonList(
            e.filter(function (e) {
              return e.generation === i;
            })
          );
      });
    }),
    t.addEventListener("click", function (e) {
      e.target === t && s();
    }),
    document.addEventListener("click", function (e) {
      e.target.classList.contains("modal") &&
        t.classList.contains("is-visible") &&
        s();
    }),
    {
      add: n,
      getAll: i,
      addListItem: o,
      loadList: function e() {
        return fetch("https://pokeapi.co/api/v2/pokemon/?limit=500")
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            e.results.forEach(function (e) {
              let t = { name: e.name, detailsUrl: e.url };
              n(t), console.log(t);
            });
          })
          .catch(function (e) {
            console.error(e);
          })
          .finally(function () {
            l();
          });
      },
      loadDetails: d,
      showDetails: r,
    }
  );
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
});
