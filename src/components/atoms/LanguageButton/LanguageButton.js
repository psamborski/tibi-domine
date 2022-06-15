import React from 'react'
import './LanguageButton.scss'

import UK from '../../../assets/images/uk.webp'

export const LanguageButton = ({ ...restProps }) => (
  <button
    className='Language-Button'
    title='Change language' // todo multilingual title
    type='button'
  >
    <img
      alt="Britain\'s flag"
      src={UK}
    />
  </button>
)

LanguageButton.defaultProps = {}
