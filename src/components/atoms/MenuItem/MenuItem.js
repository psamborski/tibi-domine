import React from 'react'
import './MenuItem.scss'
import { NavLink } from 'react-router-dom'

export const MenuItem = ({
  children, to, ...restProps
}) => (
  <NavLink
    className={({ isActive }) => (isActive ? 'Menu-Item--active' : 'Menu-Item')}
    to={to}
  >
    <span>
      {children}
    </span>
  </NavLink>
)

MenuItem.defaultProps = {
  to: '#',
}
