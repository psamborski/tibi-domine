import React from 'react'
import './FullPageHero.scss'

import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'

export const FullPageHero = ({
 imageSrc, cta, title, paragraph, ...restProps
}) => (
  <div className='Full-Page-Hero'>
    <Header />
    <section
      className='Hero-Section'
      style={{
        backgroundImage: `url('${imageSrc}')`,
      }}
    >
      <div className='Hero-Section__text'>
        {title || null}
        {paragraph || null}
        {cta || null}
      </div>
    </section>
    <Footer />
  </div>
)

FullPageHero.defaultProps = {
  imageSrc: '',
  cta: null,
  title: '',
  paragraph: '',
}
