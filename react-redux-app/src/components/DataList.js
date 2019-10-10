import React, {useEffect} from "react"
import {connect} from "react-redux"

import Data from "./Data"
import {fetchPokemon, nextPokemon} from "../actions/actions"

const DataList = (props) => {
    useEffect(() => {
        props.fetchPokemon()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(props.pokemon)

    return (
        <div style={{display: "flex", flexDirection: "row", width: 600, flexWrap: "wrap", margin: "0 auto"}}>
            {props.pokemon.map(pokemon => {
                return <Data pokemon={pokemon} url={pokemon.url}/>
            })}
            <button onClick={() => props.nextPokemon(props.url)}>Next</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon,
        url: state.url
    }
}

export default connect(mapStateToProps, {fetchPokemon, nextPokemon})(DataList)