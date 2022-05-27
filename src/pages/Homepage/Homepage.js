import React from 'react'
import './Homepage.scss'

import FullPageHero from '../../components/templates/FullPageHero'
import BgImage from '../../assets/images/bg.jpg'

export const Homepage = ({ ...restProps }) => (
  <FullPageHero
    imageSrc={BgImage}
    title='Chór kameralny Tibi Domine'
  />
)
