
// Test that getData function returns expected Pokemon
// as first object
describe('My Test Suite', () => {
  it('data contains first pokemon', () => {
    (async () => {
      const data = (await getData(25));
      const pokemon = data["results"][0]["name"];
      console.log(pokemon);
      expect(pokemon).toBe("unown");
   })()
  });
});

// Test that getData function returns expected Pokemon
// as second object
describe('My Test Suite', () => {
  it('data contains second pokemon', () => {
    (async () => {
      const data = (await getData(25));
      const pokemon = data["results"][1]["name"];
      console.log(pokemon);
      expect(pokemon).toBe("wobbuffet");
   })()
  });
});

// Test that getData function returns expected Pokemon
// URL as 50th object
describe('My Test Suite', () => {
  it('data contains 50th pokemon URL', () => {
    (async () => {
      const data = (await getData(50));
      const pokemon = data["results"][49]["url"];
      console.log(pokemon);
      expect(pokemon).toBe("https://pokeapi.co/api/v2/pokemon/250/");
   })()
  });
});


//  I ran out of time for more testing but I would have kept working on
// the test below to test the data in the nested function "getPokemon"
// and also would have added testing to the "more-pokemon" and
// "fewer-pokemon" buttons in index.html

// describe('My Test Suite', () => {
//   it('data contains pokemon', () => {
//     (async () => {
//       const data = (await getData(50));
//       const pokemonURL = data["results"][49]["url"];
//       (async () => {
//         const poke = (await getPokemon(pokemonURL));
//         console.log(poke);
//         const { name } = poke;
//         console.log(name);
        
//         expect(pokemon).toBe("ho-oh");
//      })()
//       expect(pokemon).toBe("ho-oh");
//    })()
//   });
// });