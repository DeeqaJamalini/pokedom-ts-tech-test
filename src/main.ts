import "./styles/style.scss";
import "./data/pokemon";
import "./data/types";
import pokemonArray from "./data/pokemon";

const pokemonContainer = document.querySelector(".card-container");

type Pokemon = {
  id: number;
  name: string;
  sprite: string;
  types: string[];
};

const getPokemon = (pokemon: Pokemon) => {
  const getType = (types: string[]) => {
    if (types.length > 1) {
      return ` ${pokemon.types[0]} and ${pokemon.types[1]} `;
    } else {
      return `${pokemon.types[0]}`;
    }
  };

  return `

    <div class="card">
    <div class="card__content">  
        
            <img class="card__image" src="${pokemon.sprite}" alt="${
    pokemon.name
  }">
        <h2 class ="card__heading">${pokemon.name}</h2>
       
        <p class="card__text">${pokemon.name} (#${pokemon.id}) is a ${getType(
    pokemon.types
  )} type</p>

        </div>

        </div>

        
    
    
    
    `;
};

if (!pokemonContainer) {
  throw new Error("No pokemon container found");
}


for (const pokemon of pokemonArray) {
  pokemonContainer.innerHTML += getPokemon(pokemon);
}


//add a filter to filter b
