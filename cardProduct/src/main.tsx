import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeProvider } from 'styled-components'
import { defaultThemes } from './styles/themes/default'
import { GlobalStyle } from './styles/global'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultThemes}>
      <App />
      <GlobalStyle/>
    </ThemeProvider>
  </React.StrictMode>,
)
