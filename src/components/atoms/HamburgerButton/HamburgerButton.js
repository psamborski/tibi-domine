import React, { useState } from 'react'
import './HamburgerButton.scss'

export const HamburgerButton = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <button
      className={`Hamburger-Button${isOpen ? '--active' : ''}`}
      onClick={() => setOpen(!isOpen)}
      type='button'
    >
      <span className='Hamburger-Button__line' />
      <span className='Hamburger-Button__line' />
      <span className='Hamburger-Button__line' />
    </button>
)
}
