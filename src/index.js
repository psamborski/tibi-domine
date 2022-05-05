import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import reportWebVitals from './functions/reportWebVitals'

import { RoutesComponent } from './features/Routes/Routes'
import { routesList } from './utils/routes'
import './styles/main.scss'

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RoutesComponent
      routes={routesList}
    />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eslint-disable-next-line no-console
reportWebVitals(console.log)
