import React from 'react'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import ThemeContext from './styles/ThemeContext'
import GlobalStyle from './styles/global'
import Router from './routes/Routing'

export default function App () {
  // Log errors
  Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [
      new Integrations.BrowserTracing()
    ],
    tracesSampleRate: 1.0
  })

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value='light'>
        <GlobalStyle />
        <Router />
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}
