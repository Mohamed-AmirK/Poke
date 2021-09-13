import React, { useState, useEffect } from 'react';

export default function Home(props) {

    const [pokemon, setPokemon] = useState(null);
    const [id , setId] = useState(1)
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(data => setPokemon(data))
    }, [id]);

    function randomNumber() {
        return Math.floor(Math.random() * 151) + 1
    }

    // console.log(pokemon)
    return (
        <div>

            {pokemon && <>
                <p>{pokemon.name}</p>
                <p>{pokemon.height}</p>
                <p>{pokemon.weight}</p>

                {pokemon.types.map(item => (
                    <p>{item.type.name}</p>
                ))}

            </>

            }
            <button onClick={()=>setId(randomNumber) }> click

            </button>
        </div>
    )
}