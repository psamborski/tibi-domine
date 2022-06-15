import React from 'react'
import './IconTile.scss'

import RoundButton from '../../atoms/RoundButton'

export const IconTile = ({
  children, href, title, disabled, iconClassname, ...restProps
}) => (
  <span className='Icon-Tile'>
    <RoundButton
      disabled={disabled}
      href={disabled ? null : href}
      size='small'
      title={disabled ? title : null}
    >
      <span className={iconClassname} />
    </RoundButton>
    <span className='Icon-Tile__text'>
      {children}
    </span>
  </span>
)

IconTile.defaultProps = {
  disabled: false,
  href: '#',
  title: 'Link',
  iconClassname: '',
}
