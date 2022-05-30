import React, { useEffect } from 'react'
import './FacebookFeed.scss'

export const FacebookFeed = () => {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v14.0'
    script.async = true
    script.defer = true
    script.crossOrigin = 'anonymous'
    script.nonce = 'jqGQQE4n'

    document.body.appendChild(script)

    if (window.FB) {
      window.FB.XFBML.parse()
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <div id='fb-root' />
      <div
        className='fb-page'
        data-adapt-container-width='true'
        data-height='800'
        data-hide-cover='false'
        data-href='https://www.facebook.com/tibidominechoir'
        data-show-facepile='false'
        data-small-header='false'
        data-tabs='timeline'
        data-width='500'
      >
        <blockquote
          cite='https://www.facebook.com/tibidominechoir'
          className='fb-xfbml-parse-ignore'
        >
          <a href='https://www.facebook.com/tibidominechoir'>Tibi Domine</a>
        </blockquote>
      </div>
    </>
  )
}
