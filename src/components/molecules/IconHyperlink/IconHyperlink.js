import React from 'react'
import './IconHyperlink.scss'

import RoundButton from '../../atoms/RoundButton'
import Hyperlink from '../../atoms/Hyperlink'

export const IconHyperlink = ({
  children, href, title, disabled, iconClassname, ...restProps
}) => (
  <span className='Icon-Hyperlink'>
    <RoundButton
      disabled={disabled}
      href={href}
      size='small'
      title={title}
    >
      <span className={iconClassname} />
    </RoundButton>
    <Hyperlink
      disabled={disabled}
      href={href}
      title={title}

    >
      {children}
    </Hyperlink>
  </span>
)

IconHyperlink.defaultProps = {
  disabled: false,
  href: '#',
  title: 'Link',
  iconClassname: '',
}
