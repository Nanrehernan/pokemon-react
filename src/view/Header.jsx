import React from "react"

const Header = ({handleSearchPokermon})=>{
    return (
        <header className="header">
            <h1>Pokemon</h1>
            <input onChange={handleSearchPokermon} type="text" placeholder="Buscar Pokemon"/>
        </header>
    )
}

export default Header