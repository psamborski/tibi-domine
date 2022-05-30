import React from 'react'
import './Homepage.scss'

import FullPageHero from '../../components/templates/FullPageHero'
import BgImage from '../../assets/images/bg.jpg'
import Button from '../../components/atoms/Button'

export const Homepage = ({ ...restProps }) => (
  <FullPageHero
    cta={(
      <Button
        title='O nas - Tibi Domine'
        to='/about/choir'
      >
        HERO_ABOUT_US
      </Button>
    )}
    imageSrc={BgImage}
    paragraph={(
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </p>
    )}
    title={(
      <h1>
        <span>Chór kameralny</span>
        <br />
        Tibi Domine
      </h1>
    )}
  />
)
