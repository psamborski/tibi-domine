import React, { useEffect, useState } from 'react'
import './Gallery.scss'

import axios from 'axios'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'
import ImageMasonry from '../../components/molecules/ImageMasonry'

export const Gallery = ({ ...restProps }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    axios
      .get('https://picsum.photos/v2/list?limit=12')
      .then(resp => setImages(resp?.data || []))
  }, [])

  return (
    <ArticlePage
      content={(
        <ImageMasonry images={images} />
    )}
      imageSrc={BgImage}
      title='Galeria'
    />
  )
}
