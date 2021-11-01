"use strict";


// Function which uses async request to query API and rparse data
// takes in number of records to request as a parameter
const getData = async (num) => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";
  const response = await fetch(url);
  const data = await response.json();

  // Loop through number of records requested and capture
  // URLs for each record
  for (let i = 0; i < num; i++) {
    const pokemon = data["results"][i];
    const pokemonURL = pokemon.url;

    // Use async request to fetch and parse detailed
    // information on each pokemon using specific URL
    const getPokemon = async () => {
      const response = await fetch(pokemonURL);
      const poke = await response.json();

      // Create variables for each piece of data needed
      const { name } = poke;
      const img = poke.sprites.front_default;
      const { stats } = poke;
      const { types } = poke;
      const { weight } = poke;

      // Create unique name div for each pokemon and add classes
      // Append name div to container element
      // Add h3 and img element to nameDiv for each pokemon
      const nameDiv = document.createElement("div");
      nameDiv.className = `${name} pokemonName ${i}`;
      $(".container").append(nameDiv);
      $(`.${name}`).append(`<h3>${name}</h3>`);
      $(`.${name}`).append(`<img src="${img}" width="200"/>`);

      // Create more-info div for each pokemon and add class
      const moreinfoDiv = document.createElement("div");
      moreinfoDiv.className = "more-info";
      $(`.${name}`).append(moreinfoDiv);

      // Create unique variables for nameDiv and more-info div
      //  for each pokemon
      const pokemonDiv = document.querySelector(`.${name}`);
      const infoDiv = pokemonDiv.querySelector(".more-info");

      // Append Stats heading and detailed stats info
      // to more-info div for each pokemon
      $(infoDiv).append(`<h5>Stats</h5>`);
      for (let i = 0; i < stats.length; i++) {
        let stat = stats[i];
        $(infoDiv).append(`<p>${stat.stat.name}: ${stat.base_stat}</p>`);
      }

      // Append Types heading and detailed type info to more-info div
      $(infoDiv).append(`<h5>Type(s)</h5>`);
      for (let i = 0; i < types.length; i++) {
        let type = types[i];
        $(infoDiv).append(`<p>${type.type.name}</p>`);
      }

      // Append Weight heading and weight info to more-info div
      $(infoDiv).append(`<h5>Weight</h5>`);
      $(infoDiv).append(`<p>${poke.weight} lbs.</p>`);

      // Set display attribute of all more-info divs to none
      $(infoDiv).hide();

      // Slide toggle to show more-info div on click of div for selected Pokemon
      $(document).ready(function () {
        $(pokemonDiv).on("click", function () {
          $(infoDiv).slideToggle();
        });
      });
    };

    // Call getPokemon function
    getPokemon();
  }
  return data
};

// Initial call to API displays 25 records
const pokemonInfo = getData(25);

// Add on click event listener to More Pokemon button and
// use value-tracker to track and set current number of records.
// Alert user when end of current records list has been reached
$("#more-pokemon").on("click", () => {
  let records = parseInt(document.getElementById("value-tracker").value);
  if (records >= 100) {
    alert("This is the end of the list!");
    document.getElementById("value-tracker").value = 100;
    return;
  }
  console.log(records);
  document.querySelector(".container").innerHTML = "";
  getData(records + 25);
  records = records + 25;
  document.getElementById("value-tracker").value = records;
});

// Add on click event listener to Fewer Pokemon button and
// use value-tracker to track and set current number of records.
// Alert user when end of current records list has been reached
$("#fewer-pokemon").on("click", () => {
  let records = parseInt(document.getElementById("value-tracker").value);
  if (records <= 0) {
    alert("This is the beginning of the list!");
    document.getElementById("value-tracker").value = 0;
    return;
  }
  console.log(records);
  document.querySelector(".container").innerHTML = "";
  getData(records - 25);
  records = records - 25;
  document.getElementById("value-tracker").value = records;
});
