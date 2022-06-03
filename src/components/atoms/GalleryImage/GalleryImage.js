import React from 'react'
import './GalleryImage.scss'

import { LazyLoadImage } from 'react-lazy-load-image-component'

export const GalleryImage = ({
  src, alt, scrollPosition, ...restProps
}) => (
  <LazyLoadImage
    alt={alt}
    effect='opacity'
    scrollPosition={scrollPosition}
    src={src}
    threshold='215'
    wrapperClassName='Gallery-Image__container'
  />
)

GalleryImage.defaultProps = {
  src: '#',
  alt: 'Tibi Domine Photo',
}
