import React, { useState, useEffect } from 'react';

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/pokemon')
      .then(response => response.json())
      .then(data => setPokemon(data));
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemon.map(p => (
          <><li key={p.name}>{p.name}</li><img key={p.name}>{p.img}</img></>
        ))}
      </ul>
    </div>
  );
}