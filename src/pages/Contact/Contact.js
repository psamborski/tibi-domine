import React from 'react'
import './Contact.scss'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'
import Map from '../../components/atoms/Map'
import ContactItems from '../../components/organisms/ContactItems'

export const Contact = ({ ...restProps }) => (
  <ArticlePage
    content={<ContactItems />}
    fullWidthSection={<Map id='Contact-Map' />}
    imageSrc={BgImage}
    title='Kontakt'
  />
)
