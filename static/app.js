"use strict";


const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'; 

// Function which uses async request to query API and return JSON object
const getData = async (num) => {
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)

    const pokemonDivs = []
    
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
            nameDiv.className = `${name} pokemonName ${i}`
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
            // if (i >= 25) {
            // $(pokemonDiv).hide()
            // };

    
        };


        (async () => {
            console.log(await getPokemon())
         })()
    
    };

    console.log(pokemonDivs)
    // return pokemonDivs
    
    pokemonDivs.forEach((div) =>{
        console.log(div);
    });
    // getData().then(x => { 
    //     console.log(x); 
    // });
    // console.log(pokemonDivs);
    $(pokemonDivs).slice(0,26).show();

    
};

// async function callAsync() {
//     var x = await getData();
//     console.log(x);
//  }
//  callAsync();



// localStorage.setItem('records', records);
// alert( localStorage.getItem('records') );

const pokemonInfo = getData(25)

$('#more-pokemon').on('click', () => {
    let records = parseInt(document.getElementById('value-tracker').value);
    if (records >= 100) {
        alert("This is the end of the list!")
        document.getElementById('value-tracker').value = 100
        return
        };
    console.log(records)
    document.querySelector('.container').innerHTML = '';
    getData(records + 25);
    records = records + 25
    document.getElementById('value-tracker').value = records
    });

$('#fewer-pokemon').on('click', () => {
    let records = parseInt(document.getElementById('value-tracker').value);
    if (records <= 0) {
        alert("This is the beginning of the list!")
        document.getElementById('value-tracker').value = 0
        return
        };
    console.log(records)
    document.querySelector('.container').innerHTML = '';
    getData(records - 25)
    records = records - 25
    document.getElementById('value-tracker').value = records
    });

