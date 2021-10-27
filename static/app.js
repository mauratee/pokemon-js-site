"use strict";

const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'; 

// $.get(url, (response) => {
//     console.log(response);
//     const pokeList = response;
//     const firstPokemon = pokeList[0]["name"];

//     for (let i = 0; i < 25; i++) {
//          console.log(pokeList[i]);
//          console.log(pokeList[1]["name"]);
//       }
//     });

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

// const list = document.querySelector('.list');
// console.log(list)

// const createList = () => {
//     for (let i = 1; i < 25; ++ i) {
//         list.innerHTML = `${list.innerHTML} <div><div id="pokemon${i}></div><div class="pokemon-stats"><h4>Stats</h4></div><div class="pokemon-types"><h4>Types</h4></div></div>`;
//     }
// }
// createList()

const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    
    for (var i = 0; i < 25; i++) {
        console.log(data["results"][i])
        console.log(data["results"][i]["name"])
        console.log(data["results"][i]["url"])

        const pokemon = data.results[i]
        // const el = document.createElement('h3');
        // el.textContent = pokemon.name;
        // document.querySelector(".container").append(el);
        // $('.pokemon').append(`<h3>${pokemon.name}</h3>`);
        
        const pokeURL = pokemon.url

        const getPoke = async () => {
            const response = await fetch(pokeURL)
            const poke = await response.json()
    

            const name = poke.name
            const el = document.createElement('h3');
            el.textContent = name;
            document.querySelector(".container").append(el);

            const img = poke.sprites.front_default
            console.log(img)
            const el1 = document.createElement('div')
            $('div.container').append(`<img src="${img}" width="200"/>`);
    
            const stats = poke.stats
            console.log(stats)
            const el2 = document.createElement('div')
            $('div.container').append(`<h4>Stats</h4>`);
            for (var i = 0; i < stats.length; i++) {
                let stat = stats[i];
                // console.log(stat)
                console.log(stat.stat.name)
                console.log(stat.base_stat)
                $('div.container').append(`<p>${stat.stat.name}: ${stat.base_stat}</p>`);
            }
    
            const types = poke.types
            console.log(types)
            const el3 = document.createElement('div')
            $('div.container').append(`<h4>Types</h4>`);
            for (var i = 0; i < types.length; i++) {
                let type = types[i];
                console.log(type)
                console.log(type.type.name)
                // // console.log(stat.base_stat)
                $('div.container').append(`<p>${type.type.name}</p>`);
            }
            
            const weight = poke.weight
            console.log(weight)
            const el4 = document.createElement('div')
            $('div.container').append(`<h4>Weight</h4>`);
            $('div.container').append(`<p>${poke.weight} lbs.</p>`);
    
        }

        getPoke()

    }
}

getData()


// list first 25 Pokemon
