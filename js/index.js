'use strict';
const render = (root)=> {
  root.empty();
  for (var i = 1; i < 150; i++) {
  const pokemon   = $('<div class="pokemon"></div>');
  /*imagen de pokemons*/
  // const imagen    = $('<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="">');

  const comandos  = $('<div class="comandos"></div>');
  const iconos    = $('<div class="iconos"></div>');
  const iconPok   = $('<img class="icon" src="assets/icon/pokeball_gray.png" alt="">');
  const iconHeart = $('<img class="icon" src="assets/icon/valentines-heart.png" alt="">');
  const iconData  = $('<img class="icon" src="assets/icon/data.png" alt="">');
  /*Nombre de pokemonos*/
  const nombrePokemon = $('<span class="nombre-pokemon">nomprepokemon</span>');
  pokemon.append(imagen(i)); /*Imagen de pokemon*/
  pokemon.append(comandos);
  comandos.append(iconos);
  iconos.append(iconPok);
  iconos.append(iconHeart);
  iconos.append(iconData);
  comandos.append(nombrePokemon); /*Nombre pokemon*/
  root.append(pokemon);
}
  // wrapper.append(Header());
  // wrapper.append(Login());
}

// const state = {
//   user: null,
//   status: null
// };

$( _ => {
  const root = $('.lista-pokemons');
  render(root);
  // state.doRender = render.bind(null, root);
});
