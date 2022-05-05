import React from 'react'
import './Footer.scss'

import RoundButton from '../../atoms/RoundButton'
import IconHyperlink from '../../molecules/IconHyperlink'
import ChurchLogo from '../../atoms/ChurchLogo'

export const Footer = () => (
  <footer>
    <section className='Footer-contact-section'>
      <div className='Footer-contact-section--container'>
        <IconHyperlink
          href='tel:+48123123123'
          iconClassname='fa-solid fa-phone'
          title='+48123123123'
        >
          123123123
        </IconHyperlink>
        <IconHyperlink
          href='mailto:adres@mailowy.com'
          iconClassname='fa-solid fa-envelope'
          title='adres@mailowy.com'
        >
          adres@mailowy.com
        </IconHyperlink>
      </div>
    </section>
    <section className='Footer-logo-section'>
      <ChurchLogo />
    </section>
    <section className='Footer-social-section'>
      <RoundButton>
        <span className='fa-brands fa-youtube' />
      </RoundButton>
      <RoundButton>
        <span className='fa-brands fa-facebook-f' />
      </RoundButton>
      <RoundButton>
        <span className='fa-brands fa-instagram' />
      </RoundButton>
    </section>
  </footer>
)
