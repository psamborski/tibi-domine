import React from 'react'
import './Submenu.scss'

import MenuItem from '../../atoms/MenuItem'

export const Submenu = ({
  submenuItems, rootMenuItem, ...restProps
}) => (
  <div className='Submenu'>
    {Object.entries(submenuItems).map(([childKey, childRoute]) => (
      <MenuItem
        key={`MENU_${rootMenuItem?.key}--${childKey}`}
        to={(rootMenuItem?.route || '') + childRoute}
      >
        {`MENU_${rootMenuItem?.key}--${childKey}`}
      </MenuItem>
    ))}
  </div>

)

Submenu.defaultProps = {
  submenuItems: {},
  rootMenuItem: {
    key: '',
    route: '',
  },
}
