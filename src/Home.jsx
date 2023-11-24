import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div  >
      <h1>Home</h1>
      <p>Aqui é a home</p>
      <Link to='produto/Notebook'>Notebook</Link> |
      <Link to='produto/Smartphone'>Smartphone</Link>
    </div>
  )
}

export default Home
