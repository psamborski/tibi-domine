import React from 'react'
import './Hyperlink.scss'

export const Hyperlink = ({
  children, href, title, disabled, ...restProps
}) => (
  <span>
    <a
      aria-disabled={disabled}
      className='Hyperlink'
      href={href}
      title={title}
    >
      {children}
    </a>
  </span>
)

Hyperlink.defaultProps = {
  disabled: false,
  href: '#',
  title: 'Link',
}
