import React, { useState, useEffect, Fragment } from "react";
import PokemonCard from "./PokemonCard"

const Pokemon = () => {
    const [list, setList] = useState([])
    const [nextUrl, setNextUrl] = useState(null)
    const [prevUrl, setPrevUrl] = useState(null)

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon"
        getPokemon(url)
    }, [])

    const getPokemon = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setList(data.results)
        setNextUrl(data.next)
        setPrevUrl(data.previous)

    }

    const NextPokemon = () => {
        getPokemon(nextUrl)
    }

    const PreviousPokemon = () => {
        getPokemon(prevUrl)
    }

    return (
        <Fragment>
            <div className="header">
                <h1>Lista de Pokemón</h1>
            </div>
            <div className="pokemon">
                {
                    list.map(pokemon => <PokemonCard key={pokemon.url} pokemon={pokemon} />)
                }
            </div>
            <div className="navegacion-url">
                {
                    prevUrl && (<button onClick={PreviousPokemon} className="btn btn-primary">Atras</button>)

                }

                {
                    nextUrl && (<button onClick={NextPokemon} className="btn btn-primary">Siguiente</button>)
                }
            </div>
        </Fragment>
    )
}

export default Pokemon