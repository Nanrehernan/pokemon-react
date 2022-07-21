import React, { useState, useEffect, Fragment } from "react";
import PokemonCard from "./PokemonCard"
import Header from "./Header";
let listaPokemon = []

const Pokemon = () => {
    
    const [list, setList] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=1200"
        getPokemon(url)
    }, [])

    const getPokemon = async (url) => {
        setLoading(true)
        const response = await fetch(url)
        const data = await response.json()
        listaPokemon = [...data.results]
        setList([...listaPokemon])
        setPage(1)
        setLoading(false)

    }

    const NextPokemon = () => {
        setPage(prev => prev + 1)
    }

    const handleSearchPokermon = async e =>{
        let {value} = e.target
        value = value.toLowerCase()
        if (value === ""){
            setList([...listaPokemon])
        }else{
            const filter = listaPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(value))
            setList([...filter])
        }
        setPage(1)
    }

    return (
        <Fragment>
            <Header handleSearchPokermon={handleSearchPokermon} />
            <div className="pokemon">
                {
                    list.map((pokemon, index) => {
                        if (index < page * 20) {
                            return <PokemonCard key={pokemon.url} pokemon={pokemon} />
                        }
                    })
                }
            </div>

            {
                !loading ? (
                    <div className="navegacion-url">
                        {
                            list.length > 20 && page < Math.floor(list.length) / 20 && (<button onClick={NextPokemon} className="btn btn-primary">Más Pokemon</button>)
                        }
                    </div>
                ) : (
                    <p>Cargando Pokemon ...</p>
                )
            }
        </Fragment>
    )
}

export default Pokemon