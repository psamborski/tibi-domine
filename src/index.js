import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import reportWebVitals from './functions/reportWebVitals'

import './styles/main.scss'

import RoutesComponent from './features/Routes'
import { TranslationProvider } from './features/TranslationContext/TranslationContext'
import { routesList } from './utils/routes'

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <TranslationProvider>
      <RoutesComponent
        routes={routesList}
      />
    </TranslationProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eslint-disable-next-line no-console
reportWebVitals(console.log)
