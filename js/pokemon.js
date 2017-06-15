'user strict';

const imagen = (i) => {
  if (i<10) {
    const img    = $('<img id='+i+' src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/00'+ i +'.png" alt="">');
    return img;

  }else if (i>9 && i<100) {
    const img    = $('<img id='+i+' src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/0'+ i +'.png" alt="">');
    return img;

  }else{
    const img    = $('<img id='+i+' src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+ i +'.png" alt="">');
    return img;

  }
}

function muestraModal(e) {
  alert( "clicked" );
  var id = e.target.id;
  console.log(id);

    getJSON('http://pokeapi.co/api/v2/pokemon-species/'+id+'/', (err, json) => {
      if (err) { return alert(err.message);}
      state.descripcionPokemon = json; /*Trae toda la data*/
      console.log(json.flavor_text_entries[3].flavor_text);
    });
}

const nombrePokemon = (i)=> {
  const nombre = $('<span class="nombre-pokemon">'+ state.dataPokemon.pokemon_entries[i-1].pokemon_species.name+'</span>');
  return nombre;
}
