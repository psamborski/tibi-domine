import React from 'react'
import './News.scss'

import BgImage from '../../assets/images/bg.jpg'
import ArticlePage from '../../components/templates/ArticlePage'
import FacebookFeed from '../../features/FacebookFeed'

export const News = ({ ...restProps }) => (
  <ArticlePage
    imageSrc={BgImage}
    text={(
      <FacebookFeed />
    )}
    title='Aktualności'
  />
)
