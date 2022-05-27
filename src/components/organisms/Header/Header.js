import React, { useEffect } from 'react'
import './Header.scss'

import Menu from '../../molecules/Menu'
import Logo from '../../atoms/Logo'

export const Header = () => {
  useEffect(() => {
  //   /* Make menu sticky on scroll */
  //
  //   // Get the navbar
  //   const navbar = document.getElementsByClassName('Menu')?.[0] || null
  //   // Get whole header
  //   const header = document.getElementsByClassName('Header')?.[0] || null
  //   // Get the offset position of the navbar
  //   const sticky = navbar?.offsetTop
  //   // Get navbar height
  //   const navbarHeight = navbar?.offsetHeight
  //
  //   const onScroll = _ => {
  //     if (window.scrollY >= sticky) {
  //       navbar.classList.add('Menu--sticky')
  //       navbar.classList.remove('Menu')
  //
  //       // Add margin to header to avoid flickering
  //       header.style.marginBottom = `${navbarHeight}px`
  //     } else {
  //       navbar.classList.add('Menu')
  //       navbar.classList.remove('Menu--sticky')
  //
  //       // Remove margin
  //       header.style.marginBottom = 'initial'
  //     }
  //   }
  //   if (navbar && header) {
  //     window.addEventListener('scroll', onScroll)
  //   }
  //
  //   return () => (navbar && header) && window.removeEventListener('scroll', onScroll)
  })
  /* Sticky menu end */

  return (
    <header className='Header'>
      <Logo />
      <hr />
      <Menu />
    </header>
)
}
