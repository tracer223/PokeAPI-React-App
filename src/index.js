import React, { StrictMode } from "react";
import PokemonList, { App } from "./App";
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const queryClient = new QueryClient();
// ✅ empty object fallback
const {name} = undefined || {};
const {data} = undefined || {};
console.log(name); // 👉️ undefined
console.log(data); // 👉️ undefined



root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  </StrictMode>,
);