import React from 'react'
import './Menu.scss'
import { ROUTES } from '../../../utils/routes'
// import { isObject } from '../../../functions/handies'

import MenuItem from '../../atoms/MenuItem'

export const Menu = ({ ...restProps }) => (
  <nav className='Menu'>
    {Object.entries(ROUTES).map(([key, route]) => {
      if (typeof route === 'string') {
        return (
          <div
            key={`MENU_${key}`}
            className='Menu-Item__container'
          >
            <MenuItem to={route}>{`MENU_${key}`}</MenuItem>
          </div>
        )
      }

      // if (ROUTES[key]?.ROOT && isObject(ROUTES[key]?.CHILDREN)) {
      //   return (
      //     Object.entries(ROUTES[key]?.CHILDREN).map(([childKey, childRoute]) => (
      //       <div
      //         key={`MENU_${key}--${childKey}`}
      //         className='Menu-Item__container'
      //       >
      //         <MenuItem to={childRoute}>{`MENU_${key}--${childKey}`}</MenuItem>
      //       </div>
      //     ))
      //   )
      // }

      return null
    })}
  </nav>
)

Menu.defaultProps = {}
