import React from 'react'
import './MenuItem.scss'
import { NavLink } from 'react-router-dom'

export const MenuItem = ({
  children, chevron, to, ...restProps
}) => (
  <NavLink
    className={({ isActive }) => (isActive ? 'Menu-Item--active' : 'Menu-Item')}
    to={to}
  >
    <span>
      {children}
    </span>
    {chevron && <span className='Menu-Item__chevron fa-solid fa-chevron-down' />}
  </NavLink>
)

MenuItem.defaultProps = {
  chevron: false,
  to: '#',
}
