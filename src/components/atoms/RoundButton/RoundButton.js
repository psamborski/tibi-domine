import React from 'react'
import './RoundButton.scss'

export const RoundButton = ({
  children, href, title, disabled, size, ...restProps
}) => (
  <a
    aria-disabled={disabled}
    className={`Round-Button ${size}`}
    href={href}
    rel='noreferrer'
    target='_blank'
    title={title}
  >
    <span>
      {children}
    </span>
  </a>
)

RoundButton.defaultProps = {
  disabled: false,
  href: '#',
  title: 'Link',
  size: 'large',
}
