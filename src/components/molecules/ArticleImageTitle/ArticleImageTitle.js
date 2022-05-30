import React from 'react'
import './ArticleImageTitle.scss'

import PageTitle from '../../atoms/PageTitle'

export const ArticleImageTitle = ({
  children, title, subtitle, imageSrc, ...restProps
}) => (
  <div
    className='Article-Image-Title'
    style={{
      backgroundImage: `url('${imageSrc}')`,
    }}
  >
    <div className='Page-Title__container'>
      <PageTitle
        level={2}
        subtitle={subtitle}
        title={title}
      />
    </div>
  </div>
)

ArticleImageTitle.defaultProps = {
  subtitle: '',
  title: '',
  imageSrc: '',
}
