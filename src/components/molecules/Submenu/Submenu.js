import React, { useContext } from 'react'
import './Submenu.scss'

import TranslationContext from '../../../features/TranslationContext'

import MenuItem from '../../atoms/MenuItem'

export const Submenu = ({
  submenuItems, rootMenuItem, ...restProps
}) => {
  const translationContext = useContext(TranslationContext)
  const { t } = translationContext
  return (
    <div className='Submenu'>
      {Object.entries(submenuItems).map(([childKey, childRoute]) => (
        <MenuItem
          key={`MENU__${rootMenuItem?.key}--${childKey}`}
          to={(rootMenuItem?.route || '') + childRoute}
        >
          {t(`MENU__${rootMenuItem?.key}--${childKey}`)}
        </MenuItem>
    ))}
    </div>
) }

Submenu.defaultProps = {
  submenuItems: {},
  rootMenuItem: {
    key: '',
    route: '',
  },
}
