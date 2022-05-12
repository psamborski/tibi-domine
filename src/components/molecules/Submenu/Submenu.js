import React from 'react'
import './Submenu.scss'

import MenuItem from '../../atoms/MenuItem'

export const Submenu = ({
  submenuItems, rootMenuItem, ...restProps
}) => (
  <div className='Submenu'>
    {Object.entries(submenuItems).map(([childKey, childRoute]) => (
      <div
        key={`MENU_${rootMenuItem?.key}--${childKey}`}
        className='Menu-Item__container'
      >
        <MenuItem to={(rootMenuItem?.route || '') + childRoute}>
          {`MENU_${rootMenuItem?.key}--${childKey}`}
        </MenuItem>
      </div>
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
