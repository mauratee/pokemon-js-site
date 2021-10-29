"use strict";


// async function myFetch() {
//   let response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   let myBlob = await response.blob();
//   console.log(myBlob)
  
// //   let objectURL = URL.createObjectURL(myBlob);
// //   let image = document.createElement('img');
// //   image.src = objectURL;
// //   document.body.appendChild(image);
// }

// myFetch()
// .catch(e => {
//   console.log('There has been a problem with your fetch operation: ' + e.message);
// });



const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'; 

// Function which uses async request to query API and return JSON object
const getData = async (num) => {
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    
    for (let i = 0; i < num; i++) {
        const pokemon = data["results"][i]
        // console.log(pokemon)
        const pokemonURL = pokemon.url

        const getPokemon = async () => {
            const response = await fetch(pokemonURL)
            const poke = await response.json()
            // console.log(poke)
            
            const { name } = poke
            // console.log(name)

            const img = poke.sprites.front_default
            // console.log(img)

            const { stats } = poke
            // console.log(stats)

            const { types } = poke
            // console.log(types)

            const  { weight } = poke
            // console.log(weight)

            // Create unique name div for each pokemon and add classes
            // Append name div to container element
            // Add h3 element to nameDiv for each pokemon
            const nameDiv = document.createElement('div');
            nameDiv.className = `${name} pokemonName`
            $('.container').append(nameDiv);
            $(`.${name}`).append(`<h3>${name}</h3>`);

            const moreinfoDiv = document.createElement('div')
            moreinfoDiv.className = "more-info"
            $(`.${name}`).append(moreinfoDiv);

            // Create variable for nameDiv for each pokemon
            // Create variable for more-info div for each pokemon
            // Append img to more-info div
            const pokemonDiv = document.querySelector(`.${name}`);
            const infoDiv = pokemonDiv.querySelector('.more-info');
            $(infoDiv).append(`<img src="${img}" width="200"/>`);

            $(infoDiv).append(`<h4>Stats</h4>`);
            for (let i = 0; i < stats.length; i++) {
                let stat = stats[i];
                // console.log(stat)
                // console.log(stat.stat.name)
                // console.log(stat.base_stat)
                $(infoDiv).append(`<p>${stat.stat.name}: ${stat.base_stat}</p>`);}

            $(infoDiv).append(`<h4>Types</h4>`);
            for (let i = 0; i < types.length; i++) {
                let type = types[i];
                // console.log(type)
                // console.log(type.type.name)
                $(infoDiv).append(`<p>${type.type.name}</p>`);}

            $(infoDiv).append(`<h4>Weight</h4>`);
            $(infoDiv).append(`<p>${poke.weight} lbs.</p>`);

            // Set display attribute of all more-info divs to none
            $(infoDiv).hide();

            // Slide toggle to show more-info div on click of div for selected Pokemon
            $(document).ready(function(){
                $(pokemonDiv).on("click", function(){
                    $(infoDiv).slideToggle();
                });
            });

            // const containerDiv = document.querySelector('#container')
            $(pokemonDiv).hide();


        }   
        getPokemon()

        

        // const containerDiv = document.querySelector('.container');
        // console.log(containerDiv);
        // const pokemonName = containerDiv.querySelector('.pokemonName');

        
    
    };

    
}

const pokemonInfo = getData(100)
// console.log(pokemonInfo)

// const pokemonDivs = document.querySelector('.container').document.querySelector('.pokemonName');
// const containerDiv = document.getElementById('container');
// const pokemonDivs = containerDiv.getElementsByClassName('pokemonName');
// console.log(pokemonDivs);

const containerDiv = document.querySelector('#container');
console.log(containerDiv);
// const pokemonDivs = containerDiv.querySelectorAll('pokemonName');
// const pokemonDivs = containerDiv.querySelector('pokemonName');
// const pokemonDivs = containerDiv.getElementsByClassName('pokemonName');
// const pokemonDivs = $('.pokemonName');
const pokemonDivs = document.getElementsByClassName('pokemonName');
// const pokemonDivs = containerDiv.children;
// const pokemonDivs = containerDiv.childElementCount;
console.log(pokemonDivs);

// window.addEventListener("load", function(event) {
//     console.log(containerDiv.getElementsByClassName('pokemonName'));
// });

// var observer = new MutationObserver(function(){
//     console.log(containerDiv.getElementsByClassName('pokemonName').length);
//     console.log(containerDiv.getElementsByClassName('pokemonName'));
//  });
 
//  observer.observe(pokemonDivs, { attributes: false, childList: true, subtree: true });
 
//  // When you've got what you need, you should call this function to trigger a disconnect 
//  function classesFound(){
//     observer.disconnect();
//  };

// Shows a few at a time
// console.log($(pokemonDivs).slice(0,26));
// $(pokemonDivs).slice(0,26).show();

// document.getElementsByClassName(".pokemonName").style.display = "none";
// document.getElementById('main').getElementsByClassName('test')

// const pokemonElements = document.getElementById('container').document.getElementsByClassName('pokemonName');
// console.log(pokemonElements);
// const changeDisplay = Array.prototype.filter.call(pokemonElements, function(pokemonElement){
//     console.log(pokemonElement);
//   return pokemonElement.style.display = none;
// });


