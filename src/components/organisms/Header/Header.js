import React from 'react'
import './Header.scss'

import Menu from '../../molecules/Menu'
import Logo from '../../atoms/Logo'
import HamburgerButton from '../../atoms/HamburgerButton'

export const Header = () => (
  <header className='Header'>
    <Logo />
    <hr />
    <HamburgerButton />
    <Menu />
  </header>
)
