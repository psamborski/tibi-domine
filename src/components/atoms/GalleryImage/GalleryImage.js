import React from 'react'
import './GalleryImage.scss'

import { LazyLoadImage } from 'react-lazy-load-image-component'

export const GalleryImage = ({
  src, alt, id, index, scrollPosition, handleClick, ...restProps
}) => (
  <LazyLoadImage
    alt={alt}
    effect='opacity'
    id={id}
    loading='lazy'
    onClick={(event) => handleClick({
      event,
      imageIndex: index,
    })}
    onKeyDown={(event) => {
      if (event.key === 'Enter') {
        handleClick({
          event,
          imageIndex: index,
        })
      }
    }}
    role='img'
    scrollPosition={scrollPosition}
    src={src}
    tabIndex={0}
    threshold='215'
    wrapperClassName='Gallery-Image__container'
  />
)

GalleryImage.defaultProps = {
  src: '#',
  alt: 'Tibi Domine Photo',
  id: null,
  index: null,
  handleClick: null,
}
