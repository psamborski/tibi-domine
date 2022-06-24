import React, { useContext } from 'react'
import './LanguageButton.scss'

import TranslationContext from '../../../features/TranslationContext'

import UK from '../../../assets/images/uk.webp'
import PL from '../../../assets/images/pl.webp'

export const LanguageButton = ({ ...restProps }) => {
  const translationContext = useContext(TranslationContext)
  const {
   t, toggleLanguage, language,
  } = translationContext

  return (
    <button
      className='Language-Button'
      onClick={() => toggleLanguage()} // todo multilingual title
      title={t('CHANGE_LANGUAGE')}
      type='button'
    >
      <img
        alt={language === 'pl' ? 'Britain\'s flag' : 'Polska flaga'}
        src={language === 'pl' ? UK : PL}
      />
    </button>
) }

LanguageButton.defaultProps = {}