// const containerDiv = document.querySelector('.container');
// const pokemonName = containerDiv.querySelector('.pokemonName');

// // Set display to none as default
// $(pokemonName).hide()

// Shows a few at a time
// pokemonInfo.slice(0,26).show();

// const getPokemonInfo = (array) => {

//     for (let i = 0; i < array.length; i++) {
//         const name = array[i]["name"]
//         console.log(name)
//     }
// };

// getPokemonInfo()

// const getPokemon = async (urls) => {

//     const pokemonArray = []

//     for(let i = 0; i < urls.length; i++) {
//         const pokeURL = urls[i];
//         console.log(pokeURL)
//         const response = await fetch(pokeURL)
//         const pokemon = await response.json()
//         console.log(pokemon)
//         pokemonArray.push(pokemon)
//         }
//     return pokemonArray
// };

// const pokemon = getPokemon(data)
// console.log(pokemon)

// const getData = async () => {
//     const response = await fetch(url)
//     const data = await response.json()
    
//     for (var i = 0; i < 25; i++) {
//         console.log(data["results"][i])
//         console.log(data["results"][i]["name"])
//         console.log(data["results"][i]["url"])

//         const pokemon = data.results[i]
//         // const el = document.createElement('h3');
//         // el.textContent = pokemon.name;
//         // document.querySelector(".container").append(el);
//         // $('.pokemon').append(`<h3>${pokemon.name}</h3>`);
        
//         const pokeURL = pokemon.url

//         const getPoke = async () => {
//             const response = await fetch(pokeURL)
//             const poke = await response.json()
    

//             const name = poke.name
//             const el = document.createElement('div');
//             el.className = `${name} pokemonName`
//             // const pokemonname = document.createElement('h3');
//             // pokemonname.textContent = name;
//             document.querySelector('.container').append(el);
//             // document.querySelector(`.${name}`).append(pokemonname);
//             $(`.${name}`).append(`<h3>${name}<span></span></h3>`);

//             const img = poke.sprites.front_default
//             console.log(img)
//             const el1 = document.createElement('div')
//             el1.className = "more-info"
//             document.querySelector(`.${name}`).append(el1);
//             const pokemonDiv = document.querySelector(`.${name}`);
//             const infoSelector = pokemonDiv.querySelector('.more-info');
//             $(infoSelector).append(`<img src="${img}" width="200"/>`);
    
//             const stats = poke.stats
//             console.log(stats)
//             const el2 = document.createElement('div')
//             $(infoSelector).append(`<h4>Stats</h4>`);
//             for (var i = 0; i < stats.length; i++) {
//                 let stat = stats[i];
//                 // console.log(stat)
//                 console.log(stat.stat.name)
//                 console.log(stat.base_stat)
//                 $(infoSelector).append(`<p>${stat.stat.name}: ${stat.base_stat}</p>`);
//             }
    
//             const types = poke.types
//             console.log(types)
//             const el3 = document.createElement('div')
//             $(infoSelector).append(`<h4>Types</h4>`);
//             for (var i = 0; i < types.length; i++) {
//                 let type = types[i];
//                 console.log(type)
//                 console.log(type.type.name)
//                 // // console.log(stat.base_stat)
//                 $(infoSelector).append(`<p>${type.type.name}</p>`);
//             }
            
//             const weight = poke.weight
//             console.log(weight)
//             const el4 = document.createElement('div')
//             $(infoSelector).append(`<h4>Weight</h4>`);
//             $(infoSelector).append(`<p>${poke.weight} lbs.</p>`);

//             // Set display attribute of all divs in container class to none
//             $(infoSelector).hide();

//             // Slide toggle to show more-info div on click of div for selected Pokemon
//             $(document).ready(function(){
//                 $(pokemonDiv).on("click", function(){
//                     $(infoSelector).slideToggle();
//                 });
//             });

//             // let test = document.getElementsByClassName(pokemonDiv);

//             // // This handler will be executed every time the cursor
//             // // is moved over a different list item
//             // test.addEventListener("mouseover", function( event ) {
//             //     // highlight the mouseover target
//             //     event.target.style.color = "orange";
  
//             //     // reset the color after a short delay
//             //     setTimeout(function() {
//             //         event.target.style.color = "";
//             //     }, 500);
//             // }, false);

//             // Add highlight to NYC Housing Code Violations text on mouseover
//             $(document).ready(function(){
//                 $(pokemonDiv).on({
//                     mouseenter: function(){
//                         $(this).css("background-color", "lightgray");
//                     },
//                     mouseleave: function(){
//                         $(this).css("background-color", "lightblue");
//                     } 
//                     // .mouseenter(function() {
//                     //     $(this).css("background-color", "yellow");
//                     //     // $(this).find("span").effect("highlight", {color:"#FFFF00"}, 1000);
//                     // });
//                     // .mouseleave(function() {
//                     //     $(this).find("span").removeClass("highlight");
//                     });
//             });
    
//         }

//         getPoke()

//     }
// }

// getData()

