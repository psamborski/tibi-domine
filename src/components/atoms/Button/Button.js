import React from 'react'
import './Button.scss'

import { Link } from 'react-router-dom'

export const Button = ({
  children, to, title, ...restProps
}) => (
  <Link
    className='Button'
    title={title}
    to={to}
  >
    {children}
  </Link>
)

Button.defaultProps = {
  to: '#',
  title: 'Link',
}
