import React from 'react'
import './ChurchLogo.scss'

import Logo from '../../../assets/images/sanktuarium.png'

export const ChurchLogo = ({
  width, height, ...restProps
}) => (
  <div className='Church-Logo'>
    <a
      href='https://parafiazbawiciela.org/'
      rel='noreferrer'
      target='_blank'
      title='Sanktuarium Matki / Parafia Zbawiciela'
    >
      <img
        alt='Logo - Sanktuarium Matki / Parafia Zbawiciela'
        src={Logo}
      //   style={{
      //   width,
      //   height,
      // }}
      />
    </a>
  </div>
)

// ChurchLogo.defaultProps = {
//   width: 'initial',
//   height: 'initial',
// }
