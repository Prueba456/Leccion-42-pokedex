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
  // alert( "clicked" );
    $('.nombrePokemon').empty();
      $('.izquierda .pokemon').empty();
  var id = e.target.id;
  var elemento = e.target;
  console.log(elemento);
  getJSON('http://pokeapi.co/api/v2/pokemon-species/'+id+'/', (err, json) => {
    if (err) { return alert(err.message);}
    state.descripcionPokemon = json; /*Trae toda la data*/
    console.log(json.flavor_text_entries[3].flavor_text);
    descripcionP(json);
  });
  const descripcionP = (json)=>{
    const descripcion = $('.descripcionPokemon');
     descripcion.text(json.flavor_text_entries[3].flavor_text);
    return descripcion;
  }
  $('.nombrePokemon').append(nombrePokemon(id));
  $(elemento).clone().appendTo('.izquierda .pokemon');
  $('.descripcion').css("display","block");
}

function cerrarModal(e) {
  $('.descripcion').css("display","none");
}

const nombrePokemon = (i)=> {
  const nombre = $('<span class="nombre-pokemon">'+ state.dataPokemon.pokemon_entries[i-1].pokemon_species.name+'</span>');
  return nombre;
}
