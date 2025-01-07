import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RandomPokemon from './RandomPokemon'
import './App.css'

// . Create a component called RandomPokemon
// . Generate a random number from 1 - 151
// . Display an h1 with the random pokemon
// number
// · Render the corresponding image, using the
// random number to generate the URL
// . Style the component such that:
// o The parent element has a border
// The image is 150px wide
// o The h1 is blue

function App() {
  const [count, setCount] = useState(0)

  return (
    <RandomPokemon />
  )
}

export default App
