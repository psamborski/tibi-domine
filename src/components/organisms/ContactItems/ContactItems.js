import React from 'react'
import './ContactItems.scss'

import IconTile from '../../molecules/IconTile'
import Hyperlink from '../../atoms/Hyperlink'

export const ContactItems = () => (
  <section className='Contact-Items'>
    <IconTile
      disabled
      iconClassname='fa-solid fa-location-dot'
    >
      ul. Jakaśtam tamtam 12/24, 00-000 Warszawa
    </IconTile>
    <IconTile
      disabled
      iconClassname='fa-solid fa-phone'
    >
      <Hyperlink
        href='tel:+48123123123'
        title='+48123123123'
      >
        123123123 / Dariusz Zimnicki
      </Hyperlink>
      <Hyperlink
        href='tel:+48123123123'
        title='+48123123123'
      >
        123123123 / Someone Else
      </Hyperlink>
    </IconTile>
    <IconTile
      disabled
      iconClassname='fa-solid fa-calendar-day'
    >
      próby: wtorki i czwartki o 18:00
    </IconTile>

    <IconTile
      disabled
      iconClassname='fa-brands fa-youtube'
    >
      Chór Tibi Domine
    </IconTile>
    <IconTile
      disabled
      iconClassname='fa-brands fa-facebook-f'
    >
      Chór kameralny Tibi Domine
    </IconTile>
  </section>
)
