import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export interface IPokemon{
    id:string,
    ability:string,
    species:{
        name:string,
        uri:string
    };
    sprites:{
        front_shiny:string
    }
}
export const pokemon= createApi({
    reducerPath:"pokemon",
    baseQuery:fetchBaseQuery({baseUrl:"https://pokeapi.co/api/v2/"}),
    tagTypes:["Pokemon"],
    endpoints:(builder)=>({
        getPokemonByName:builder.query<IPokemon,string>({
            query:(name)=> `pokemon/${name}`,
          
            
            providesTags:["Pokemon"],
        })
    })
});
export const {useGetPokemonByNameQuery} = pokemon;