import React from 'react'
import './Logo.scss'
import { Link } from 'react-router-dom'

import { ReactComponent as LogoImage } from '../../../assets/images/tibi_domine_logo_white.svg'
import { ROUTES } from '../../../utils/routes'

export const Logo = ({
  width, height, ...restProps
}) => (
  <div className='Logo'>
    <Link
      to={ROUTES.HOMEPAGE}
    >
      <LogoImage />
    </Link>
  </div>
)

// Logo.defaultProps = {
//   width: 'initial',
//   height: 'initial',
// }
