import React from 'react'
import './Hyperlink.scss'

export const Hyperlink = ({
  children, href, title, disabled, ...restProps
}) => (
  <a
    aria-disabled={disabled}
    className='Hyperlink'
    href={href}
    title={title}
  >
    <span>
      {children}
    </span>
  </a>
)

Hyperlink.defaultProps = {
  disabled: false,
  href: '#',
  title: 'Link',
}
