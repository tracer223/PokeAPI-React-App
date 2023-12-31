import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Grid } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { SearchAppBar } from './SearchAppBar';




const getPokemons = async () => {
  // const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
  const response = await fetch("http://localhost:8080/pokemon");
  const data = await response.json();

  return data;
};

const getPokemon = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

const PokemonTile = ({ name, url }) => {
  const { error, isLoading, data } = useQuery({
    queryKey: [`pokemon${name}`], 
    queryFn: () => getPokemon(url)
});

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (isLoading) {
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    );
  }

  const {
    sprites: { front_default }
  } = data;

  return (
    <ImageListItem>
      <img src={front_default} alt={name} />
      <ImageListItemBar title={name} />
    </ImageListItem>
  );
};

export const App = () => {
  const { error, isLoading, data } = useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons});

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (isLoading) {
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    );
  }

  const { results: pokemons } = data;

  return (
    <ImageList cellHeight={300}>
      {pokemons.map((pokemon) => (
        <PokemonTile key={pokemon.name} {...pokemon} />
      ))}
    </ImageList>
  );
};
