import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div>
  <header   >
    <NavLink to='/' end>Home</NavLink> | <NavLink to='sobre'>Sobre</NavLink> | <NavLink to='contato'>Contato</NavLink> | <NavLink to='login' end>Login</NavLink> |  <NavLink to='produto'>Produto</NavLink>
  </header>
      
    </div>
  )
}

export default Header
