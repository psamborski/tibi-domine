import React from 'react'
import './Menu.scss'
import { ROUTES } from '../../../utils/routes'
import { isObject } from '../../../functions/handies'

import MenuItem from '../../atoms/MenuItem'
import Submenu from '../Submenu'

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
            {/* <MenuItem to={route}>{`${key}`}</MenuItem> */}
          </div>
        )
      }

      if (ROUTES[key]?.ROOT && isObject(ROUTES[key]?.CHILDREN)) {
        // overwrite route to proper value in case of menu entry with submenu
        const route = ROUTES[key]?.ROOT

        return (
          <React.Fragment key={`MENU_${key}`}>
            <div className='Menu-Item__container'>
              <MenuItem
                chevron
                to={route}
              >
                {`MENU_${key}`}
              </MenuItem>
            </div>
            <Submenu
              rootMenuItem={{
              key,
              route,
            }}
              submenuItems={ROUTES[key]?.CHILDREN || {}}
            />
          </React.Fragment>
        )
      }

      return null
    })}
  </nav>
)

Menu.defaultProps = {}
