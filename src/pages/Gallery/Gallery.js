import React, { useEffect, useState } from 'react'
import './Gallery.scss'

import axios from 'axios'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'
import ImageMasonry from '../../components/molecules/ImageMasonry'
import ImageCarousel from '../../components/molecules/ImageCarousel'

export const Gallery = ({ ...restProps }) => {
  const [images, setImages] = useState([])
  const [openedImageIndex, setOpenedImageIndex] = useState(null)

  useEffect(() => {
    axios
      .get('https://picsum.photos/v2/list?limit=12')
      .then(resp => setImages(resp?.data || []))
  }, [])

  const catchImageClick = (imageData) => {
    setOpenedImageIndex(Number.isInteger(imageData?.imageIndex) ? imageData?.imageIndex : null)
  }

  return (
    <ArticlePage
      content={(
        <>
          <ImageCarousel
            images={images}
            openedImageIndex={openedImageIndex}
            setOpenedImageIndex={setOpenedImageIndex}
          />
          <ImageMasonry
            catchImageClick={catchImageClick}
            images={images}
          />
        </>
    )}
      imageSrc={BgImage}
      title='Galeria'
    />
  )
}
