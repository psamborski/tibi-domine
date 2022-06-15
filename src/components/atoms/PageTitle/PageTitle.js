import React from 'react'
import './PageTitle.scss'
import { isInt } from '../../../functions/handies'

export const PageTitle = ({
  title, subtitle, level, ...restProps
}) => {
  level = parseInt(level, 10) || 1

  let Heading
  if (isInt(level) && level > 0 && level < 7) {
    Heading = `h${level}`
  } else {
    Heading = 'h1'
  }

  return (
    <Heading className='Page-Title'>
      {subtitle && <span className='Page-Title__subtitle'>{subtitle}</span>}
      {title}
    </Heading>
)
}

PageTitle.defaultProps = {
  title: '',
  subtitle: '',
  level: 1,
}
