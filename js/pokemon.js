'user strict';

const imagen = (i) => {
  if (i<10) {
    const img    = $('<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/00'+ i +'.png" alt="">');
    return img;

  }else if (i>9 && i<100) {
    const img    = $('<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/0'+ i +'.png" alt="">');
    return img;

  }else{
    const img    = $('<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/'+ i +'.png" alt="">');
    return img;

  }
    // return img;
}
