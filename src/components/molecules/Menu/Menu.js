import React from 'react'
import './Menu.scss'
import { ROUTES } from '../../../utils/routes'
import { isObject } from '../../../functions/handies'

import MenuItem from '../../atoms/MenuItem'
import Submenu from '../Submenu'
import LanguageButton from '../../atoms/LanguageButton'

export const Menu = ({ ...restProps }) => (
  <nav className='Menu'>
    {Object.entries(ROUTES).map(([key, route]) => {
      if (typeof route === 'string') {
        return (
          <MenuItem
            key={`MENU_${key}`}
            to={route}
          >
            {`${key}`}
          </MenuItem>
        )
      }

      if (ROUTES[key]?.ROOT && isObject(ROUTES[key]?.CHILDREN)) {
        // overwrite route to proper value in case of menu entry with submenu
        const route = ROUTES[key]?.ROOT

        return (
          <React.Fragment key={`MENU_${key}`}>
            <MenuItem
              chevron
              to={route}
              toggable
            >
              {`${key}`}
            </MenuItem>
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

    <LanguageButton />
  </nav>
)

Menu.defaultProps = {}
