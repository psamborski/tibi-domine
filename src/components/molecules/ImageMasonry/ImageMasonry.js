import React from 'react'
import './ImageMasonry.scss'

import Masonry from 'react-masonry-css'

export const ImageMasonry = ({
  children, images, ...restProps
}) => {
  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    500: 1,
  }
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='Image-Masonry'
      columnClassName='Image-Masonry__column'
    >
      {
        images.map((x, i) => (
          <img // todo img as lazy atom
            key={`xd-${x.id}`}
            alt='x example'
            loading='lazy'
            src={x.download_url} // todo lib to camel case
          />
        ))
      }
    </Masonry>
  )
}

ImageMasonry.defaultProps = {
  images: [],
}
