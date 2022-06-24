import React, { useContext } from 'react'
import './Menu.scss'
import { ROUTES } from '../../../utils/routes'
import { isObject } from '../../../functions/handies'

import TranslationContext from '../../../features/TranslationContext'

import MenuItem from '../../atoms/MenuItem'
import Submenu from '../Submenu'
import LanguageButton from '../../atoms/LanguageButton'

export const Menu = ({ ...restProps }) => {
  const translationContext = useContext(TranslationContext)
  const { t } = translationContext

  return (
    <nav className='Menu'>
      {Object.entries(ROUTES).map(([key, route]) => {
      if (typeof route === 'string') {
        return (
          <MenuItem
            key={`MENU__${key}`}
            to={route}
          >
            {t(`MENU__${key}`)}
          </MenuItem>
        )
      }

      if (ROUTES[key]?.ROOT && isObject(ROUTES[key]?.CHILDREN)) {
        // overwrite route to proper value in case of menu entry with submenu
        const route = ROUTES[key]?.ROOT

        return (
          <React.Fragment key={`MENU__${key}`}>
            <MenuItem
              chevron
              to={route}
              toggable
            >
              {t(`MENU__${key}`)}
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
) }

Menu.defaultProps = {}
