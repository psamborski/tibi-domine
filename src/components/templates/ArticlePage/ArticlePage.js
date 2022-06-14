import React from 'react'
import './ArticlePage.scss'

import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import ArticleImageTitle from '../../molecules/ArticleImageTitle'

export const ArticlePage = ({
 title, subtitle, imageSrc, content, fullWidthSection, ...restProps
}) => (
  <div className='Article-Page'>
    <Header />
    <section
      className='Article-Section'
    >
      <ArticleImageTitle
        imageSrc={imageSrc}
        subtitle={subtitle}
        title={title}
      />

      <article className='Article-Section__content'>
        {content}
      </article>
    </section>
    {fullWidthSection
      && (
        <section className='Article-Section__full-width'>
          {fullWidthSection}
        </section>
      )}
    <Footer />
  </div>
)

ArticlePage.defaultProps = {
  title: '',
  subtitle: '',
  imageSrc: '',
  content: '',
  fullWidthSection: null,
}
