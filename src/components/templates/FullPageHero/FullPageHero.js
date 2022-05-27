import React from 'react'
import './FullPageHero.scss'

import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'

export const FullPageHero = ({
 imageSrc, title, ...restProps
}) => (
  <div className='Full-Page-Hero'>
    <Header />
    <section
      className='Hero-Section'
      style={{
        backgroundImage: `url('${imageSrc}')`,
      }}
    >
      <div className='Hero-Section__title'>
        <span>{title}</span>
      </div>
    </section>
    <Footer />
  </div>
)

FullPageHero.defaultProps = {
  imageSrc: '',
  title: '',
}
