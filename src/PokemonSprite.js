import React, { useState, useEffect } from 'react';

function PokemonSprite({ pokemonName }) {
  const [spriteUrl, setSpriteUrl] = useState('');

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      setSpriteUrl(data.sprites.front_default);
    }

    fetchPokemon();
  }, [pokemonName]);

  return (
    <img src={spriteUrl} alt={pokemonName} />
  );
}

export default PokemonSprite;
