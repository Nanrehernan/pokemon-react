import React, { useEffect, useState } from "react";

const PokemonCard = ({ pokemon }) => {
    const [url, setUrl] = useState(null)
    useEffect(() => {
        getPokemonImage()
    }, [])

    const getPokemonImage = async () => {
        const response = await fetch(pokemon.url)
        const data = await response.json()
        setUrl(data.sprites.other.dream_world.front_default)
    }

    return (
        <div className="card">
            <div className="card-body">
                <img src={url} alt={pokemon.name} />
            </div>
            <div className="card-footer">
                {pokemon.name.toUpperCase()}
            </div>
        </div>
    )
}

export default PokemonCard