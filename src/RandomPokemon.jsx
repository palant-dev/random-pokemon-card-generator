import './RandomPokemon.css'

function RandomPokemon() {
    const randomNumber = Math.floor(Math.random() * 151 + 1);
    return (
        <div className="card">
        <h1 className="title">{"Number:"+randomNumber}</h1>
        <img style={{width: '150px'}} src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+randomNumber+".png"} className="pokemon-img" alt="pokemon-image" />
        </div>
    )
}

export default RandomPokemon;